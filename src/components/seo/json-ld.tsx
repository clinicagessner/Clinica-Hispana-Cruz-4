import { getLocale } from "next-intl/server";
import { SITE_CONFIG, CONTACT_INFO, SERVICES, SOCIAL_LINKS } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { getLocalizedService } from "@/lib/utils";

export async function JsonLdMedicalClinic() {
  const [placeData, locale] = await Promise.all([
    getGooglePlaceData(),
    getLocale(),
  ]);

  // Rating y reseñas solo si vienen de Google. Si la API falla no se publica
  // nada: un 0/0 es inválido y reseñas de relleno violan las políticas de Google.
  const hasGoogleRating = !!placeData && placeData.totalReviews > 0;

  const aggregateRating = hasGoogleRating
    ? {
        "@type": "AggregateRating" as const,
        ratingValue: placeData.rating,
        reviewCount: placeData.totalReviews,
        bestRating: 5,
        worstRating: 1,
      }
    : undefined;

  const reviewItems = hasGoogleRating && placeData.reviews.length
    ? placeData.reviews.slice(0, 5).map((r) => ({
        "@type": "Review" as const,
        author: { "@type": "Person" as const, name: r.author_name },
        datePublished: new Date(r.time * 1000).toISOString().slice(0, 10),
        reviewBody: r.text,
        reviewRating: { "@type": "Rating" as const, ratingValue: r.rating, bestRating: 5 },
        itemReviewed: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
      }))
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        // Nombre tal como aparece en la ficha de Google (sin tilde).
        alternateName: "Clinica Hispana Cruz 4",
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.baseUrl,
        foundingDate: "2020-01",
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        image: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`,
        logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Debit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address,
          addressLocality: CONTACT_INFO.city,
          addressRegion: CONTACT_INFO.state,
          postalCode: CONTACT_INFO.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT_INFO.coordinates.lat,
          longitude: CONTACT_INFO.coordinates.lng,
        },
        aggregateRating,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        availableLanguage: [
          {
            "@type": "Language",
            name: "Spanish",
            alternateName: "es",
          },
          {
            "@type": "Language",
            name: "English",
            alternateName: "en",
          },
        ],
        availableService: SERVICES.map((service) => {
          const localized = getLocalizedService(service, locale);
          return {
            "@type": "MedicalProcedure",
            "@id": `${SITE_CONFIG.baseUrl}/services/${service.slug}#procedure`,
            name: localized.title,
            description: localized.description,
            url: `${SITE_CONFIG.baseUrl}${locale === "en" ? "/en" : ""}/services/${service.slug}`,
          };
        }),
        hasMap: CONTACT_INFO.googleMapsUrl,
        sameAs: [
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.instagram,
        ].filter(Boolean),
        // Houston (área de la ficha) y los barrios del suroeste que nombra el sitio.
        areaServed: [
          { "@type": "City", name: "Houston", "@id": "https://www.wikidata.org/wiki/Q16555" },
          { "@type": "Place", name: "Alief, Houston, TX" },
          { "@type": "Place", name: "Sharpstown, Houston, TX" },
          { "@type": "Place", name: "Mission Bend, TX" },
          { "@type": "Place", name: "Westchase, Houston, TX" },
          { "@type": "Place", name: "Gulfton, Houston, TX" },
          { "@type": "City", name: "Bellaire, TX" },
        ],
        // Atributos declarados en la ficha de Google.
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Entrada accesible para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: "Sanitarios accesibles para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: "Estacionamiento accesible para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: "Estacionamiento gratuito en el lugar", value: true },
        ],
        publicAccess: true,
        // Solo lo que ejerce el equipo médico general: sin urgencias ni
        // ginecología como especialidad (no hay titulados, §9 del playbook).
        medicalSpecialty: [
          "https://schema.org/FamilyPractice",
          "https://schema.org/PrimaryCare",
          "https://schema.org/PreventiveMedicine",
          "https://schema.org/LaboratoryScience",
        ],
        review: reviewItems,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.baseUrl}/#website`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        },
        inLanguage: ["es-MX", "en-US"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function JsonLdFAQ({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function JsonLdBreadcrumb({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalProcedureSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  bodyLocation?: string;
  procedureType?: string;
}

export function JsonLdMedicalProcedure({
  name,
  description,
  image,
  url,
  bodyLocation,
  procedureType = "NoninvasiveProcedure",
}: MedicalProcedureSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${SITE_CONFIG.baseUrl}/services/${url.split("/services/")[1]}#procedure`,
    name,
    description,
    image: `${SITE_CONFIG.baseUrl}${image}`,
    url,
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation && { bodyLocation }),
    howPerformed: description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdCollectionPage({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
    provider: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Nodo ligero con el mismo @id que el completo de la home. Va en cada página
// que no es la home ni la landing de reseñas; nunca en el layout (§7 B0.14).
export function JsonLdMedicalClinicRef() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    telephone: CONTACT_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address,
      addressLocality: CONTACT_INFO.city,
      addressRegion: CONTACT_INFO.state,
      postalCode: CONTACT_INFO.zip,
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// MedicalWebPage de un servicio (§12 B2): revisor = la clínica, sin médico
// nombrado (§9). mainEntity apunta al MedicalProcedure con @id estable.
export function JsonLdMedicalWebPage({
  url,
  slug,
  name,
  description,
  lastReviewed,
  locale,
}: {
  url: string;
  slug: string;
  name: string;
  description: string;
  lastReviewed: string;
  locale: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    lastReviewed,
    reviewedBy: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    about: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    isPartOf: { "@id": `${SITE_CONFIG.baseUrl}/#website` },
    mainEntity: { "@id": `${SITE_CONFIG.baseUrl}/services/${slug}#procedure` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

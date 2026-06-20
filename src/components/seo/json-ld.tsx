import { SITE_CONFIG, CONTACT_INFO, SERVICES, SOCIAL_LINKS, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

const FALLBACK_REVIEWS = [
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "María García" },
    datePublished: "2026-03-28",
    reviewBody: "Excelente atención, todo el personal habla español y me sentí muy cómoda. El doctor fue muy amable y profesional. Recomiendo esta clínica a toda la comunidad hispana.",
    reviewRating: { "@type": "Rating" as const, ratingValue: 5, bestRating: 5 },
  },
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "Carlos Rodríguez" },
    datePublished: "2026-03-10",
    reviewBody: "Muy buen servicio, no tuve que esperar mucho y los precios son muy accesibles. Me atendieron sin cita y resolvieron mi problema de salud rápidamente.",
    reviewRating: { "@type": "Rating" as const, ratingValue: 5, bestRating: 5 },
  },
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "Ana Martínez" },
    datePublished: "2026-03-21",
    reviewBody: "La mejor clínica hispana en Houston. Llevé a mis hijos y los trataron con mucho cariño. El laboratorio es muy eficiente y los resultados fueron rápidos.",
    reviewRating: { "@type": "Rating" as const, ratingValue: 5, bestRating: 5 },
  },
  {
    "@type": "Review" as const,
    author: { "@type": "Person" as const, name: "José López" },
    datePublished: "2026-02-15",
    reviewBody: "Muy profesionales y atentos. Me explicaron todo en español y me dieron opciones de pago. Definitivamente volveré para mis chequeos regulares.",
    reviewRating: { "@type": "Rating" as const, ratingValue: 5, bestRating: 5 },
  },
];

export async function JsonLdMedicalClinic() {
  const placeData = await getGooglePlaceData();

  const aggregateRating = {
    "@type": "AggregateRating" as const,
    ratingValue: placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating,
    reviewCount: placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews,
    bestRating: 5,
    worstRating: 1,
  };

  const reviewItems = placeData?.reviews?.length
    ? placeData.reviews.slice(0, 5).map((r) => ({
        "@type": "Review" as const,
        author: { "@type": "Person" as const, name: r.author_name },
        datePublished: new Date(r.time * 1000).toISOString().slice(0, 10),
        reviewBody: r.text,
        reviewRating: { "@type": "Rating" as const, ratingValue: r.rating, bestRating: 5 },
        itemReviewed: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
      }))
    : FALLBACK_REVIEWS.map((r) => ({
        ...r,
        itemReviewed: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
      }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.baseUrl,
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
        availableService: SERVICES.slice(0, 10).map((service) => ({
          "@type": "MedicalProcedure",
          name: service.title,
          description: service.description,
          url: `${SITE_CONFIG.baseUrl}/services/${service.slug}`,
        })),
        sameAs: [
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.instagram,
        ].filter(Boolean),
        areaServed: {
          "@type": "City",
          name: "Houston",
          "@id": "https://www.wikidata.org/wiki/Q16555",
        },
        medicalSpecialty: [
          "https://schema.org/FamilyPractice",
          "https://schema.org/EmergencyMedicine",
          "https://schema.org/PreventiveMedicine",
          "https://schema.org/Gynecologic",
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
    name,
    description,
    image: `${SITE_CONFIG.baseUrl}${image}`,
    url,
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation && { bodyLocation }),
    howPerformed: description,
    provider: {
      "@type": "MedicalClinic",
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
      name: SITE_CONFIG.name,
      telephone: CONTACT_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_INFO.address,
        addressLocality: CONTACT_INFO.city,
        addressRegion: CONTACT_INFO.state,
        postalCode: CONTACT_INFO.zip,
        addressCountry: "US",
      },
    },
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
      "@type": "MedicalClinic",
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

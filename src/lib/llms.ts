import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SERVICES,
  FAQ_ITEMS,
} from "@/lib/constants";
import { PROMOS } from "@/lib/promotions";
import { getServiceFAQs } from "@/lib/service-faqs";
import { getBlogPosts } from "@/lib/blog";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";

type Locale = "es" | "en";

const BASE = SITE_CONFIG.baseUrl;

/** URL absoluta. El español no lleva prefijo; el inglés siempre lleva /en. */
function url(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path;
  return locale === "en" ? `${BASE}/en${clean}` : `${BASE}${clean}`;
}

/**
 * Enlace Markdown. Toda URL de estos ficheros sale por aquí: una URL suelta
 * no cuenta como enlace y el rastreo agéntico da el fichero por vacío.
 */
function link(text: string, path: string, locale: Locale): string {
  return `[${text}](${url(path, locale)})`;
}

function nap(locale: Locale): string {
  const en = locale === "en";
  const address = `${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`;
  const hours = en
    ? "Monday to Sunday, 9:00 AM - 9:00 PM"
    : CONTACT_INFO.hours;

  // wa.me quiere E.164 sin "+"; el texto visible va formateado para que el
  // NAP de llms.txt coincida con el del sitio y el de la ficha.
  const wa = CONTACT_INFO.whatsapp;
  const waFormatted = `+${wa.slice(0, 1)} (${wa.slice(1, 4)}) ${wa.slice(4, 7)}-${wa.slice(7)}`;

  return [
    `- ${en ? "Name" : "Nombre"}: ${SITE_CONFIG.name}`,
    `- ${en ? "Address" : "Dirección"}: ${address}`,
    `- ${en ? "Phone" : "Teléfono"}: ${CONTACT_INFO.phoneFormatted}`,
    `- WhatsApp: [${waFormatted}](https://wa.me/${wa})`,
    `- ${en ? "Email" : "Correo"}: ${CONTACT_INFO.email}`,
    `- ${en ? "Hours" : "Horario"}: ${hours}`,
    `- ${en ? "Map" : "Mapa"}: [Google Maps](${CONTACT_INFO.googleMapsUrl})`,
    `- ${en ? "Website" : "Sitio web"}: ${link(SITE_CONFIG.name, "/", locale)}`,
  ].join("\n");
}

function socials(): string {
  return [
    `- [Facebook](${SOCIAL_LINKS.facebook})`,
    `- [Instagram](${SOCIAL_LINKS.instagram})`,
    `- [Google Business Profile](${CONTACT_INFO.googleMapsUrl})`,
  ].join("\n");
}

/** Promociones vigentes con los textos del flyer, en el idioma pedido. */
function promotions(locale: Locale) {
  const en = locale === "en";
  return PROMOS.map((p) => ({
    title: (en ? p.titleEn : undefined) ?? p.title,
    price: p.price ?? null,
    blurb: (en ? p.descriptionEn : p.description) ?? "",
    includes: (en ? p.includesEn : p.includes) ?? [],
  }));
}

function sortedServices() {
  return [...SERVICES].sort((a, b) => a.order - b.order);
}

/** Preguntas frecuentes de la home: en constants.ts son claves de traducción. */
function homeFaqs(locale: Locale): { question: string; answer: string }[] {
  const messages = (locale === "en" ? enMessages : esMessages) as {
    faq: Record<string, string>;
  };

  return FAQ_ITEMS.map((item) => ({
    question: messages.faq[item.question.replace("faq.", "")] ?? "",
    answer: messages.faq[item.answer.replace("faq.", "")] ?? "",
  })).filter((f) => f.question && f.answer);
}

/** Índice. Una línea por página, siempre como enlace Markdown absoluto. */
export function buildLlmsTxt(): string {
  const es: Locale = "es";
  const en: Locale = "en";
  const services = sortedServices();
  const promos = promotions(es);
  const posts = getBlogPosts("es");
  const postsEn = getBlogPosts("en");

  const out: string[] = [];

  out.push(`# ${SITE_CONFIG.name}`);
  out.push("");
  out.push(
    `> ${SITE_CONFIG.description} Está en el suroeste de Houston (Beechnut St, cerca de Alief y Sharpstown) y abre de lunes a domingo, de 9 AM a 9 PM.`
  );
  out.push("");

  out.push("## Datos de la clínica / Clinic details");
  out.push("");
  out.push(nap(es));
  out.push("");

  out.push("## Servicios");
  out.push("");
  for (const service of services) {
    out.push(
      `- ${link(service.title, `/services/${service.slug}`, es)} — ${service.description}`
    );
  }
  out.push("");

  out.push("## Services (English)");
  out.push("");
  for (const service of services) {
    out.push(
      `- ${link(service.titleEn ?? service.title, `/services/${service.slug}`, en)} — ${
        service.descriptionEn ?? service.description
      }`
    );
  }
  out.push("");

  if (promos.length > 0) {
    out.push("## Promociones vigentes / Current promotions");
    out.push("");
    for (const promo of promos) {
      const price = promo.price ? ` (${promo.price})` : "";
      out.push(`- ${promo.title}${price} — ${promo.blurb}`);
    }
    out.push(`- ${link("Todas las promociones", "/promociones", es)}`);
    out.push(`- ${link("All promotions", "/promociones", en)}`);
    out.push("");
  }

  out.push("## Blog");
  out.push("");
  for (const post of posts) {
    out.push(`- ${link(post.title, `/blog/${post.slug}`, es)} — ${post.description}`);
  }
  for (const post of postsEn) {
    out.push(`- ${link(post.title, `/blog/${post.slug}`, en)} — ${post.description}`);
  }
  out.push("");

  out.push("## Preguntas frecuentes");
  out.push("");
  for (const faq of homeFaqs(es)) {
    out.push(`- **${faq.question}** ${faq.answer}`);
  }
  out.push("");

  out.push("## Otras páginas / Other pages");
  out.push("");
  out.push(`- ${link("Inicio", "/", es)} · ${link("Home", "/", en)}`);
  out.push(
    `- ${link("Todos los servicios", "/services", es)} · ${link("All services", "/services", en)}`
  );
  out.push(`- ${link("Blog", "/blog", es)} · ${link("Blog", "/blog", en)}`);
  out.push(
    `- ${link("Aviso de privacidad", "/privacy", es)} · ${link("Privacy policy", "/privacy", en)}`
  );
  out.push(`- [llms-full.txt](${BASE}/llms-full.txt) — contenido completo`);
  out.push(`- [Sitemap](${BASE}/sitemap.xml)`);
  out.push("");

  out.push("## Redes y perfiles");
  out.push("");
  out.push(socials());
  out.push("");

  return out.join("\n");
}

/** Contenido completo, en los dos idiomas, para citar sin rastrear el sitio. */
export function buildLlmsFullTxt(): string {
  const es: Locale = "es";
  const en: Locale = "en";
  const services = sortedServices();
  const out: string[] = [];

  out.push(`# ${SITE_CONFIG.name} — contenido completo`);
  out.push("");
  out.push(nap(es));
  out.push("");
  out.push(
    `Índice de páginas: [llms.txt](${BASE}/llms.txt). Sitio: ${link(SITE_CONFIG.name, "/", es)}.`
  );
  out.push("");

  out.push("---");
  out.push("");
  out.push("## Servicios / Services");
  out.push("");

  for (const service of services) {
    out.push(`### ${service.title}`);
    out.push("");
    out.push(`${link("Página del servicio", `/services/${service.slug}`, es)}`);
    out.push("");
    out.push(service.longDescription);
    out.push("");
    out.push("**Incluye:**");
    for (const feature of service.features) out.push(`- ${feature}`);
    out.push("");

    const faqs = getServiceFAQs(service.slug, "es");
    if (faqs && faqs.length > 0) {
      out.push("**Preguntas frecuentes:**");
      out.push("");
      for (const faq of faqs) {
        out.push(`- **${faq.question}** ${faq.answer}`);
      }
      out.push("");
    }

    out.push(`#### ${service.titleEn ?? service.title} (English)`);
    out.push("");
    out.push(`${link("Service page", `/services/${service.slug}`, en)}`);
    out.push("");
    out.push(service.longDescriptionEn ?? service.longDescription);
    out.push("");
    const featuresEn = service.featuresEn ?? service.features;
    out.push("**Includes:**");
    for (const feature of featuresEn) out.push(`- ${feature}`);
    out.push("");

    const faqsEn = getServiceFAQs(service.slug, "en");
    if (faqsEn && faqsEn.length > 0) {
      out.push("**FAQ:**");
      out.push("");
      for (const faq of faqsEn) {
        out.push(`- **${faq.question}** ${faq.answer}`);
      }
      out.push("");
    }
    out.push("---");
    out.push("");
  }

  const promos = promotions(es);
  const promosEn = promotions(en);
  if (promos.length > 0) {
    out.push("## Promociones vigentes");
    out.push("");
    out.push(`${link("Página de promociones", "/promociones", es)}`);
    out.push("");
    promos.forEach((promo, i) => {
      const promoEn = promosEn[i];
      out.push(`### ${promo.title}${promo.price ? ` — ${promo.price}` : ""}`);
      out.push("");
      out.push(promo.blurb);
      for (const item of promo.includes) out.push(`- ${item}`);
      out.push("");
      if (promoEn) {
        out.push(`**${promoEn.title}${promoEn.price ? ` — ${promoEn.price}` : ""}** (English)`);
        out.push("");
        out.push(promoEn.blurb);
        for (const item of promoEn.includes) out.push(`- ${item}`);
        out.push("");
      }
    });
    out.push("---");
    out.push("");
  }

  for (const [locale, heading] of [
    ["es", "## Blog"],
    ["en", "## Blog (English)"],
  ] as const) {
    const posts = getBlogPosts(locale);
    if (posts.length === 0) continue;
    out.push(heading);
    out.push("");
    for (const post of posts) {
      out.push(`### ${post.title}`);
      out.push("");
      out.push(
        `${link(locale === "en" ? "Read the post" : "Leer el artículo", `/blog/${post.slug}`, locale)} · ${post.date}`
      );
      out.push("");
      out.push(post.description);
      out.push("");
      out.push(post.content ?? "");
      out.push("");
      out.push("---");
      out.push("");
    }
  }

  out.push("## Preguntas frecuentes / FAQ");
  out.push("");
  for (const faq of homeFaqs(es)) {
    out.push(`**${faq.question}**`);
    out.push("");
    out.push(faq.answer);
    out.push("");
  }
  for (const faq of homeFaqs(en)) {
    out.push(`**${faq.question}**`);
    out.push("");
    out.push(faq.answer);
    out.push("");
  }

  out.push("## Redes y perfiles");
  out.push("");
  out.push(socials());
  out.push("");
  out.push(`Servicios listados: ${link("todos los servicios", "/services", es)}.`);
  out.push("");

  return out.join("\n");
}

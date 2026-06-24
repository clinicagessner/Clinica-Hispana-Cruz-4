import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import { StarRating } from "@/components/sections/star-rating";
import { PromotionsGrid } from "@/components/promotions/promotions-grid";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLdBreadcrumb, JsonLdFAQ } from "@/components/seo/json-ld";
import { getGooglePlaceData } from "@/lib/google-places";
import { SITE_CONFIG, GOOGLE_REVIEWS_DATA } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "promotionsPage" });
  const localePath = locale === "en" ? "/en" : "";

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
      languages: {
        es: "/promociones",
        en: "/en/promociones",
        "x-default": "/promociones",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("subtitle"),
      url: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/images/promos/v2/promo-2.webp`,
          width: 1080,
          height: 1350,
          alt: t("title"),
        },
      ],
    },
  };
}

export default async function PromocionesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, googleData] = await Promise.all([
    getTranslations("promotionsPage"),
    getGooglePlaceData(),
  ]);

  const rating = googleData?.rating ?? 5;
  const totalReviews =
    googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;

  const localePath = locale === "en" ? "/en" : "";
  const faqs = [
    { question: t("faqQ1"), answer: t("faqA1") },
    { question: t("faqQ2"), answer: t("faqA2") },
    { question: t("faqQ3"), answer: t("faqA3") },
  ];

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          {
            name: locale === "en" ? "Home" : "Inicio",
            url: `${SITE_CONFIG.baseUrl}${localePath}`,
          },
          {
            name: locale === "en" ? "Promotions" : "Promociones",
            url: `${SITE_CONFIG.baseUrl}${localePath}/promociones`,
          },
        ]}
      />
      <JsonLdFAQ questions={faqs} />

      <main className="min-h-screen bg-background">
        {/* Encabezado compacto */}
        <section className="relative overflow-hidden bg-linear-to-br from-blue-primary via-blue-dark to-blue-deep pt-24 pb-12 md:pt-28 md:pb-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-16 size-96 rounded-full bg-red-accent/15 blur-3xl" />
            <div className="absolute -bottom-28 -left-16 size-96 rounded-full bg-yellow-accent/15 blur-3xl" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-5 transition-colors"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {t("backToHome")}
            </Link>

            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
                {t("eyebrow")}
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight drop-shadow-sm">
                {t("title")}
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90">
                {t("subtitle")}
              </p>

              {/* Badge de reseñas en vivo */}
              <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/15 px-4 py-2 ring-1 ring-white/25 backdrop-blur-sm">
                <StarRating rating={rating} starClassName="size-4" />
                <span className="text-sm font-semibold text-white">
                  {rating.toFixed(1)}
                  {totalReviews > 0 && (
                    <>
                      {" · "}
                      {totalReviews}
                      {t("reviewsSuffix")}
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de promociones */}
        <section className="bg-cyan-warm py-14 md:py-20">
          <div className="container mx-auto px-4">
            <PromotionsGrid />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cyan-bg py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-2xl md:text-3xl font-heading font-bold text-slate-dark">
                {t("faqTitle")}
              </h2>
              <div className="flex flex-col gap-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-2xl bg-white p-5 md:p-6 shadow-sm ring-1 ring-blue-dark/5"
                  >
                    <h3 className="font-heading text-base md:text-lg font-bold text-slate-dark">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-primary">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formulario (lead) */}
        <section
          id="lead-form"
          className="scroll-mt-28 bg-cyan-warm py-14 md:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark">
                  {t("formTitle")}
                </h2>
                <p className="mt-2 text-base text-slate-primary">
                  {t("formSubtitle")}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-cyan-bg-alt">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

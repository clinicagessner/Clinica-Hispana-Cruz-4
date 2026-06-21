import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSearch } from "@/components/sections/hero-search";
import { StarRating } from "@/components/sections/star-rating";
import { getGooglePlaceData } from "@/lib/google-places";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";

export async function Hero() {
  const [t, googleData] = await Promise.all([
    getTranslations("hero"),
    getGooglePlaceData(),
  ]);
  const rating = googleData?.rating ?? 5;
  const totalReviews =
    googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;

  const features = ["1", "2", "3", "4"] as const;
  const fullTitle = t("title");
  const highlightMatch = fullTitle.match(/(.*?)(Cruz 4)(.*)/);

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative">
      {/* ============ TOP BAND — brand background + service search ============ */}
      <div className="relative overflow-hidden bg-blue-primary">
        {/* Mismo tratamiento que /services: degradado rojo sólido + foto al 25% */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-br from-blue-primary via-blue-dark to-slate-900"
        />
        <div aria-hidden="true" className="absolute inset-0 opacity-25">
          <Image
            src="/images/hero-bg.webp"
            alt=""
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover object-[35%_22%]"
          />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-16 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 right-0 w-md h-112 rounded-full bg-yellow-accent/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-xl h-144 rounded-full bg-red-accent/20 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 pt-12 pb-14 md:pt-16 md:pb-20">
          <p className="text-center text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white drop-shadow-sm mb-2">
            {t("searchEyebrow")}
          </p>
          <p className="text-center text-sm md:text-base text-white/85 mb-7 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
          <HeroSearch />
        </div>
      </div>

      {/* ============ MAIN HERO — two columns ============ */}
      <div className="relative overflow-hidden bg-cyan-warm py-10 md:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-yellow-accent/10 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* LEFT — Text content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-blue-primary/10 text-blue-primary rounded-full px-4 py-1.5 mb-4">
                <Clock className="size-4" aria-hidden="true" />
                <span className="text-xs md:text-sm font-semibold">{t("badge")}</span>
              </div>

              <h1
                id="hero-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark leading-tight mb-3"
              >
                {highlightMatch ? (
                  <>
                    {highlightMatch[1]}
                    <span className="text-blue-primary">{highlightMatch[2]}</span>
                    {highlightMatch[3]}
                  </>
                ) : (
                  fullTitle
                )}
              </h1>

              <p className="text-base md:text-lg text-slate-primary mb-5 max-w-2xl">
                {t("subtitleShort")}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 max-w-xl">
                {features.map((key) => (
                  <li key={key} className="flex items-start gap-2.5">
                    <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-primary/10 mt-0.5">
                      <CheckCircle2 className="size-3.5 text-blue-primary" aria-hidden="true" />
                    </span>
                    <span className="text-slate-dark text-sm font-medium leading-snug">
                      {t(`features.${key}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-accent hover:bg-red-accent-dark text-white text-sm md:text-base px-6 py-5 gap-2 shadow-lg shadow-red-accent/30"
                >
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    aria-label={`${t("ctaCall")} — ${CONTACT_INFO.phoneFormatted}`}
                  >
                    <Phone className="size-5" aria-hidden="true" />
                    {t("ctaCall")}
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white text-sm md:text-base px-6 py-5 gap-2 bg-white"
                >
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("ctaLocation")} — ${CONTACT_INFO.address}, ${CONTACT_INFO.city} ${CONTACT_INFO.state}`}
                  >
                    <MapPin className="size-5" aria-hidden="true" />
                    {t("ctaLocation")}
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <StarRating rating={rating} starClassName="size-4 md:size-5" />
                <p className="text-xs md:text-sm text-slate-primary font-medium">
                  {totalReviews}{t("googleReviews")}
                </p>
              </div>
            </div>

            {/* RIGHT — Brand panel card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-5 md:p-6">
                  <div className="absolute top-4 right-4 z-10 bg-yellow-accent text-blue-primary text-[10px] md:text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1 shadow-md">
                    Sin cita previa
                  </div>

                  <div className="mb-4 pr-28">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-dark mb-1 leading-tight">
                      {t("cardTitle")}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-muted leading-snug">
                      {t("cardSubtitle")}
                    </p>
                  </div>

                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-cyan-bg mb-4">
                    <Image
                      src="/images/hero-clinic.webp"
                      alt="Clínica Hispana Cruz 4 en 10100 Beechnut St, Houston TX"
                      fill
                      priority
                      fetchPriority="high"
                      quality={75}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    <div className="flex items-start gap-2">
                      <Clock className="size-4 shrink-0 text-red-accent mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wide text-slate-muted font-semibold">
                          Horario
                        </p>
                        <p className="text-[11px] md:text-xs text-slate-dark font-medium leading-tight">
                          {CONTACT_INFO.hoursWeekday}
                        </p>
                      </div>
                    </div>
                    <a
                      href={CONTACT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 group"
                    >
                      <MapPin className="size-4 shrink-0 text-red-accent mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wide text-slate-muted font-semibold">
                          Dirección
                        </p>
                        <p className="text-[11px] md:text-xs text-slate-dark font-medium leading-tight group-hover:text-blue-primary group-hover:underline">
                          {CONTACT_INFO.address}, {CONTACT_INFO.city} {CONTACT_INFO.state}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-yellow-accent/20 blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -z-10 -bottom-6 -left-6 w-48 h-48 rounded-full bg-blue-primary/10 blur-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const highlightMatch = fullTitle.match(/(.*?)(Houston)(.*)/);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      {/* ============ Full-bleed background image + overlay ============ */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={75}
          sizes="100vw"
          className="object-cover object-[35%_22%]"
        />
        {/* Brand gradient for text legibility behind the centered copy */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-dark/95 via-blue-primary/85 to-blue-dark/85" />
        <div className="absolute inset-0 bg-linear-to-t from-blue-dark/80 via-transparent to-blue-dark/30 md:bg-none" />
      </div>

      {/* Soft brand glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 w-md h-112 rounded-full bg-yellow-accent/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-14 md:py-24 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl text-center mx-auto">
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm px-4 py-1.5 mb-5">
            <StarRating rating={rating} starClassName="size-4" />
            <span className="text-sm font-semibold text-white">
              {totalReviews}
              {t("googleReviews")}
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4 drop-shadow-sm"
          >
            {highlightMatch ? (
              <>
                {highlightMatch[1]}
                <span className="text-yellow-accent">{highlightMatch[2]}</span>
                {highlightMatch[3]}
              </>
            ) : (
              fullTitle
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-xl mx-auto">
            {t("subtitleShort")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-7 justify-center">
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
              className="border-2 border-white text-blue-primary hover:bg-white/90 text-sm md:text-base px-6 py-5 gap-2 bg-white"
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

          {/* Contact form prompt */}
          <p className="text-sm text-white/90 mb-7 text-center">
            {t("contactPrompt")}{" "}
            <a
              href="#contact"
              className="font-semibold text-yellow-accent underline underline-offset-4 hover:text-white transition-colors"
            >
              {t("contactLink")}
            </a>
          </p>

          {/* Feature list */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 max-w-xl mx-auto text-left">
            {features.map((key) => (
              <li key={key} className="flex items-start gap-2.5">
                <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/15 ring-1 ring-white/25 mt-0.5">
                  <CheckCircle2
                    className="size-3.5 text-yellow-accent"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-white text-sm font-medium leading-snug">
                  {t(`features.${key}`)}
                </span>
              </li>
            ))}
          </ul>

          {/* Location + hours strip */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 justify-center border-t border-white/15 pt-5">
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm text-white/90 hover:text-yellow-accent transition-colors"
            >
              <MapPin className="size-4 shrink-0 text-yellow-accent" aria-hidden="true" />
              <span className="font-medium">
                {CONTACT_INFO.address}, {CONTACT_INFO.city} {CONTACT_INFO.state}
              </span>
            </a>
            <span aria-hidden="true" className="hidden sm:inline text-white/30">
              •
            </span>
            <span className="inline-flex items-center justify-center gap-2 text-sm text-white/90">
              <Clock className="size-4 shrink-0 text-yellow-accent" aria-hidden="true" />
              <span className="font-medium">{CONTACT_INFO.hoursWeekday}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Fundido hacia la siguiente sección (Promociones — bg-cyan-warm) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-linear-to-b from-transparent to-cyan-warm md:h-32"
      />
    </section>
  );
}

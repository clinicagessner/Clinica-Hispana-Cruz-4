import Script from "next/script";

// GA4 y Google Ads con un solo gtag/js. Antes cargaban tres: el de
// @next/third-parties (con su propio preload de gtm) y el del tag de Ads.
// IDs de env (NO hardcodear); si falta uno, se configura solo el otro.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function GoogleTags() {
  const ids = [GA_ID, GOOGLE_ADS_ID].filter(Boolean) as string[];
  if (ids.length === 0) return null;
  return (
    <>
      {/* lazyOnload: no compite con el LCP. GA4 y Ads encolan en dataLayer. */}
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${ids.map((id) => `gtag('config', '${id}');`).join("\n          ")}
        `}
      </Script>
    </>
  );
}

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Slugs de servicios retirados en el swap al catálogo de 29 servicios (familia).
// Cada uno se redirige (301) a su equivalente más cercano para preservar el
// link-equity y evitar 404 en URLs ya indexadas o enlazadas externamente.
const RETIRED_SERVICE_SLUGS: Record<string, string> = {
  urologia: "salud-hombre",
  "planificacion-familiar": "anticonceptivos",
  "infecciones-vaginales": "ginecologia",
  "vacunas-anticonceptivas": "anticonceptivos",
  laboratorio: "examenes-sangre",
  // Sin equivalente exacto -> hub de medicina general (condiciones crónicas)
  "examenes-generales": "condiciones-cronicas",
  "medicina-familiar": "condiciones-cronicas",
  "dolores-musculares": "condiciones-cronicas",
};

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "@phosphor-icons/react",
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-select",
    ],
  },
  async redirects() {
    // localePrefix: "as-needed" -> ES sin prefijo (/services/...),
    // EN con prefijo (/en/services/...). Cubrimos ambos.
    return Object.entries(RETIRED_SERVICE_SLUGS).flatMap(([from, to]) => [
      {
        source: `/services/${from}`,
        destination: `/services/${to}`,
        permanent: true,
      },
      {
        source: `/en/services/${from}`,
        destination: `/en/services/${to}`,
        permanent: true,
      },
    ]);
  },
  async headers() {
    const isDev = process.env.NODE_ENV !== "production";
    // En dev, permitir el websocket de HMR de Next y NO forzar upgrade a https.
    const devConnect = isDev
      ? " ws://localhost:* ws://127.0.0.1:* http://localhost:* http://127.0.0.1:*"
      : "";

    const csp = [
      "default-src 'self'",
      // Tracking (GA4, Google Ads/AW, GTM, Meta Pixel, CallRail) con comodines
      // para no bloquear ningún subdominio del stack.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.callrail.com https://va.vercel-scripts.com https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com https://connect.facebook.net https://*.facebook.com https://*.fbcdn.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://*.googleusercontent.com https://*.gstatic.com https://*.google.com https://*.googleapis.com https://*.google-analytics.com https://*.googletagmanager.com https://*.googleadservices.com https://*.doubleclick.net https://*.facebook.com https://*.fbcdn.net",
      `connect-src 'self' https://*.vercel-insights.com https://*.vercel-analytics.com https://*.callrail.com https://*.googleapis.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.google.com https://*.googleadservices.com https://*.doubleclick.net https://connect.facebook.net https://*.facebook.com${devConnect}`,
      "frame-src 'self' https://*.google.com https://*.doubleclick.net https://*.facebook.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      // upgrade-insecure-requests rompería el ws de HMR en dev -> solo en prod.
      ...(isDev ? [] : ["upgrade-insecure-requests"]),
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);

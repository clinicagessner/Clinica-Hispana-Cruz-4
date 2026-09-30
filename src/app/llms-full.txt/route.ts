import { buildLlmsFullTxt } from "@/lib/llms";

// Generado desde SERVICES, PROMOS, posts, FAQs y CONTACT_INFO: no se desfasa
// como el antiguo archivo estático de public/.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

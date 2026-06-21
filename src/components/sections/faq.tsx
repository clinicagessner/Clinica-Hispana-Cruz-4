import { getTranslations } from "next-intl/server";
import { HelpCircle, Phone, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT_INFO, FAQ_ITEMS } from "@/lib/constants";
import { JsonLdFAQ } from "@/components/seo/json-ld";

export async function FAQ() {
  const t = await getTranslations();

  // Prepare FAQ data for JSON-LD
  const faqData = FAQ_ITEMS.map((item) => ({
    question: t(item.question),
    answer: t(item.answer),
  }));

  return (
    <section id="faq" className="py-16 md:py-24 bg-cyan-warm">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
          {/* ── Left column: header + CTA (sticky on desktop) ── */}
          <div className="animate-on-scroll fade-up lg:col-span-1 lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-primary">
              <Sparkles className="size-3.5" aria-hidden="true" />
              {t("faq.eyebrow")}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-slate-dark">
              {t("faq.title")}
            </h2>
            <p className="mt-3 text-lg text-slate-primary">
              {t("faq.subtitle")}
            </p>

            {/* CTA card */}
            <div className="mt-8 overflow-hidden rounded-3xl bg-linear-to-br from-blue-primary to-blue-dark p-6 shadow-lg">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <HelpCircle className="size-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-heading font-bold text-white">
                {t("faq.ctaTitle")}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/85">
                {t("faq.ctaText")}
              </p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-yellow-accent px-6 py-3 text-sm font-bold text-blue-dark shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="size-4" aria-hidden="true" />
                {t("faq.ctaButton")}
              </a>
            </div>
          </div>

          {/* ── Right column: accordion ── */}
          <div className="animate-on-scroll fade-up stagger-1 lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="group rounded-2xl border border-cyan-bg-alt bg-white px-6 shadow-sm transition-all duration-300 hover:border-blue-primary/20 hover:shadow-md data-[state=open]:border-blue-primary/30 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold text-slate-dark hover:text-blue-primary hover:no-underline data-[state=open]:text-blue-primary">
                    <span className="flex items-center gap-4">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-cyan-bg text-sm font-bold text-blue-primary transition-colors group-data-[state=open]:bg-blue-primary group-data-[state=open]:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{t(item.question)}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-12 leading-relaxed text-slate-primary">
                    {t(item.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* JSON-LD for FAQ */}
      <JsonLdFAQ questions={faqData} />
    </section>
  );
}

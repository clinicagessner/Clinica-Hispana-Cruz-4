"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Link, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

// IDs alineados con categoryOrder en services/page.tsx
const CATEGORIES = [
  { id: "all", es: "Todos", en: "All" },
  { id: "medicina-general", es: "Medicina general", en: "General medicine" },
  { id: "salud-mujer", es: "Salud de la mujer", en: "Women's health" },
  { id: "examenes", es: "Exámenes", en: "Exams" },
  { id: "laboratorio", es: "Laboratorio", en: "Lab & testing" },
  { id: "tratamientos", es: "Tratamientos", en: "Treatments" },
] as const;

export function HeroSearch() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/services?q=${encodeURIComponent(q)}` : "/services");
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Search bar */}
      <form
        onSubmit={handleSubmit}
        role="search"
        className="flex items-center gap-2 rounded-full bg-white shadow-2xl shadow-black/20 p-2 pl-5"
      >
        <Search className="size-5 shrink-0 text-slate-muted" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          aria-label={t("searchEyebrow")}
          className="flex-1 min-w-0 bg-transparent text-sm md:text-base text-slate-dark placeholder:text-slate-muted focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-blue-primary hover:bg-blue-dark text-white text-sm font-semibold px-5 py-2.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-primary"
        >
          <Search className="size-4 sm:hidden" aria-hidden="true" />
          <span className="hidden sm:inline">{t("searchButton")}</span>
        </button>
      </form>

      {/* Category pills */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
        <span className="w-full sm:w-auto text-center text-xs font-medium text-white/80 mb-1 sm:mb-0 sm:mr-1">
          {t("browseByCategory")}
        </span>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={cat.id === "all" ? "/services" : `/services?cat=${cat.id}`}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold transition-all duration-200",
              "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm",
              "hover:bg-white hover:text-blue-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            )}
          >
            {locale === "en" ? cat.en : cat.es}
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "@/i18n/routing";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();

  // href escrito a mano: el Link de next-intl con `locale` emite /es/... y
  // Google lo recibe como 307. El prefijo es `as-needed`, así que español
  // no lleva prefijo e inglés siempre lo lleva.
  const isSpanish = locale === "es";
  const path = pathname === "/" ? "" : pathname;
  const href = isSpanish ? `/en${path}` : path || "/";

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className={cn(
        "gap-1.5 font-medium",
        isScrolled
          ? "text-slate-dark hover:text-blue-primary hover:bg-blue-light/50"
          : "text-white hover:text-white/80 hover:bg-white/10"
      )}
    >
      <Link
        href={href}
        hrefLang={isSpanish ? "en" : "es"}
        aria-label={isSpanish ? "Switch to English" : "Cambiar a Español"}
      >
        <Globe className="size-4" weight="bold" />
        <span className="uppercase">{isSpanish ? "EN" : "ES"}</span>
      </Link>
    </Button>
  );
}

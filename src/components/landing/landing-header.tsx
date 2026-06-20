import Image from "next/image";
import { Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SITE_CONFIG } from "@/lib/constants";
import { LANDING_CALLRAIL } from "@/lib/landing-conquesting";
import { LandingCallButton } from "@/components/landing/landing-call-button";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-cyan-warm/95 border-b border-cyan-bg-alt backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative w-[54px] h-[54px] md:w-[62px] md:h-[62px] shrink-0">
            <Image
              src="/images/logo.webp"
              alt={SITE_CONFIG.name}
              fill
              sizes="(max-width: 768px) 54px, 62px"
              className="object-contain"
              priority
              fetchPriority="high"
            />
          </div>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm md:text-base font-semibold text-slate-dark">
              Clínica Hispana
            </span>
            <span className="text-lg md:text-xl font-bold text-blue-primary">
              Cruz 4
            </span>
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <LanguageSwitcher isScrolled />
          <LandingCallButton
            className="inline-flex items-center gap-2 rounded-full bg-red-accent text-white px-4 py-2 md:px-6 md:py-2.5 font-bold text-sm md:text-base shadow-md hover:bg-red-accent-dark hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-accent focus-visible:ring-offset-2"
            ariaLabel={`Llamar ${LANDING_CALLRAIL.display}`}
          >
            <Phone className="size-4 md:size-5" aria-hidden="true" />
            <span className="hidden sm:inline">{LANDING_CALLRAIL.display}</span>
            <span className="sm:hidden">Llamar</span>
          </LandingCallButton>
        </div>
      </div>
    </header>
  );
}

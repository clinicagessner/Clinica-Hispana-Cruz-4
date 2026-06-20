import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  /** Rating en vivo (0–5). Las estrellas se rellenan proporcionalmente. */
  rating: number;
  /** Clase de tamaño de cada estrella (ej. "size-4", "size-5"). */
  starClassName?: string;
  className?: string;
}

/**
 * 5 estrellas con relleno PROPORCIONAL al rating live.
 * Capa base gris + capa dorada recortada al porcentaje (rating/5).
 */
export function StarRating({
  rating,
  starClassName = "size-4",
  className,
}: StarRatingProps) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <div
      className={cn("relative inline-flex", className)}
      role="img"
      aria-label={`${rating.toFixed(1)} de 5 estrellas`}
    >
      {/* Base — estrellas vacías */}
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(starClassName, "shrink-0 text-yellow-accent/30")}
            aria-hidden="true"
          />
        ))}
      </div>
      {/* Relleno — estrellas doradas recortadas al porcentaje */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pct}%` }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                starClassName,
                "shrink-0 fill-yellow-accent text-yellow-accent"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

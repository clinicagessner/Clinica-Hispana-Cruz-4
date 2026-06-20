import { unstable_cache } from "next/cache";

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url: string;
  author_url?: string;
}

export interface GooglePlaceData {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

// Places API (New) response shape — places.googleapis.com/v1/places/{id}
interface NewPlaceReview {
  rating?: number;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
}

interface NewPlaceResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: NewPlaceReview[];
  error?: { status?: string; message?: string };
}

async function fetchGooglePlaceDetails(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Google Places API key or Place ID not configured");
    return null;
  }

  try {
    // Places API (New): GET /v1/places/{placeId} con FieldMask por headers.
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=es`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 3600 }, // Cache 1 hora
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data: NewPlaceResponse = await response.json();

    if (data.error) {
      console.error("Google Places API error:", data.error.status, data.error.message);
      return null;
    }

    // Solo reseñas de 5★ con texto, más recientes primero.
    const filteredReviews = (data.reviews ?? [])
      .filter((review) => {
        const text = review.text?.text ?? review.originalText?.text ?? "";
        return review.rating === 5 && text.trim().length > 0;
      })
      .map((review) => {
        const text = review.text?.text ?? review.originalText?.text ?? "";
        const publishMs = review.publishTime ? Date.parse(review.publishTime) : 0;
        return {
          author_name: review.authorAttribution?.displayName ?? "Cliente de Google",
          rating: review.rating ?? 5,
          text,
          time: Number.isNaN(publishMs) ? 0 : Math.floor(publishMs / 1000),
          relative_time_description: review.relativePublishTimeDescription ?? "",
          profile_photo_url:
            review.authorAttribution?.photoUri || "/images/avatars/default.webp",
          author_url: review.authorAttribution?.uri,
        };
      })
      // Orden: primero las que tienen FOTO REAL del autor (ruta "/a-/" en
      // googleusercontent = foto subida; "/a/ACg8oc" = avatar genérico de
      // Google), y dentro de cada grupo, las más recientes primero.
      .sort((a, b) => {
        const aReal = a.profile_photo_url.includes("/a-/") ? 1 : 0;
        const bReal = b.profile_photo_url.includes("/a-/") ? 1 : 0;
        return bReal - aReal || b.time - a.time;
      });

    return {
      rating: data.rating ?? 5.0,
      totalReviews: data.userRatingCount ?? 0,
      reviews: filteredReviews,
    };
  } catch (error) {
    console.error("Error fetching Google Place details:", error);
    return null;
  }
}

// Cached version - revalidates every hour
export const getGooglePlaceData = unstable_cache(
  fetchGooglePlaceDetails,
  ["google-place-data"],
  {
    revalidate: 3600, // 1 hour
    tags: ["google-reviews"],
  }
);

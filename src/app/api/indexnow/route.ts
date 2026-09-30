import { NextRequest, NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

const INDEXNOW_KEY = "971f13dbc482ef073f1d0caf440768a4";

export async function POST(request: NextRequest) {
  // Sin esto cualquiera puede enviar URLs a los buscadores con la key del sitio.
  const token = process.env.INDEXNOW_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "INDEXNOW_TOKEN not configured" },
      { status: 503 }
    );
  }
  if (request.headers.get("authorization") !== `Bearer ${token}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "Missing or empty urls array" },
        { status: 400 }
      );
    }

    const host = new URL(SITE_CONFIG.baseUrl).hostname;
    const urlList = urls.map((url: string) =>
      url.startsWith("http") ? url : `${SITE_CONFIG.baseUrl}${url}`
    );

    // Solo URLs del propio dominio.
    const foreign = urlList.filter((u: string) => {
      try {
        return new URL(u).hostname !== host;
      } catch {
        return true;
      }
    });
    if (foreign.length) {
      return NextResponse.json(
        { error: "URLs outside the site host", urls: foreign },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_CONFIG.baseUrl}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submitted: urlList.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow" },
      { status: 500 }
    );
  }
}

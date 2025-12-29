import { headers } from "next/headers";

/**
 * Builds a stable absolute origin for server-side fetches.
 * Next.js 15 requires `headers()` to be awaited.
 */
export async function getOrigin(): Promise<string> {
    const h = await headers();

    const proto = h.get("x-forwarded-proto") ?? "http";
    const host = h.get("x-forwarded-host") ?? h.get("host");

    // fallback for local/dev or weird runtimes
    const fallback =
        process.env.NEXT_PUBLIC_SITE_URL ??
        process.env.SITE_URL ??
        "http://localhost:3000";

    if (!host) return fallback;

    return `${proto}://${host}`;
}

import "server-only";
import { getOrigin } from "@/lib/origin";

type InRangeResponse = { in_range: boolean } | { ok: false; reason: string };

async function fetchInRange(): Promise<InRangeResponse> {
    // Node fetch() (server components) needs an absolute URL.
    const origin = await getOrigin();
    const res = await fetch(new URL("/api/inrange", origin), { cache: "no-store" });

    if (!res.ok) return { ok: false, reason: `HTTP ${res.status}` };
    return (await res.json()) as InRangeResponse;
}

export default async function InRangeBanner() {
    const data = await fetchInRange();
    const inRange = "in_range" in data ? data.in_range : null;

    if (inRange == null) return null;

    if (!inRange) {
        return (
            <div className="rounded-2xl border border-amber-200/60 bg-amber-50/70 dark:border-amber-400/20 dark:bg-amber-500/10 px-4 py-3 text-sm">
                <strong className="font-semibold">Off-campus?</strong>{" "}
                Some content (e.g., internal links) may be accessible only from the dorm network.
            </div>
        );
    }

    return null;
}

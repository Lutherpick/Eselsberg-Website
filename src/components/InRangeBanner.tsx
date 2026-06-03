import "server-only";
import { EBS_API_BASE } from "@/lib/ebs";

type InRangeResponse =
    | { in_range?: boolean; inRange?: boolean }
    | { ok: false; reason: string };

async function fetchInRange(): Promise<InRangeResponse> {
    const res = await fetch(`${EBS_API_BASE}/inrange_api.php`, {
        cache: "no-store",
        redirect: "follow",
    });

    if (!res.ok) return { ok: false, reason: `HTTP ${res.status}` };
    return (await res.json()) as InRangeResponse;
}

export default async function InRangeBanner() {
    const data = await fetchInRange();
    const inRange =
        "in_range" in data && typeof data.in_range === "boolean"
            ? data.in_range
            : "inRange" in data && typeof data.inRange === "boolean"
              ? data.inRange
              : null;

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

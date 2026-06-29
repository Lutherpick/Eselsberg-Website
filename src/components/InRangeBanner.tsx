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
            <div className="rounded-2xl border border-secondary/40 bg-secondary/15 px-5 py-4 font-sans text-sm text-slate-800 shadow-sm dark:text-slate-100">
                <strong className="font-semibold">Off-campus?</strong>{" "}
                Some internal resources may only work from the dorm network.
            </div>
        );
    }

    return null;
}

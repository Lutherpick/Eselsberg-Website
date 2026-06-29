// src/lib/ebs.ts
export const EBS_API_BASE =
    process.env.EBS_API_BASE?.replace(/\/+$/, "") || "https://ebs.studierendenwerk-ulm.de";

/**
 * Backwards-compatible helper: some files used to import a function instead of a const.
 */
export function getEbsApiBase() {
    return EBS_API_BASE;
}

export function clampInt(value: string | null, def: number, min: number, max: number) {
    const n = value ? Number.parseInt(value, 10) : def;
    if (Number.isNaN(n)) return def;
    return Math.min(max, Math.max(min, n));
}

export function normalizeLang(value: string | null) {
    return value === "de" ? "de" : "en";
}

export function upstreamError(status: number) {
    return {
        ok: false,
        error: "upstream_error",
        upstreamStatus: status,
    };
}

export function fetchFailedError() {
    return {
        ok: false,
        error: "fetch_failed",
    };
}

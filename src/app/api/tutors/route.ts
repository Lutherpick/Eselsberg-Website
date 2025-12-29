// src/app/api/tutors/route.ts
import { NextResponse } from "next/server";
import { EBS_API_BASE } from "@/lib/ebs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type Tutor = {
    tutor: string;
    name: string;
    zinr: string;
    email: string | null;
};

function asTutors(payload: unknown): { updated_at?: string; tutors: Tutor[] } {
    // Upstream could be:
    // 1) { tutors: [...], count, updated_at }
    // 2) [...rows]
    // 3) anything else → []
    if (Array.isArray(payload)) {
        return { tutors: payload as Tutor[] };
    }

    if (payload && typeof payload === "object") {
        const obj = payload as any;
        if (Array.isArray(obj.tutors)) {
            return { updated_at: obj.updated_at, tutors: obj.tutors as Tutor[] };
        }
    }

    return { tutors: [] };
}

export async function GET() {
    const upstreamUrl = `${EBS_API_BASE}/tutors_api`;

    try {
        const res = await fetch(upstreamUrl, { cache: "no-store" });
        const text = await res.text();

        if (!res.ok) {
            return NextResponse.json(
                {
                    ok: false,
                    error: "upstream_error",
                    upstreamUrl,
                    upstreamStatus: res.status,
                    upstreamBody: text.slice(0, 2000),
                },
                { status: 502, headers: { "Cache-Control": "no-store" } }
            );
        }

        let json: unknown;
        try {
            json = JSON.parse(text);
        } catch {
            return NextResponse.json(
                {
                    ok: false,
                    error: "invalid_json",
                    upstreamUrl,
                    upstreamBody: text.slice(0, 2000),
                },
                { status: 502, headers: { "Cache-Control": "no-store" } }
            );
        }

        const { updated_at, tutors } = asTutors(json);

        // Normalize fields & drop obviously bad rows
        const normalized: Tutor[] = (tutors ?? [])
            .filter((t) => t && typeof t === "object")
            .map((t: any) => ({
                tutor: String(t.tutor ?? "").trim(),
                name: String(t.name ?? "").trim(),
                zinr: String(t.zinr ?? "").trim(),
                email: t.email == null ? null : String(t.email).trim(),
            }))
            .filter((t) => t.tutor && t.name);

        return NextResponse.json(
            {
                ok: true,
                updated_at: updated_at ?? undefined,
                count: normalized.length,
                tutors: normalized,
            },
            { status: 200, headers: { "Cache-Control": "no-store" } }
        );
    } catch (e: any) {
        return NextResponse.json(
            {
                ok: false,
                error: "fetch_failed",
                upstreamUrl,
                message: e?.message ?? String(e),
            },
            { status: 502, headers: { "Cache-Control": "no-store" } }
        );
    }
}

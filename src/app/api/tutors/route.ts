// src/app/api/tutors/route.ts
import { NextResponse } from "next/server";
import { EBS_API_BASE, fetchFailedError, upstreamError } from "@/lib/ebs";

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
    if (Array.isArray(payload)) {
        return { tutors: payload as Tutor[] };
    }

    if (payload && typeof payload === "object") {
        const obj = payload as { updated_at?: string; tutors?: unknown };

        if (Array.isArray(obj.tutors)) {
            return {
                updated_at: obj.updated_at,
                tutors: obj.tutors as Tutor[],
            };
        }
    }

    return { tutors: [] };
}

export async function GET() {
    const upstreamUrl = `${EBS_API_BASE}/tutors_api.php`;

    try {
        const res = await fetch(upstreamUrl, { cache: "no-store" });
        if (!res.ok) {
            return NextResponse.json(
                upstreamError(res.status),
                { status: 502, headers: { "Cache-Control": "no-store" } }
            );
        }

        const text = await res.text();

        let json: unknown;

        try {
            json = JSON.parse(text);
        } catch {
            return NextResponse.json(
                {
                    ok: false,
                    error: "invalid_json",
                },
                { status: 502, headers: { "Cache-Control": "no-store" } }
            );
        }

        const { updated_at, tutors } = asTutors(json);

        const normalized: Tutor[] = tutors
            .filter((t) => t && typeof t === "object")
            .map((t) => {
                const row = t as Partial<Tutor>;

                return {
                    tutor: String(row.tutor ?? "").trim(),
                    name: String(row.name ?? "").trim(),
                    zinr: String(row.zinr ?? "").trim(),
                    email: row.email == null ? null : String(row.email).trim(),
                };
            })
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
    } catch {
        return NextResponse.json(
            fetchFailedError(),
            { status: 502, headers: { "Cache-Control": "no-store" } }
        );
    }
}

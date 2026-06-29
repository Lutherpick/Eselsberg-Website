// src/app/api/appointments/route.ts
import { NextResponse } from "next/server";
import { clampInt, EBS_API_BASE, fetchFailedError, normalizeLang, upstreamError } from "@/lib/ebs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const lang = normalizeLang(searchParams.get("lang"));
    const limit = clampInt(searchParams.get("limit"), 5, 1, 20);

    const upstreamUrl = `${EBS_API_BASE}/appointments_api.php?lang=${encodeURIComponent(lang)}&limit=${limit}`;

    try {
        const res = await fetch(upstreamUrl, { cache: "no-store" });
        if (!res.ok) {
            return NextResponse.json(
                upstreamError(res.status),
                { status: 502, headers: { "Cache-Control": "no-store" } }
            );
        }

        const text = await res.text();

        return new NextResponse(text, {
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
            },
        });
    } catch {
        return NextResponse.json(
            fetchFailedError(),
            { status: 502, headers: { "Cache-Control": "no-store" } }
        );
    }
}

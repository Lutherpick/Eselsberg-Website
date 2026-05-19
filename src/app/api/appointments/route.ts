// src/app/api/appointments/route.ts
import { NextResponse } from "next/server";
import { clampInt, EBS_API_BASE, normalizeLang } from "@/lib/ebs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const lang = normalizeLang(searchParams.get("lang"));
    const limit = clampInt(searchParams.get("limit"), 5, 1, 20);

    const upstreamUrl = `${EBS_API_BASE}/appointments_api.php?lang=${encodeURIComponent(lang)}&limit=${limit}`;

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

        return new NextResponse(text, {
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
            },
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);

        return NextResponse.json(
            {
                ok: false,
                error: "fetch_failed",
                upstreamUrl,
                message,
            },
            { status: 502, headers: { "Cache-Control": "no-store" } }
        );
    }
}
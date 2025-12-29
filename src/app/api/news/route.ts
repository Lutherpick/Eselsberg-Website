import { NextResponse } from "next/server";
import { clampInt, EBS_API_BASE, normalizeLang } from "@/lib/ebs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const lang = normalizeLang(searchParams.get("lang"));
    const limit = clampInt(searchParams.get("limit"), 5, 1, 20);

    const url = `${EBS_API_BASE}/news_api?lang=${encodeURIComponent(lang)}&limit=${limit}`;

    try {
        const res = await fetch(url, { cache: "no-store" });
        const text = await res.text();

        if (!res.ok) {
            return NextResponse.json(
                {
                    error: "upstream_error",
                    upstreamUrl: url,
                    upstreamStatus: res.status,
                    upstreamBody: text.slice(0, 2000),
                },
                { status: 502 }
            );
        }

        return new NextResponse(text, {
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
            },
        });
    } catch (e: any) {
        return NextResponse.json(
            {
                error: "fetch_failed",
                upstreamUrl: url,
                message: e?.message ?? String(e),
            },
            { status: 502 }
        );
    }
}

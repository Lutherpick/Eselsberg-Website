// src/app/api/inrange/route.ts
import { NextResponse } from "next/server";
import { EBS_API_BASE, fetchFailedError, upstreamError } from "@/lib/ebs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    const upstreamUrl = `${EBS_API_BASE}/inrange_api.php`;

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

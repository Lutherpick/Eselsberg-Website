import { NextResponse } from "next/server";
import { EBS_API_BASE } from "@/lib/ebs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    const url = `${EBS_API_BASE}/inrange_api`;

    const res = await fetch(url, { cache: "no-store" });
    const text = await res.text();

    if (!res.ok) {
        return NextResponse.json({ error: "upstream_error", status: res.status }, { status: 502 });
    }

    return new NextResponse(text, {
        status: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
        },
    });
}

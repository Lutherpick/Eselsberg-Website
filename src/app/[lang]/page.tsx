import type { Metadata } from "next";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import NewsGrid from "@/components/NewsGrid";
import ConnectBanner from "@/components/ConnectBanner";
import ImageCarousel from "@/components/ImageCarousel";
import InRangeBanner from "@/components/InRangeBanner";
import TutorsDirectory from "./tutors-directory";

export const metadata: Metadata = {
    title: "Eselsbergsteige Dormitory",
    description: "Student housing Ulm – information, news, internet, and contacts.",
};

export default async function HomePage({
                                           params,
                                       }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam === "de" ? "de" : "en";

    return (
        <>
            <Hero />

            <Layout>
                <main className="py-10 space-y-10">
                    <InRangeBanner />
                    <ImageCarousel />
                    <NewsGrid lang={lang} />
                    <TutorsDirectory lang={lang} />
                </main>
            </Layout>

            <ConnectBanner lang={lang} />
        </>
    );
}

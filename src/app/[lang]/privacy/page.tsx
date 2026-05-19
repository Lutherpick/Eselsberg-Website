import { redirect } from "next/navigation";

export default async function PrivacyPage({
                                              params,
                                          }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const l = lang === "de" ? "de" : "en";
    redirect(`/${l}/legal/privacy`);
}

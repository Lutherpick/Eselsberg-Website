import { redirect } from "next/navigation";

export default async function TermsPage({
                                            params,
                                        }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const l = lang === "de" ? "de" : "en";
    redirect(`/${l}/legal/imprint`);
}

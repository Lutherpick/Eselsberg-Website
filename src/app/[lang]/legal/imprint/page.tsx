// src/app/[lang]/legal/imprint/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Impressum – Eselsbergsteige Dormitory',
    description:
        'Legal imprint and contact information for the Eselsbergsteige dormitory website.',
}

export default function ImprintPage({
                                        params,
                                    }: {
    params: { lang: 'en' | 'de' }
}) {
    const { lang } = params
    const isDe = lang === 'de'

    if (!isDe) {
        return (
            <main className="container mx-auto px-6 py-12 space-y-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Terms and Conditions / Privacy Policy
                </h1>
                <p className="text-gray-800 dark:text-gray-200">
                    The legally binding imprint and privacy policy are available only in German. This is because the
                    responsible parties and the relevant legal framework are based in Germany. For any legal questions
                    the German version always prevails.
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    Please switch to the German version of this page:
                </p>
                <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200">
                    <li>
                        <Link href="/de/legal/imprint" className="underline">
                            Deutsches Impressum
                        </Link>
                    </li>
                    <li>
                        <Link href="/de/legal/privacy" className="underline">
                            Deutsche Datenschutzerklärung
                        </Link>
                    </li>
                </ul>
            </main>
        )
    }

    return (
        <main className="container mx-auto px-6 py-12 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Impressum
            </h1>

            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Vertretungsberechtigter nach §&nbsp;5 TMG
                </h2>
                <p className="text-gray-800 dark:text-gray-200">
                    1.&nbsp;Heimsprecher (vertretungsberechtigt für die Inhalte des Wohnheims Eselsbergsteige).
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    Die Kontaktdaten des aktuellen Heimsprechers sind auf den Aushängen im Wohnheim sowie über die
                    offiziellen Kommunikationskanäle verfügbar.
                </p>
            </section>

            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Inhaltlich Verantwortlicher
                </h2>
                <p className="text-gray-800 dark:text-gray-200">
                    Inhaltlich verantwortlich gemäß §&nbsp;55 Abs.&nbsp;2 RStV ist der jeweils amtierende Heimsprecher
                    des Wohnheims Eselsbergsteige.
                </p>
            </section>

            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Haftungsausschluss
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    1. Inhalt des Onlineangebotes
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                    Die Autoren übernehmen keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder
                    Qualität der bereitgestellten Informationen. Haftungsansprüche gegen die Autoren, die sich auf
                    Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der
                    dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen
                    verursacht wurden, sind grundsätzlich ausgeschlossen, sofern kein nachweislich vorsätzliches oder
                    grob fahrlässiges Verschulden vorliegt.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    2. Verweise und Links
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                    Bei direkten oder indirekten Verweisen auf fremde Webseiten („Hyperlinks“), die außerhalb des
                    Verantwortungsbereiches der Autoren liegen, würde eine Haftungsverpflichtung ausschließlich in dem
                    Fall in Kraft treten, in dem die Autoren von den Inhalten Kenntnis haben und es ihnen technisch
                    möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    3. Urheber- und Kennzeichenrecht
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                    Die Autoren sind bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken,
                    Tondokumente, Videosequenzen und Texte zu beachten, von ihnen selbst erstellte Medien zu nutzen oder
                    auf lizenzfreie Medien zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch
                    Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils
                    gültigen Kennzeichenrechts.
                </p>
            </section>

            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Bild- und Grafiknachweise
                </h2>
                <p className="text-gray-800 dark:text-gray-200">
                    Fotos und Grafiken stammen aus dem Wohnheim Eselsbergsteige sowie von frei verwendbaren
                    Icon-Bibliotheken und Vektorplattformen (z.&nbsp;B. Freepik, Flaticon). Genauere Angaben können auf
                    Anfrage mitgeteilt werden.
                </p>
            </section>
        </main>
    )
}

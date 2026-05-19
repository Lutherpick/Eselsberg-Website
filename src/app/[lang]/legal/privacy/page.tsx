// src/app/[lang]/legal/privacy/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Datenschutzerklärung – Eselsbergsteige Dormitory',
    description:
        'Summary of the data protection information for the Eselsbergsteige dormitory website.',
}

export default async function PrivacyPage({
                                              params,
                                          }: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const { lang } = await params
    const isDe = lang === 'de'

    if (!isDe) {
        return (
            <main className="container mx-auto px-6 py-12 space-y-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Privacy Policy
                </h1>
                <p className="text-gray-800 dark:text-gray-200">
                    The legally binding privacy policy of the Eselsbergsteige dormitory website is available only in
                    German. For any legal questions, the German version always prevails.
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    Please switch to the German version of this page:
                </p>
                <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200">
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
                Datenschutzerklärung
            </h1>

            {/* 1. Datenschutz auf einen Blick */}
            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    1. Datenschutz auf einen Blick
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Allgemeine Hinweise
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                    Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                    Sie persönlich identifiziert werden können.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Datenerfassung auf dieser Website
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                    Die Datenverarbeitung auf dieser Website erfolgt durch die im Impressum angegebenen Verantwortlichen
                    (Heimsprecher und Tutoren des Wohnheims Eselsbergsteige).
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    Ein Teil der Daten wird automatisch beim Besuch der Website durch die IT-Systeme erfasst
                    (z.&nbsp;B. IP-Adresse, Browser, Betriebssystem, Zeitpunkt des Zugriffs). Andere Daten werden
                    erhoben, wenn Sie uns diese mitteilen (z.&nbsp;B. über E-Mail-Kontakt mit den Tutoren).
                </p>
            </section>

            {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    2. Allgemeine Hinweise und Pflichtinformationen
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Verantwortliche Stelle
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                    Verantwortlich für die Datenverarbeitung auf dieser Website sind die jeweiligen Heimsprecher sowie
                    die zuständigen Tutoren des Wohnheims Eselsbergsteige. Die Kontaktdaten können dem Impressum
                    entnommen werden.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Ihre Rechte
                </h3>
                <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-1">
                    <li>Recht auf Auskunft über die verarbeiteten personenbezogenen Daten</li>
                    <li>Recht auf Berichtigung oder Löschung dieser Daten</li>
                    <li>Recht auf Einschränkung der Verarbeitung</li>
                    <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                    <li>Recht auf Datenübertragbarkeit</li>
                </ul>
                <p className="text-gray-800 dark:text-gray-200">
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
                    Impressum angegebenen Adresse an uns wenden. Außerdem steht Ihnen ein Beschwerderecht bei der
                    zuständigen Aufsichtsbehörde zu.
                </p>
            </section>

            {/* 3. Datenerfassung beim Besuch der Website */}
            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    3. Datenerfassung auf dieser Website
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Server-Log-Dateien
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
                    Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind insbesondere IP-Adresse,
                    verwendeter Browser, Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners sowie Uhrzeit
                    der Serveranfrage.
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
                    dieser Daten erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Der Betreiber hat
                    ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung der Website –
                    hierzu müssen die Server-Log-Files erfasst werden.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Kontaktaufnahme per E-Mail
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                    Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen
                    Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
            </section>

            {/* 4. Daten der Tutoren */}
            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    4. Daten der Tutoren
                </h2>
                <p className="text-gray-800 dark:text-gray-200">
                    Für die Darstellung der Tutorenseiten werden Namen, Zimmernummern, E-Mail-Adressen und Funktionen der
                    Tutoren verarbeitet. Diese Daten werden von den Tutoren selbst zur Verfügung gestellt und dienen der
                    Organisation des Wohnheimlebens.
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse), da ohne
                    diese Informationen eine sinnvolle Betreuung der Bewohnerinnen und Bewohner nicht möglich wäre.
                </p>
            </section>

            {/* 5. Schluss */}
            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    5. Stand der Datenschutzerklärung
                </h2>
                <p className="text-gray-800 dark:text-gray-200">
                    Diese Datenschutzerklärung orientiert sich an der Fassung aus dem bestehenden Webauftritt des
                    Wohnheims Eselsbergsteige. Anpassungen können erforderlich werden, wenn sich die rechtlichen
                    Rahmenbedingungen oder die technischen Verfahren ändern.
                </p>
            </section>
        </main>
    )
}

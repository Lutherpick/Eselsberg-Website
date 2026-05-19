// src/app/[lang]/internet/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Internet & Network – Eselsbergsteige Dormitory',
    description:
        'Information about wired network, eduroam WiFi, usage rules, and what to do if your access is blocked.',
}

export default async function InternetPage({
                                               params,
                                           }: {
    params: Promise<{ lang: 'en' | 'de' }>
}) {
    const { lang } = await params
    const isDe = lang === 'de'

    return (
        <main className="container mx-auto px-6 py-12 space-y-10">
            {/* Intro / general info */}
            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {isDe ? 'Netzwerk im Wohnheim' : 'About the network in the dormitory'}
                </h1>

                <p className="text-gray-800 dark:text-gray-200">
                    {isDe
                        ? 'In jedem Zimmer befindet sich eine Netzwerkdose, an die du deinen Rechner mit einem Netzwerkkabel anschließen kannst. Die Verbindung ist für Geschwindigkeiten bis zu 1 Gbit/s ausgelegt. Eigene Router oder das Aufspannen eines eigenen Subnetzes über deinen Port sind nicht erlaubt.'
                        : 'Every room has a network socket where you can connect your device using an ethernet cable. The connection is capable of providing up to 1 Gigabit. Own routers or the creation of subnetworks on your room port is not allowed.'}
                </p>

                <p className="text-red-600 dark:text-red-400 font-semibold">
                    {isDe
                        ? 'Wichtig: Dein Gerät muss auf „IP-Adresse automatisch beziehen“ (DHCP) eingestellt sein.'
                        : 'Important: Your device must be set to obtain its IP address automatically (DHCP).'}
                </p>

                <p className="text-gray-800 dark:text-gray-200">
                    {isDe
                        ? 'WLAN gibt es im gesamten Wohnheim. Das Funknetz heißt eduroam und ist Teil der internationalen eduroam-Initiative an Hochschulen. Die Einrichtung erfolgt genauso wie an der Uni Ulm; eine Schritt-für-Schritt-Anleitung findest du auf den offiziellen Uni-Webseiten.'
                        : 'WLAN is provided throughout the whole dormitory. The network is called eduroam and is part of the international initiative for internet in educational institutions. The setup is identical to the process for the university network and can be completed by following the official instructions of the University of Ulm.'}
                </p>

                <p className="text-gray-800 dark:text-gray-200">
                    {isDe
                        ? 'Für Geräte, die eduroam (WPA-Enterprise) nicht unterstützen, steht zusätzlich das offene WLAN „public-wohnhaus“ zur Verfügung.'
                        : 'For devices that do not support eduroam (WPA-Enterprise), the public WLAN “public-wohnhaus” is additionally available.'}
                </p>

                <p className="text-gray-800 dark:text-gray-200">
                    {isDe
                        ? 'Wenn du Smart-Home-Geräte verwendest, schalte nach Möglichkeit deren Sichtbarkeit bzw. Freigaben ab – sonst können andere Bewohner im Netz auf deine Geräte zugreifen.'
                        : 'If you use smart devices, you should disable their visibility or sharing options if possible. Otherwise other residents might be able to access your devices in the network.'}
                </p>

                <p className="text-red-600 dark:text-red-400 font-semibold">
                    {isDe
                        ? 'Filesharing, illegale Downloads, eigene Server-Dienste und sonstiger Missbrauch des Anschlusses werden nicht toleriert. Verstöße sind nachvollziehbar und werden gemäß Hochschul- und Wohnheimordnung geahndet.'
                        : 'Filesharing, illegal downloads, hosting services and general misuse of your internet access are not tolerated. Violations are traceable and will be prosecuted according to university and dormitory regulations.'}
                </p>
            </section>

            {/* Blocked access */}
            <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {isDe
                        ? 'Mein Internetzugang ist gesperrt'
                        : 'My internet access is blocked'}
                </h2>

                <p className="text-gray-800 dark:text-gray-200">
                    {isDe
                        ? 'Wenn dein Rechner bzw. dein Anschluss wegen Virenbefall oder Missbrauch (z. B. P2P-TV, illegale Downloads, Urheberrechtsverletzungen) gesperrt wurde, wende dich bitte an die Netz-Tutoren im Wohnheim. Nenne dabei unbedingt dein Zimmer und beschreibe kurz, was passiert ist, damit dir schnell geholfen werden kann.'
                        : 'If your computer or your account has been blocked due to virus infection or misuse of your internet access (for example P2P TV, illegal filesharing, or copyright violations), please contact the network tutors of the dormitory. Always include your room number and a short description of what happened so they can help you quickly.'}
                </p>
            </section>

            {/* Support box */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {isDe ? 'Support' : 'Support'}
                </h2>
                <p className="text-gray-800 dark:text-gray-200">
                    {isDe
                        ? 'Die Netz-Tutoren sind deine Ansprechpartner bei technischen Fragen rund um das Wohnheim-Netz und eduroam. Die aktuellen Kontaktdaten findest du auf den Aushängen im Eingangsbereich oder über die offiziellen Info-Kanäle (z. B. Info-EBS-WhatsApp-Gruppe).'
                        : 'The network tutors are your first point of contact for all technical questions about the dormitory network and eduroam. For the most up-to-date contact details, please refer to the posters in the building entrances or the official information channels (for example the Info EBS WhatsApp group).'}
                </p>
            </section>
        </main>
    )
}

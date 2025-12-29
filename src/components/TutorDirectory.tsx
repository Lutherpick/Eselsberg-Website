"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type Tutor = {
    tutor: string;
    name: string;
    zinr: string;
    email: string | null;
};

type Props = {
    tutors: Tutor[];
    lang: "en" | "de";
};

function normalize(s: string): string {
    return (s ?? "")
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function initials(name: string): string {
    const parts = (name ?? "").split(/\s+/).filter(Boolean);
    const a = parts[0]?.[0] ?? "";
    const b = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
    return (a + b).toUpperCase();
}

function IconSearch({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className ?? "h-4 w-4"}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
        >
            <path d="M21 21l-4.3-4.3" />
            <circle cx="11" cy="11" r="7" />
        </svg>
    );
}

function IconFilter({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className ?? "h-4 w-4"}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
        >
            <path d="M4 6h16" />
            <path d="M7 12h10" />
            <path d="M10 18h4" />
        </svg>
    );
}

function IconMail({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className ?? "h-4 w-4"}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
        >
            <path d="M4 6h16v12H4z" />
            <path d="M4 7l8 6 8-6" />
        </svg>
    );
}

function IconCopy({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className ?? "h-4 w-4"}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
        >
            <path d="M9 9h10v10H9z" />
            <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
        </svg>
    );
}

function IconChevron({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className ?? "h-4 w-4"}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

export default function TutorDirectory({ tutors, lang }: Props) {
    const isDe = lang === "de";

    // IMPORTANT: force stable default on client to avoid "sometimes 0 tutors" due to state glitches/hydration edge cases
    const [group, setGroup] = useState<"all" | string>("all");
    const [query, setQuery] = useState("");

    // Collapsing makes the list feel less cluttered
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

    const [copiedKey, setCopiedKey] = useState<string | null>(null);
    const copyTimer = useRef<number | null>(null);

    // Ensure group always stays valid when tutors arrive/refresh (fixes cases where group becomes "" / stale)
    useEffect(() => {
        if (group === "all") return;

        const existing = new Set<string>(tutors.map((t) => t.tutor));
        const found = Array.from(existing).some((g) => normalize(g) === normalize(group));

        if (!found) setGroup("all");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tutors]);

    const allGroups = useMemo(() => {
        const uniq = new Set<string>();
        tutors.forEach((t) => {
            if (t?.tutor) uniq.add(t.tutor);
        });
        return Array.from(uniq).sort((a, b) => a.localeCompare(b));
    }, [tutors]);

    const filtered = useMemo(() => {
        const q = normalize(query);
        const selGroup = group === "all" ? "all" : normalize(group);

        const list = tutors.filter((t) => {
            const tutorGroup = normalize(t.tutor);

            // SAFE + normalized group matching (fixes subtle mismatch/case/whitespace issues)
            if (selGroup !== "all" && tutorGroup !== selGroup) return false;

            if (!q) return true;

            const hay = normalize([t.tutor, t.name, t.zinr, t.email ?? ""].join(" | "));
            return hay.includes(q);
        });

        const grouped: Record<string, Tutor[]> = {};
        list.forEach((t) => {
            const key = t.tutor || (isDe ? "Sonstige" : "Other");
            (grouped[key] ??= []).push(t);
        });

        const keys = Object.keys(grouped).sort((a, b) => a.localeCompare(b));

        keys.forEach((k) => {
            grouped[k].sort((a, b) => a.zinr.localeCompare(b.zinr) || a.name.localeCompare(b.name));
        });

        return { list, grouped, keys };
    }, [tutors, query, group, isDe]);

    useEffect(() => {
        // Initialize collapsed state for new groups (keeps UI consistent across rerenders)
        setCollapsed((prev) => {
            const next = { ...prev };
            filtered.keys.forEach((k) => {
                if (next[k] === undefined) next[k] = false;
            });
            return next;
        });
    }, [filtered.keys]);

    async function copy(text: string, key: string) {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);
            if (copyTimer.current) window.clearTimeout(copyTimer.current);
            copyTimer.current = window.setTimeout(() => setCopiedKey(null), 1200);
        } catch {
            // ignore
        }
    }

    return (
        <section
            id="tutor-list"
            className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] scroll-mt-24"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-teal-500/10 via-sky-500/10 to-indigo-500/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-teal-500/10 blur-3xl" />
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10 space-y-6">
                <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                            {isDe ? "Aktuelle Tutor*innenliste" : "Current tutor list"}
                        </h2>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {isDe ? "Suche nach Namen, Zimmer, E-Mail oder Bereich." : "Search by name, room, email, or group."}
                        </p>
                    </div>

                    <div className="w-full md:w-auto">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="relative w-full sm:w-80">
                                <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                                <label className="sr-only" htmlFor="tutorSearch">
                                    {isDe ? "Suche" : "Search"}
                                </label>
                                <input
                                    id="tutorSearch"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={isDe ? "Suchen…" : "Search…"}
                                    className="w-full rounded-xl border border-gray-300/80 dark:border-gray-700/80 bg-white/80 dark:bg-gray-950/70 backdrop-blur px-10 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                />
                            </div>

                            <div className="relative w-full sm:w-60">
                                <IconFilter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                                <label className="sr-only" htmlFor="tutorGroup">
                                    {isDe ? "Bereich" : "Group"}
                                </label>
                                <select
                                    id="tutorGroup"
                                    value={group}
                                    onChange={(e) => setGroup(e.target.value || "all")}
                                    className="w-full appearance-none rounded-xl border border-gray-300/80 dark:border-gray-700/80 bg-white/80 dark:bg-gray-950/70 backdrop-blur pl-10 pr-10 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    <option value="all">{isDe ? "Alle Bereiche" : "All groups"}</option>
                                    {allGroups.map((g) => (
                                        <option key={g} value={g}>
                                            {g}
                                        </option>
                                    ))}
                                </select>
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">▾</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                        {isDe
                            ? `Anzeige: ${filtered.list.length} von ${tutors.length} Tutor*innen`
                            : `Showing: ${filtered.list.length} of ${tutors.length} tutors`}
                    </div>

                    {(query || group !== "all") && (
                        <button
                            type="button"
                            onClick={() => {
                                setQuery("");
                                setGroup("all");
                            }}
                            className="inline-flex items-center gap-2 rounded-full border border-gray-300/80 dark:border-gray-700/80 bg-white/70 dark:bg-gray-950/70 px-3 py-1.5 text-xs font-medium text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            {isDe ? "Filter zurücksetzen" : "Reset filters"}
                        </button>
                    )}
                </div>

                {filtered.keys.length === 0 ? (
                    <div className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-gray-950/70 backdrop-blur p-5 text-sm text-gray-800 dark:text-gray-200">
                        {isDe ? "Keine Treffer." : "No results."}
                    </div>
                ) : (
                    // LESS CLUTTER: tighter grid gap + group-level collapsible card and compact rows
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.keys.map((job) => {
                            const list = filtered.grouped[job] ?? [];
                            const isCollapsed = collapsed[job] ?? false;

                            return (
                                <div
                                    key={job}
                                    className="rounded-2xl bg-gradient-to-br from-gray-200/70 via-gray-200/40 to-transparent dark:from-gray-800/70 dark:via-gray-800/40 dark:to-transparent p-[1px]"
                                >
                                    <div className="h-full rounded-2xl bg-white/80 dark:bg-gray-950/70 backdrop-blur border border-transparent">
                                        {/* Group header */}
                                        <button
                                            type="button"
                                            onClick={() => setCollapsed((p) => ({ ...p, [job]: !p[job] }))}
                                            className="w-full flex items-center justify-between gap-3 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                                            aria-expanded={!isCollapsed}
                                        >
                                            <div className="min-w-0">
                                                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
                                                    {job}
                                                </h3>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold text-gray-900 dark:text-gray-100">
                                                    {list.length}
                                                </span>
                                                <span className={`text-gray-500 transition-transform ${isCollapsed ? "" : "rotate-180"}`}>
                                                    <IconChevron className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </button>

                                        {/* Group body */}
                                        {!isCollapsed && (
                                            <ul className="px-4 pb-4 space-y-2">
                                                {list.map((t) => {
                                                    const key = `${job}-${t.name}-${t.zinr}`;
                                                    const isCopied = copiedKey === key;

                                                    return (
                                                        <li
                                                            key={key}
                                                            className="rounded-xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 p-3"
                                                        >
                                                            <div className="flex items-center justify-between gap-3">
                                                                {/* Left */}
                                                                <div className="flex items-center gap-3 min-w-0">
                                                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/15 via-sky-500/10 to-indigo-500/10 text-xs font-semibold text-gray-900 dark:text-gray-100 border border-gray-200/60 dark:border-gray-800/60 flex-none">
                                                                        {initials(t.name)}
                                                                    </div>

                                                                    <div className="min-w-0">
                                                                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                                                            {t.name}
                                                                        </div>

                                                                        <div className="mt-1 flex flex-wrap items-center gap-2">
                                                                            {t.zinr && (
                                                                                <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-2 py-0.5 text-[11px] text-gray-700 dark:text-gray-300">
                                                                                    {isDe ? "Zimmer" : "Room"}: {t.zinr}
                                                                                </span>
                                                                            )}

                                                                            {t.email && (
                                                                                <a
                                                                                    href={`mailto:${t.email}`}
                                                                                    className="text-[11px] underline underline-offset-2 text-blue-700 dark:text-blue-300 truncate max-w-[170px] sm:max-w-[220px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                                                                    title={t.email}
                                                                                >
                                                                                    {t.email}
                                                                                </a>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Right actions (icon-y + compact) */}
                                                                <div className="flex items-center gap-2 flex-none">
                                                                    {t.email ? (
                                                                        <>
                                                                            <a
                                                                                href={`mailto:${t.email}`}
                                                                                className="inline-flex items-center gap-2 rounded-full border border-gray-300/80 dark:border-gray-700/80 bg-white dark:bg-gray-950 px-3 py-1.5 text-xs font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                                                                aria-label={`${isDe ? "E-Mail an" : "Email"} ${t.name}`}
                                                                            >
                                                                                <IconMail className="h-4 w-4" />
                                                                                {isDe ? "E-Mail" : "Email"}
                                                                            </a>

                                                                            <button
                                                                                type="button"
                                                                                onClick={() => copy(t.email!, key)}
                                                                                className="inline-flex items-center justify-center rounded-full border border-gray-300/80 dark:border-gray-700/80 bg-white dark:bg-gray-950 h-9 w-9 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                                                                aria-label={isDe ? "E-Mail kopieren" : "Copy email"}
                                                                                title={isDe ? "E-Mail kopieren" : "Copy email"}
                                                                            >
                                                                                {isCopied ? (
                                                                                    <span className="text-[11px] font-semibold">OK</span>
                                                                                ) : (
                                                                                    <IconCopy className="h-4 w-4" />
                                                                                )}
                                                                            </button>
                                                                        </>
                                                                    ) : (
                                                                        <span className="text-xs text-gray-500 dark:text-gray-500">
                                                                            {isDe ? "Keine E-Mail" : "No email"}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

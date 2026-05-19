// src/components/SmartLink.tsx
import Link from "next/link";
import { isExternalHref, mapLegacyHref, type Lang } from "@/lib/legacyLinks";

type Props = {
    href: string;
    lang: Lang;
    className?: string;
    children: React.ReactNode;
    title?: string;
};

export default function SmartLink({ href, lang, className, children, title }: Props) {
    const mapped = mapLegacyHref(href, lang);

    // External (or mailto/tel)
    if (isExternalHref(mapped)) {
        const isHttp = mapped.startsWith("http://") || mapped.startsWith("https://");
        return (
            <a
                href={mapped}
                className={className}
                title={title}
                target={isHttp ? "_blank" : undefined}
                rel={isHttp ? "noopener noreferrer" : undefined}
            >
                {children}
            </a>
        );
    }

    // Internal
    return (
        <Link href={mapped} className={className} title={title}>
            {children}
        </Link>
    );
}

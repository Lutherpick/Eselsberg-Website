// src/proxy.js
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'

const locales = ['en', 'de']
const defaultLocale = 'en'

function getLocale(request) {
    const headers = {}
    request.headers.forEach((value, key) => {
        headers[key] = value
    })

    const negotiator = new Negotiator({ headers })
    const languages = negotiator
        .languages()
        .filter(lang => lang && lang !== '*')
    return match(languages, locales, defaultLocale)
}

export function proxy(request) {
    const { pathname } = request.nextUrl

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        /\.[^/]+$/.test(pathname)
    ) {
        return NextResponse.next()
    }

    if (locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
        return NextResponse.next()
    }

    const locale = getLocale(request)
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(url)
}

export const config = {
    matcher: '/((?!_next|api).*)',
}

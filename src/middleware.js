// src/middleware.js
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'

const locales = ['en', 'de']
const defaultLocale = 'en'

function getLocale(request) {
    const negotiator = new Negotiator({ headers: request.headers })
    const languages = negotiator
        .languages()
        .filter(lang => lang && lang !== '*')
    return match(languages, locales, defaultLocale)
}

export function middleware(request) {
    const { pathname } = request.nextUrl

    // 1) Skip _next, API routes and asset requests
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api')   ||
        /\.[^\/]+$/.test(pathname)
    ) {
        return NextResponse.next()
    }

    // 2) If the path already starts with a supported locale, do nothing
    if (locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
        return NextResponse.next()
    }

    // 3) Otherwise detect and redirect
    const locale = getLocale(request)
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(url)
}

export const config = {
    matcher: '/((?!_next|api).*)',
}

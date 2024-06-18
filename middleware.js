'use server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export function middleware(request) {

    const cookieStore = cookies()

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (cookieStore.has('sync-session') == false) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }
    }
    if (request.nextUrl.pathname.startsWith('/study-plan/create')) {
        if (cookieStore.has('sync-session') == false) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }
    }
    
}
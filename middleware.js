import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export function middleware(request) {

    const cookieStore = cookies()

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (cookieStore.has('sync-session') == false) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }
    }
    if (request.nextUrl.pathname.startsWith('/study-plan')) {
        if (cookieStore.has('sync-session') == false) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }
    }
    //study-plan/create
}
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query');

    if (query === "delete_cookie") {
        cookies().delete('sync-session');
        return NextResponse.json({ message: 'Sync session cookie deleted' }, { status: 200 });
    }

    // Return a default response if the query is not "delete_cookie"
    return NextResponse.json({ message: 'No action taken' }, { status: 400 });
}

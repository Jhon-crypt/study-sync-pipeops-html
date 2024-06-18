import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import supabase from "@/app/config/supabase";

export async function POST(req) {

    // Retrieve the headers from the incoming request
    const headersInstance = headers();

    // Extract the 'authorization' header from the request headers
    const authorization = headersInstance.get('authorization');

    // If there is no authorization header, return a 401 response
    if (!authorization) {
        return NextResponse.json({ error: 'Authorization header is missing' }, { status: 401 });
    }

    // Split the 'authorization' header to separate the Bearer token
    const splited_authorization = authorization.split("Bearer ");

    // Retrieve the Bearer token from the split result
    const bearer_token = splited_authorization[1];

    // Check if the Bearer token matches the expected value from the environment variables
    if (bearer_token === process.env.MASTER_BEARER_KEY) {

        const json = await req.json();

        // Ensure required fields exist in the JSON data
        if (!json.code) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const confirm_email_data = {
            code: json.code
        }

        //checking if the confirmation code has been used
        const { data } = await supabase
            .from('confirmation_code')
            .select('*')
            .eq('code', confirm_email_data.code)
            .single();

        if (data) {

            if (data.status === "expired") {
                return NextResponse.json({ message: "Code has been used" }, { status: 404 });
            } else {
                const { data, error } = await supabase
                    .from('confirmation_code')
                    .update({ status: 'expired' })
                    .eq('code', confirm_email_data.code)
                    .select()
                if (error) {
                    return NextResponse.json({ message: "Error, try again" }, { status: 500 });
                } else {
                    if (Array.isArray(data) && data.length === 0) {
                        return NextResponse.json({ message: "Wrong confirmation code" }, { status: 404 });
                    } else {
                        return NextResponse.json({ message: "Email confirmed" }, { status: 200 });
                    }
                }
            }

            /*
           
            */
        } else {
            return NextResponse.json({ message: "Wrong confirmation code" }, { status: 500 });
        }



    }

}
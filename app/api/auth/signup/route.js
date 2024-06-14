import { NextResponse } from "next/server";
import { headers } from 'next/headers';


export async function POST(req) {

    // Retrieve the headers from the incoming request
    const headersInstance = headers();

    // Extract the 'authorization' header from the request headers
    const authorization = headersInstance.get('authorization');

    // Split the 'authorization' header to separate the Bearer token
    const splited_authorization = authorization.split("Bearer ");

    // Retrieve the Bearer token from the split result
    const bearer_token = splited_authorization[1];

    // Check if the Bearer token matches the expected value from the environment variables
    if (bearer_token === process.env.MASTER_BEARER_KEY) {



        const json = await req.json();

        const signup_data= {
            fullanme: json.email,
            email: json.email,
            password: json.password,
            country: json.country,
            gender: json.gender,
            institution: json.institution,
            gradePoint: json.gradePoint
        }

        return NextResponse.json({ message: signup_data });

    }

}
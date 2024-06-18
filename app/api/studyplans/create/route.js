import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import bcrypt from "bcrypt";
import { cookies } from 'next/headers'
//import { writeFile } from 'fs/promises'; // Use promises for async/await
import supabase from "@/app/config/supabase";

export async function POST(req) {

    const cookieStore = cookies()

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

        if (cookieStore.has('sync-session') == true) {

            // Ensure required fields exist in the JSON data
            if (!json.courseTitle || !json.courseCode || !json.courseDescription || !json.courseImages) {
                return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
            }

            const study_plan_data = {
                course_title: json.courseTitle,
                course_code: json.courseCode,
                course_description: json.courseDescription,
                course_images: json.courseImages
            }

            return NextResponse.json({ message: study_plan_data }, { status: 200 });

        }else{
            return NextResponse.json({ message: "User not signed in" }, { status: 500 });
        }

    }
}

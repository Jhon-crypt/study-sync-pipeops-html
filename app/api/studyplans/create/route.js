import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid';

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



        // Ensure required fields exist in the JSON data
        if (!json.userId || !json.courseTitle || !json.courseCode || !json.courseDescription || !json.courseImages) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const study_plan_data = {
            user_id: json.userId,
            course_title: json.courseTitle,
            course_code: json.courseCode,
            course_description: json.courseDescription,
            course_images: json.courseImages
        }

        const plan_id = uuidv4();

        async function CreateStudyPlan(user_id, plan_id, course_title, course_code, description) {

            try {

                const { error } = await supabase
                    .from("study_plan")
                    .insert({
                        "user_id": user_id,
                        "plan_id": plan_id,
                        "course_title": course_title,
                        "course_code": course_code,
                        "description": description,
                        "module_count": "0",
                    });
                if (error) {
                    return NextResponse.json({ message: error }, { status: 500 });
                } else {
                    return NextResponse.json({ message: "Study plan Created" }, { status: 200 });
                }

            } catch (error) {

                return NextResponse.json({ message: error.message }, { status: 500 });

            }

        }

        return await CreateStudyPlan(study_plan_data.user_id, plan_id, study_plan_data.course_title, study_plan_data.course_code, study_plan_data.course_description, study_plan_data.course_images);



    }
}

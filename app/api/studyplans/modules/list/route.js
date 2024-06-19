import { NextResponse } from "next/server";
import supabase from "@/app/config/supabase";
import { headers } from 'next/headers';

export async function GET(req) {

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

        const searchParams = req.nextUrl.searchParams;
        const planId = searchParams.get('plan_id');

        if (!planId || planId.trim() === "") {
            return NextResponse.json({ message: "Empty query" }, { status: 500 });
        } else {

            try {

                //checking if the email exists
                const { data } = await supabase
                    .from('study_plan_modules')
                    .select('*')
                    .eq('plan_id', planId)
                if (Array.isArray(data) && data.length === 0) {

                    return NextResponse.json({ message: "Empty modules" }, { status: 200 });

                } else {
                    // Remove newline characters (\n) from 'module_title' and 'note' fields of each module
                    const modules = data.map(module => ({
                        ...module,
                        module_title: module.module_title.replace(/\n/g, ""),
                        note: module.note.replace(/\n/g, "")
                    }));

                    return NextResponse.json({ message: "Modules fetched successfully", modules }, { status: 200 });

                }

            } catch (error) {

                return NextResponse.json({ message: error }, { status: 500 });

            }


        }

    }

}
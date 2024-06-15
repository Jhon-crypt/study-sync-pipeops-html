import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import bcrypt from "bcrypt";
import { cookies } from 'next/headers'
//import { writeFile } from 'fs/promises'; // Use promises for async/await
import supabase from "@/app/config/supabase";
import { v4 as uuidv4 } from 'uuid';


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

        // Ensure required fields exist in the JSON data
        if (!json.email || !json.password) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const signin_data = {
            email: json.email,
            password: json.password,
        };

        // Checking if the user exists
        const { data, error } = await supabase
            .from('users')
            .select('email, password, user_id')
            .eq('email', signin_data.email)
            .single();

        if (error) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        } else {

            const user = data;

            if (bcrypt.compareSync(signin_data.password, user.password) == true) {

                const session_id = uuidv4();

                cookies().set('sync-session', session_id, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 60 * 60 * 24 * 7, // One week
                    path: '/',
                })

                //check if user session exists
                const { data, error } = await supabase
                    .from('sessions')
                    .select('user_id')
                    .eq('user_id', user.user_id)
                    .single();

                if (error) {
                    //create new session

                    const { error } = await supabase
                        .from("sessions")
                        .insert({
                            "session_id": session_id,
                            "user_id": user.user_id,
                            "status": "Active",
                        });
                    if (error) {
                        return NextResponse.json({ message: error }, { status: 500 });
                    } else {
                        return NextResponse.json({ message: "successfully Logged in", data: {user_id : user.user_id} }, { status: 200 });
                    }
                } else {
                    //update existing session
                    const { data, error } = await supabase
                        .from('sessions')
                        .update({ "session_id": session_id})
                        .eq('user_id', user.user_id)
                        .select()
                    if (error) {
                        return NextResponse.json({ message: error }, { status: 500 });
                    } else {
                        return NextResponse.json({ message: "successfully Logged in", data: {user_id : user.user_id} }, { status: 200 });
                    }
                }

            } else {
                return NextResponse.json({ message: "User Not Found" }, { status: 500 });
            }

        }


        /*
        const base64Data = json.image; // Assuming the base64 image is in json.image

        const base64String = base64Data.replace(/^data:image\/\w+;base64,/, "");


        const buffer = Buffer.from(base64String, 'base64');

        // Define the path where the image will be saved
        const filePath = 'uploaded.png';

        // Write the file
        await writeFile(filePath, buffer);
        */

        //return NextResponse.json({ message: "Image saved successfully" });

    }

}
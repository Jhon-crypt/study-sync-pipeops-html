import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import { writeFile } from 'fs/promises'; // Use promises for async/await


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

        const base64Data = json.image; // Assuming the base64 image is in json.image

        const base64String = base64Data.replace(/^data:image\/\w+;base64,/, "");


        const buffer = Buffer.from(base64String, 'base64');

        // Define the path where the image will be saved
        const filePath = 'uploaded.png';

        // Write the file
        await writeFile(filePath, buffer);

        return NextResponse.json({ message: "Image saved successfully" });

    }

}
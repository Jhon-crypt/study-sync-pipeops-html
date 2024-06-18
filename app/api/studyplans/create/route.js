import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid';
import { writeFile } from 'fs/promises';
//import { writeFile } from 'fs/promises'; // Use promises for async/await
import supabase from "@/app/config/supabase";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';

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
                    await UploadStudyImagesToServer(study_plan_data.course_images, plan_id)
                    await UploadStudyImagesToSupabase(study_plan_data.course_images, plan_id)
                    const aiResponse = await GoogleAi(plan_id, study_plan_data.course_images);
                    return NextResponse.json({ message: "Study plan Created", aiResponse }, { status: 200 });
                }

            } catch (error) {

                return NextResponse.json({ message: error.message }, { status: 500 });

            }

        }

        async function dataURLToBlob(dataURL) {
            const response = await fetch(dataURL);
            const blob = await response.blob();
            return blob;
        }

        async function UploadStudyImagesToServer(images, plan_id) {

            try {
                const promises = images.map(async (base64Data, index) => {
                    const base64String = base64Data.replace(/^data:image\/\w+;base64,/, "");
                    const buffer = Buffer.from(base64String, 'base64');
                    const filePath = `./public/${plan_id}_${index}.png`; // Adjust the path as needed
                    await writeFile(filePath, buffer);
                   
                });

                await Promise.all(promises);
                // Delete the file after AI processing is completed

                return NextResponse.json({ message: "Images uploaded successfully" }, { status: 200 });
            } catch (error) {
                return NextResponse.json({ message: "could not upload image" }, { status: 500 });
            }

        }

        async function deleteFile(filePath) {
            return new Promise((resolve, reject) => {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        }

        async function UploadStudyImagesToSupabase(images, plan_id) {

            try {
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    const blob = await dataURLToBlob(image);
                    const { data, error } = await supabase.storage
                        .from('study-plans')
                        .upload(`${plan_id}/${uuidv4()}`, blob, {
                            cacheControl: '3600',
                            upsert: false,
                        });

                    if (error) {
                        console.log(error)
                    }
                }
                return NextResponse.json({ message: "Images uploaded to supabase" }, { status: 200 });

            } catch (error) {

                return NextResponse.json({ message: "Could not upload images to supabase" }, { status: 500 });

            }

        }

        async function GoogleAi(plan_id, images) {
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
            const prompt = `I want you to simplify the note as simple as possible in the image to well structured json,there should be no breaks,no slashes in between the key and its values i don want there to be spaces in between the json data with exaclty this structure, nothing else, i repeat, nothing else apart from ths structure{topic: "",note: ""}, the topics should be at list 10, repeated jsons, just that, and spaced too, nothing else extra, the note in the json should be extensive and detailed and understandable by anybody`;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

            function fileToGenerativePart(path, mimeType) {
                return {
                    inlineData: {
                        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
                        mimeType
                    },
                };
            }

            try {
                const parts = images.map((_, index) => {
                    const filePath = `./public/${plan_id}_${index}.png`;
                    return fileToGenerativePart(filePath, "image/png");
                });

                const generatedContent = await model.generateContent([prompt, ...parts]);
                console.log(generatedContent.response.text());

                const deletePromises = images.map((_, index) => {
                    const filePath = `./public/${plan_id}_${index}.png`;
                    return deleteFile(filePath);
                });

                await Promise.all(deletePromises);

                return generatedContent.response.text();
            } catch (error) {
                return { message: "Could not process images with Google AI" };
            }
        }

        return await CreateStudyPlan(study_plan_data.user_id, plan_id, study_plan_data.course_title, study_plan_data.course_code, study_plan_data.course_description, study_plan_data.course_images);



    }
}
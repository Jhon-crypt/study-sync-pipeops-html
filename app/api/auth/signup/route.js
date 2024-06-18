import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import bcrypt from "bcrypt";
import supabase from "@/app/config/supabase";
import { v4 as uuidv4 } from 'uuid';
//import { Resend } from 'resend';


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
        if (!json.fullname || !json.email || !json.password || !json.country || !json.gender || !json.institution || !json.gradePoint) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const signup_data = {
            fullname: json.fullname,
            email: json.email,
            password: json.password,
            country: json.country,
            gender: json.gender,
            institution: json.institution,
            gradePoint: json.gradePoint
        };

        //checking if the email exists
        const { data } = await supabase
            .from('users')
            .select('*')
            .eq('email', signup_data.email)

        if (data.length > 0) {

            return NextResponse.json({ message: "Email already exist" }, { status: 500 });

        } else {

            // Hashing password
            const saltRounds = 10;
            const hash = bcrypt.hashSync(signup_data.password, saltRounds);

            async function InsertUserDataIntoDb(email, password, fullname, country, gender, institution, grade) {
                // Generate user id
                const user_id = uuidv4();

                // Store data in supabase
                try {
                    const { error } = await supabase
                        .from("users")
                        .insert({
                            "user_id": user_id,
                            "email": email,
                            "password": password,
                            "role": "user",
                            "status": "pending",
                            "sub_status": "free",
                        });
                    if (error) {
                        return NextResponse.json({ message: error }, { status: 500 });
                    } else {
                        await InsertIntoUserProfileDb(user_id, fullname, country, gender, institution, grade)
                        //await InsertConfirmationCodeToDb(user_id)
                        //await SendConfirmationEmail(user_id, email)
                        return NextResponse.json({ message: "Account Created" }, { status: 201 });
                    }
                } catch (error) {
                    return NextResponse.json({ message: error.message }, { status: 500 });
                }
            }

            {/*]
            async function SendConfirmationEmail(user_id, email) {

                function generateRandomCode() {
                    const min = 1000;
                    const max = 9999;
                    const code = Math.floor(Math.random() * (max - min + 1)) + min;
                    return code;
                }

                const randomCode = generateRandomCode();

                const resend = new Resend(process.env.RESEND_API_KEY);

                const { data, error } = await resend.emails.send({
                    from: 'Study Sync <onboarding@resend.dev>',
                    to: [`${email}`],
                    subject: `<h1>Testing, this is your code ${randomCode}</h1>`,
                    html: '<strong>It works!</strong>',
                });

                if (error) {
                    return console.error({ error });
                } else {
                    await InsertConfirmationCodeToDb(user_id, randomCode)
                    console.log({ data });
                }

            }
            {*/}

            {/*}
            async function InsertConfirmationCodeToDb(user_id, randomCode) {



                const { error } = await supabase
                    .from("confirmation_code")
                    .insert({
                        "user_id": user_id,
                        "code": randomCode,
                        "status": "active"
                    });

                if (error) {
                    console.error('Error inserting confirmation code:', error);
                } else {
                    console.error('successfully inserted confirmation code');

                }

            }
            {*/}

            async function InsertIntoUserProfileDb(user_id, fullname, country, gender, institution, grade) {

                const { error } = await supabase
                    .from("profile")
                    .insert({
                        "user_id": user_id,
                        "fullname": fullname,
                        "country": country,
                        "gender": gender,
                        "institution": institution,
                        "grade_point": grade
                    });
                if (error) {
                    console.error('Error inserting user profile:', error);
                } else {
                    console.error('successfully inserted user profile');
                }

            }

            return await InsertUserDataIntoDb(signup_data.email, hash, signup_data.fullname, signup_data.country, signup_data.gender, signup_data.institution, signup_data.gradePoint);

        }
    } else {
        // Return a 403 response if the bearer token does not match
        return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }
}

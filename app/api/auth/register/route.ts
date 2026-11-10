import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import type { IRegisterData } from "@/types/RegisterData";
import User from "@/models/User";

export async function POST(request: Request) {
    try {

        let body: unknown;

        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { message: "Invalid JSON body." },
                { status: 400 }
            );
        }


        if (
            typeof body !== "object" ||
            body === null ||
            Array.isArray(body) ||
            !("name" in body) ||
            !("email" in body) ||
            !("password" in body)
        ) {
            return NextResponse.json(
                { message: "Registration information is incomplete." },
                { status: 400 }
            );
        }

        const { name, email, password } = body as IRegisterData;

        // 4. Validate data types and values
        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string"
        ) {
            return NextResponse.json(
                { message: "Invalid data types." },
                { status: 400 }
            );
        }

        const normalizedName = name.trim();
        const normalizedEmail = email.trim().toLowerCase();

        if (
            normalizedName.length < 3 ||
            normalizedName.length > 100 ||
            password.length < 8 ||
            password.length > 128
        ) {
            return NextResponse.json(
                { message: "Registration information is invalid." },
                { status: 400 }
            );
        }

        // 5. Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(normalizedEmail)) {
            return NextResponse.json(
                { message: "Invalid email address." },
                { status: 400 }
            );
        }

        // 6. Connect to database
        await connectDB();

        const existingUser = await User.findOne({
            email: normalizedEmail,
        });

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: "This email is already registered.",
                },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { message: "Validation successful." },
            { status: 200 }
        );

    } catch (error) {
        console.error("Registration API error:", error);

        return NextResponse.json(
            { message: "Internal server error." },
            { status: 500 }
        );
    }
}
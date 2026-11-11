import {NextResponse} from "next/server";
import connectDB from "@/lib/mongodb";
import type {IRegisterData} from "@/types/RegisterData";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import {SignJWT} from "jose";

export async function POST(request: Request) {
    try {
        const secretKey = process.env.AUTH_SECRET;

        if (!secretKey) {
            throw new Error("AUTH_SECRET is not configured.");
        }

        const secret = new TextEncoder().encode(secretKey);

        let body: unknown;

        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                {message: "Invalid JSON body."},
                {status: 400}
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
                {message: "Registration information is incomplete."},
                {status: 400}
            );
        }

        const {name, email, password} = body as IRegisterData;

        // 4. Validate data types and values
        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string"
        ) {
            return NextResponse.json(
                {message: "Invalid data types."},
                {status: 400}
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
                {message: "Registration information is invalid."},
                {status: 400}
            );
        }

        // 5. Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(normalizedEmail)) {
            return NextResponse.json(
                {message: "Invalid email address."},
                {status: 400}
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
                {status: 409}
            );
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            name: normalizedName,
            email: normalizedEmail,
            password: hashedPassword,
        });

        const token = await new SignJWT({
            email: newUser.email,
        })
            .setProtectedHeader({alg: "HS256"})
            .setSubject(newUser._id.toString())
            .setIssuedAt()
            .setExpirationTime("7d")
            .sign(secret);


        const response = NextResponse.json(
            {message: "Account created successfully."},
            {status: 201}
        );

        response.cookies.set("auth-token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
        

    } catch (error: unknown) {
        if (
            typeof error === "object" &&
            error !== null &&
            "code" in error &&
            error.code === 11000
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "This email is already registered.",
                },
                {status: 409}
            );
        }

        console.error("Registration API error:", error);

        return NextResponse.json(
            {message: "Internal server error."},
            {status: 500}
        );
    }
}
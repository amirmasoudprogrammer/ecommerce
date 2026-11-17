
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

export async function POST(request: Request) {
    try {
        // 1. Check JWT secret
        const secretKey = process.env.AUTH_SECRET;

        if (!secretKey) {
            throw new Error("AUTH_SECRET is not configured.");
        }

        const secret = new TextEncoder().encode(secretKey);

        // 2. Parse request body
        let body: unknown;

        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { success: false, message: "Invalid JSON body." },
                { status: 400 }
            );
        }

        // 3. Validate body structure
        if (
            typeof body !== "object" ||
            body === null ||
            Array.isArray(body) ||
            !("email" in body) ||
            !("password" in body)
        ) {
            return NextResponse.json(
                { success: false, message: "Email and password are required." },
                { status: 400 }
            );
        }

        const { email, password } = body;

        // 4. Validate data types
        if (
            typeof email !== "string" ||
            typeof password !== "string"
        ) {
            return NextResponse.json(
                { success: false, message: "Invalid data types." },
                { status: 400 }
            );
        }

        // 5. Normalize and validate inputs
        const normalizedEmail = email.trim().toLowerCase();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailRegex.test(normalizedEmail) ||
            password.length === 0 ||
            password.length > 128
        ) {
            return NextResponse.json(
                { success: false, message: "Invalid email or password." },
                { status: 400 }
            );
        }

        // 6. Connect to MongoDB
        await connectDB();

        // 7. Find user by email
        // +password also works if password has select: false in schema
        const user = await User.findOne({
            email: normalizedEmail,
        }).select("+password");

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Invalid email or password." },
                { status: 401 }
            );
        }

        // 8. Compare entered password with hashed password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, message: "Invalid email or password." },
                { status: 401 }
            );
        }

        // 9. Create JWT
        const token = await new SignJWT({
            email: user.email,
        })
            .setProtectedHeader({ alg: "HS256" })
            .setSubject(user._id.toString())
            .setIssuedAt()
            .setExpirationTime("7d")
            .sign(secret);

        // 10. Create response
        const response = NextResponse.json(
            {
                success: true,
                message: "Login successful.",
                user: {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                },
            },
            { status: 200 }
        );

        // 11. Set secure authentication cookie
        response.cookies.set("auth-token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;

    } catch (error: unknown) {
        console.error("Login API error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal server error.",
            },
            { status: 500 }
        );
    }
}

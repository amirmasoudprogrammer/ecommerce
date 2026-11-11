import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function getCurrentUser() {
    // 1. دریافت Cookie های مرورگر
    const cookieStore = await cookies();

    // 2. دریافت توکن
    const token = cookieStore.get("auth-token")?.value;

    // 3. بررسی وجود توکن و Secret
    const secretKey = process.env.AUTH_SECRET;

    if (!token || !secretKey) {
        return null;
    }

    // 4. بررسی اعتبار JWT
    try {
        const secret = new TextEncoder().encode(secretKey);

        const { payload } = await jwtVerify(token, secret, {
            algorithms: ["HS256"],
        });

        // 5. برگرداندن اطلاعات کاربر
        return {
            id: payload.sub,
            email: payload.email,
        };
    } catch {
        // توکن نامعتبر یا منقضی شده
        return null;
    }
}
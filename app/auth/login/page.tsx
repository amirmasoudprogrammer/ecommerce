
import { Suspense } from "react";
import Login from "@/features/client/auth/login/components/Login";
import { getCurrentUser } from "@/lib/authtoken";
import { redirect } from "next/navigation";

async function LoginContent() {
    const user = await getCurrentUser();

    if (user) {
        redirect("/");
    }

    return <Login />;
}

export default function page() {
    return (
        <Suspense fallback={<div className="min-h-[400px]" />}>
            <LoginContent />
        </Suspense>
    );
}

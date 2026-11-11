import { Suspense } from "react";
import Register from "@/features/client/auth/register/components/Register";
import { getCurrentUser } from "@/lib/authtoken";
import { redirect } from "next/navigation";

async function RegisterContent() {
    const user = await getCurrentUser();

    if (user) {
        redirect("/");
    }

    return <Register />;
}

export default function page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegisterContent />
        </Suspense>
    );
}

"use client";

import { useState } from "react";
import axios from "axios";
import type { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import type { LoginOutput } from "@/features/client/auth/login/schemas/login.schema";
import { loginService } from "@/services/client/auth/login/login.service";

export function useLogin() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const router = useRouter();

    const onSubmit: SubmitHandler<LoginOutput> = async (data) => {
        setIsLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await loginService(data);

            setSuccessMessage(response.message);

            toast.success(response.message);

            router.replace("/");
            router.refresh();

        } catch (error: unknown) {
            let message = "Something went wrong.";

            if (axios.isAxiosError<{ message?: string }>(error)) {
                message =
                    error.response?.data?.message ||
                    "Something went wrong.";
            } else {
                message = "An unexpected error occurred.";
            }

            setErrorMessage(message);
            toast.error(message);

        } finally {
            setIsLoading(false);
        }
    };

    return {
        onSubmit,
        isLoading,
        successMessage,
        errorMessage,
    };
}

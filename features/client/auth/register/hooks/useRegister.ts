
"use client";

import { useState } from "react";
import axios from "axios";
import type { SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import { useRouter } from "next/navigation";
import { registerSchema } from "../schemas/register.schema";
import { registerService } from "@/services/client/auth/register/register.service";
import {toast} from "sonner";

type RegisterOutput = z.output<typeof registerSchema>;

export function useRegister() {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const onSubmit: SubmitHandler<RegisterOutput> = async (data) => {

        setIsLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await registerService(data);

            setSuccessMessage(response.message);
            toast.success(response.message)
            router.replace("/");
            router.refresh();

        } catch (error: unknown) {

            if (axios.isAxiosError<{ message?: string }>(error)) {
                toast.error(
                    error.response?.data?.message || "Something went wrong."
                );
                setErrorMessage(
                    error.response?.data?.message ||
                    "Something went wrong."
                );


            } else {
                setErrorMessage("An unexpected error occurred.");
            }

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

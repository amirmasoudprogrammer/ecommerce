
"use client";

import { useForm } from "react-hook-form";
import { useRegister } from "@/features/client/auth/register/hooks/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/features/client/auth/register/schemas/register.schema";
import type { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type RegisterInput = z.input<typeof registerSchema>;
type RegisterOutput = z.output<typeof registerSchema>;

function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterInput, any, RegisterOutput>({
        resolver: zodResolver(registerSchema),
    });

    const { onSubmit } = useRegister();

    return (
        <div className="container mt-5">
            <div className="flex justify-end xl:mr-14 mb-8">
                <a
                    href="/"
                    className="text-xs text-gray-500 hover:text-black transition-colors"
                >
                    ← Back to the website
                </a>
            </div>
            <div className="w-full max-w-[460px] mx-auto mb-10">
                {/* Register Form */}
                <div className="w-full">

                    <h2 className="text-lg font-semibold text-gray-900 mb-7">
                        Sign up
                    </h2>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >

                        {/* Name */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="name"
                                className="text-xs font-medium text-gray-800"
                            >
                                Name
                                <span className="text-red-500 ml-1">*</span>
                            </Label>

                            <Input
                                id="name"
                                type="text"
                                placeholder="Full name"
                                {...register("name")}
                                className={`
                                h-10 rounded-sm border-gray-200
                                text-xs placeholder:text-gray-400
                                focus-visible:ring-1 focus-visible:ring-gray-400
                                ${errors.name ? "border-red-500" : ""}
                            `}
                            />

                            {errors.name && (
                                <p className="text-xs text-red-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="text-xs font-medium text-gray-800"
                            >
                                Email
                                <span className="text-red-500 ml-1">*</span>
                            </Label>

                            <Input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                {...register("email")}
                                className={`
                                h-10 rounded-sm border-gray-200
                                text-xs placeholder:text-gray-400
                                focus-visible:ring-1 focus-visible:ring-gray-400
                                ${errors.email ? "border-red-500" : ""}
                            `}
                            />

                            {errors.email && (
                                <p className="text-xs text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label
                                htmlFor="password"
                                className="text-xs font-medium text-gray-800"
                            >
                                Password
                                <span className="text-red-500 ml-1">*</span>
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                                className={`
                                h-10 rounded-sm border-gray-200
                                text-xs placeholder:text-gray-400
                                focus-visible:ring-1 focus-visible:ring-gray-400
                                ${errors.password ? "border-red-500" : ""}
                            `}
                            />

                            {errors.password && (
                                <p className="text-xs text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start gap-2 pt-1">
                            <input
                                id="terms"
                                type="checkbox"
                                required
                                className="
                                mt-0.5 size-3.5 shrink-0
                                accent-gray-900 cursor-pointer
                            "
                            />

                            <Label
                                htmlFor="terms"
                                className="text-[10px] leading-4 text-gray-600 cursor-pointer"
                            >
                                Terms and conditions agreement should start with
                                an introduction that lets users know they're
                                reading a terms and conditions agreement.
                            </Label>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="
                            w-full h-10 rounded-sm
                            bg-[#D1D1D1] hover:bg-[#252525]
                            text-white text-xs font-medium
                            transition-all duration-300
                        "
                        >
                            SIGN UP
                        </Button>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-gray-200" />
                            <span className="text-[10px] text-gray-400">
                            OR
                        </span>
                            <span className="h-px flex-1 bg-gray-200" />
                        </div>

                        {/* Google Sign Up */}
                        <Button
                            type="button"
                            variant="outline"
                            className="
                            w-full h-10 rounded-sm
                            bg-[#414141] hover:bg-[#292929]
                            border-none text-white hover:text-white
                            text-xs font-normal
                            transition-all duration-300
                        "
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    fill="#FFC107"
                                    d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-2 4.6-4.2 6v5h6.8c4-3.7 6-8.6 6-14.7Z"
                                />
                                <path
                                    fill="#4285F4"
                                    d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.8-5c-1.9 1.3-4.2 2-6.7 2-5.2 0-9.7-3.5-11.3-8.2H5.7v5.2A20 20 0 0 0 24 44Z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12.7 28a12 12 0 0 1 0-8v-5.2H5.7a20 20 0 0 0 0 18.4l7-5.2Z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M24 11.8c3 0 5.7 1 7.8 3.1l5.8-5.8A19.5 19.5 0 0 0 24 4 20 20 0 0 0 5.7 14.8l7 5.2c1.6-4.7 6.1-8.2 11.3-8.2Z"
                                />
                            </svg>

                            Sign up with Google
                        </Button>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default RegisterForm;


import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .email("Please enter a valid email"),

    password: z
        .string()
        .min(1, "Password is required")
        .max(128, "Password is too long"),
});

export type LoginInput = z.input<typeof loginSchema>;
export type LoginOutput = z.output<typeof loginSchema>;

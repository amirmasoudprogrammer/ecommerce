import type { SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import { registerSchema } from "../schemas/register.schema";

type RegisterOutput = z.output<typeof registerSchema>;

export function useRegister() {
    const onSubmit: SubmitHandler<RegisterOutput> = (data) => {
        console.log(data);
    };

    return {
        onSubmit,
    };
}
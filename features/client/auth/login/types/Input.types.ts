
import type {
    UseFormRegister,
    FieldPath,
} from "react-hook-form";

import type { LoginInput } from "@/features/client/auth/login/schemas/login.schema";

export interface FormInputProps {
    id: FieldPath<LoginInput>;
    label: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<LoginInput>;
    error?: string;
}

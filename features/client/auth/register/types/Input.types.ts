import type { UseFormRegister, FieldPath } from "react-hook-form";
import type {RegisterInput} from "@/features/client/auth/register/schemas/register.schema";

export interface FormInputProps {
    id: FieldPath<RegisterInput>;
    label: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<RegisterInput>;
    error?: string;
}
import api from "@/lib/axios";

import type { RegisterOutput  } from "@/features/client/auth/register/schemas/register.schema";

interface RegisterResponse {
    message: string;
    success?: boolean;
}

export async function registerService(
    data: RegisterOutput
): Promise<RegisterResponse> {

    const response = await api.post<RegisterResponse>(
        "/api/auth/register",
        data
    );

    return response.data;
}

import api from "@/lib/axios";

import type { LoginOutput } from "@/features/client/auth/login/schemas/login.schema";
import type { LoginResponse } from "@/features/client/auth/login/types/login.types";

export async function loginService(
    data: LoginOutput
): Promise<LoginResponse> {

    const response = await api.post<LoginResponse>(
        "/api/auth/login",
        data
    );

    return response.data;
}

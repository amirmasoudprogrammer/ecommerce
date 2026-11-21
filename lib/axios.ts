
import axios from "axios";

import {
    API_BASE_URL,
    DUMMY_JSON_BASE_URL,
} from "@/constants/api";

interface CreateApiOptions {
    baseURL: string;
    timeout?: number;
}

const DEFAULT_TIMEOUT = 15000;

export function createApi(options: CreateApiOptions) {
    const { baseURL, timeout } = options;

    return axios.create({
        baseURL,
        timeout: timeout ?? DEFAULT_TIMEOUT,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export const api = createApi({
    baseURL: API_BASE_URL,
});

export const dummyJsonApi = createApi({
    baseURL: DUMMY_JSON_BASE_URL,
});

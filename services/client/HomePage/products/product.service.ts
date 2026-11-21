
import { dummyJsonApi } from "@/lib/axios";

import type { ProductsResponse } from "@/types/product";

export async function getProducts(limit: number = 10): Promise<ProductsResponse> {
    const response = await dummyJsonApi.get<ProductsResponse>(
        "/products",
        {
            params: {
                limit,
            },
        }
    );

    return response.data;
}

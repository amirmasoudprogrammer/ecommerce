import type { ProductsResponse } from "@/types/product";

import {dummyJsonApi} from "@/lib/axios";

export async function getProductsByCategory(
    category: string,
    limit: number = 10
): Promise<ProductsResponse> {
    const response = await dummyJsonApi.get<ProductsResponse>(
        `/products/category/${category}`,
        {
            params: {
                limit,
            },
        }
    );

    return response.data;
}
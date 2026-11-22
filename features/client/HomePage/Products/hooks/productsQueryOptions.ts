import {getProducts} from "@/features/client/HomePage/Products/services/product.service";


export const productsQueryOptions = (limit: number = 10) => ({
    queryKey: ["products", limit] as const,
    queryFn: () => getProducts(limit),
    staleTime: 60 * 1000,
});

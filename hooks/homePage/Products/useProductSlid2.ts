import { useQuery } from "@tanstack/react-query";
import {getProductsByCategory} from "@/services/client/HomePage/products/productsSlid2.service";

export function useProductsByCategory(
    category: string,
    limit: number = 10
) {
    return useQuery({
        queryKey: ["products", "category", category, limit],
        queryFn: () => getProductsByCategory(category, limit),
        enabled: Boolean(category),
    });
}
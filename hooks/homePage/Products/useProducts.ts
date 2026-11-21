
import { useQuery } from "@tanstack/react-query";
import {getProducts} from "@/services/client/HomePage/products/product.service";


export function useProducts(limit: number = 10) {
    return useQuery({
        queryKey: ["products", limit],
        queryFn: () => getProducts(limit),
    });
}

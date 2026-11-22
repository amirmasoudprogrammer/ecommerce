import type { UseQueryResult } from "@tanstack/react-query";
import {Product, ProductsResponse} from "@/types/product";

export interface ErrorsProps {
    error: UseQueryResult<ProductsResponse>["error"];
    refetch: UseQueryResult<ProductsResponse>["refetch"];
    isFetching: boolean;
}
export interface ProductCardProps {
    product: Product;
}

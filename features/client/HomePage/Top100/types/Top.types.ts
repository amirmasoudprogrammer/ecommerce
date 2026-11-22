import {UseQueryResult} from "@tanstack/react-query/src";
import {ProductsResponse, Top100Product} from "@/types/product";

export interface ErrorsProps {
    error: UseQueryResult<ProductsResponse>["error"];
    refetch: UseQueryResult<ProductsResponse>["refetch"];
    isFetching: boolean;
}
export interface ProductCardProps {
    item: Top100Product;
}
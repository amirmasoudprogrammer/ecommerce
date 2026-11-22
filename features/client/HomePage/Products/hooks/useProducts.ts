
import { useQuery } from "@tanstack/react-query";
import { productsQueryOptions } from "./productsQueryOptions";

export function useProducts(limit: number = 10) {
    return useQuery(productsQueryOptions(limit));
}

export function useHomeProducts() {
    const {
        data,
        isPending,
        isError,
        error,
        refetch,
        isFetching,
    } = useProducts(10);

    return {
        products: data?.products ?? [],
        isPending,
        isError,
        refetch,
        isFetching,
        error,
    };
}

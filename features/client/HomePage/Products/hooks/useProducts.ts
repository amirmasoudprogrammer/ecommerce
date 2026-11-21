import {useProducts} from "@/hooks/homePage/Products/useProducts";

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
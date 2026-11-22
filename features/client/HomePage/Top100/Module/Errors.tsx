
import type { UseQueryResult } from "@tanstack/react-query";
import type { ProductsResponse } from "@/types/product";

interface ErrorsProps {
    error: UseQueryResult<ProductsResponse>["error"];
    refetch: UseQueryResult<ProductsResponse>["refetch"];
    isFetching: boolean;
}

export default function Errors({
                                   error,
                                   refetch,
                                   isFetching,
                               }: ErrorsProps) {
    return (
        <section className="mx-auto max-w-[1440px] px-4 py-10">
            <p className="text-sm text-red-500">
                Error: {error?.message ?? "Something went wrong"}
            </p>

            <button
                type="button"
                onClick={() => refetch()}
                disabled={isFetching}
                className="mt-4 rounded-md bg-gray-900 px-4 py-2 text-sm text-white disabled:opacity-50"
            >
                {isFetching ? "Retrying..." : "Try Again"}
            </button>
        </section>
    );
}

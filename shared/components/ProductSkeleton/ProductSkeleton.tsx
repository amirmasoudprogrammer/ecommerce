
interface ProductSkeletonProps {
    count?: number;
}

export default function ProductSkeleton({
                                            count = 4,
                                        }: ProductSkeletonProps) {
    const skeletonItems = Array.from(
        { length: count ?? 4 },
        (_, index) => index
    );

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skeletonItems.map((item) => (
                <article
                    key={item}
                    className="flex h-full flex-col rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
                >
                    {/* Product Image */}
                    <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-md bg-gray-100">
                        <div className="h-full w-full animate-pulse bg-gray-200" />

                        {/* Discount Badge */}
                        <div className="absolute left-2 top-2 h-6 w-12 animate-pulse rounded bg-gray-300" />
                    </div>

                    {/* Product Information */}
                    <div className="mt-4 flex flex-col gap-3">

                        {/* Category */}
                        <div className="h-3 w-1/3 animate-pulse rounded bg-gray-200" />

                        {/* Title */}
                        <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />

                        {/* Rating */}
                        <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />

                        {/* Price */}
                        <div className="mt-1 flex items-center gap-2">
                            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
                            <div className="h-3 w-1/4 animate-pulse rounded bg-gray-100" />
                        </div>

                    </div>
                </article>
            ))}
        </div>
    );
}

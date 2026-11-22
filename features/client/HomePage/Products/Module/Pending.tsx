
import ProductSkeleton from "@/shared/components/ProductSkeleton/ProductSkeleton";

export default function Pending() {
    return (
        <section className="mx-auto w-full min-w-0 max-w-[1440px] mb-6 px-4 py-10 md:px-6 lg:px-10">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
                    Flash Sales
                </h2>
            </div>

            <ProductSkeleton count={4} />
        </section>
    );
}

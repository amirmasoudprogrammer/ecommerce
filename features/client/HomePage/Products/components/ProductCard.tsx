
import type { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const discountedPrice = product.price * (1 - product.discountPercentage / 100);

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price);

    return (
        <article className="h-full rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
            {/* Product Image */}
            <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-md bg-gray-50">
        <span className="absolute left-2 top-2 z-10 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
          -{Math.round(product.discountPercentage)}%
        </span>

                <Image
                    src={product.thumbnail}
                    width={438}
                    height={280}
                    alt={product.title}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="h-full w-full object-contain p-3"
                />
            </div>

            {/* Product Information */}
            <div className="mt-4">
                <p className="text-xs capitalize text-gray-400">
                    {product.category}
                </p>

                <h3 className="mt-1 truncate text-sm font-semibold text-gray-800">
                    {product.title}
                </h3>

                <div className="mt-2 flex items-center gap-1 text-sm">
                    <span className="text-amber-400">★</span>
                    <span className="font-medium text-gray-700">
            {product.rating.toFixed(1)}
          </span>
                    <span className="text-xs text-gray-400">/ 5</span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-red-500">
            {formatPrice(discountedPrice)}
          </span>

                    <span className="text-xs text-gray-400 line-through">
            {formatPrice(product.price)}
          </span>
                </div>
            </div>
        </article>
    );
}


import Image from "next/image";
import type { Top100Product } from "@/types/product";

interface ProductCardProps {
    item: Top100Product;
}


export default function ProductCard({ item }: ProductCardProps) {
    const discountedPrice =
        item.price - (item.price * item.discountPercentage) / 100;

    return (
        <article className="h-full overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[220px] w-full">
                <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 25vw"
                    className="object-contain p-3"
                />

                <button
                    type="button"
                    aria-label="Add to favorites"
                    className="absolute right-3 top-3 z-10 text-lg text-gray-500 hover:text-red-500"
                >
                    ♡
                </button>
            </div>

            <div className="border-t border-gray-100 p-3">
                <h3 className="truncate text-xs font-medium text-gray-800">
                    {item.title}
                </h3>

                <div className="mt-2 flex items-center gap-1">
                    <span className="text-sm text-amber-400">★★★★★</span>
                    <span className="text-xs text-gray-500">{item.rating}</span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span>

                    <span className="text-xs text-gray-400 line-through">
            ${item.price.toFixed(2)}
          </span>
                </div>
            </div>
        </article>
    );
}

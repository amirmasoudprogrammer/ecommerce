import Image from "next/image";
import type {CarditemsProps} from "@/features/client/HomePage/TrendingM/types/trending";



export default function Carditems({ item }: CarditemsProps) {
    return (
        <article className="group relative h-[481px] w-full overflow-hidden rounded-lg md:h-[437px] lg:h-[437px] xl:h-[437px]">
            {/* Background Image */}
            <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 767px) 90vw, (max-width: 1023px) 100vw, 406px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badge */}
            <span className="absolute left-3 top-3 rounded bg-emerald-500 px-2 py-1 text-xs font-medium text-white">
        {item.badge}
      </span>

            {/* Content */}
            <div className="absolute bottom-0 left-0 flex w-full items-center justify-between gap-3 bg-black/85 px-4 py-3">
                <h3 className="text-sm font-semibold text-white">
                    {item.title}
                </h3>

                <a
                    href={item.href}
                    className="shrink-0 rounded border border-white px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white hover:text-black"
                >
                    Shop Now
                </a>
            </div>
        </article>
    );
}
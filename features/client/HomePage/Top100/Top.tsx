
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";

import ProductCard from "./components/ProductCard";
import { useProductsByCategory } from "@/hooks/homePage/Products/useProductSlid2";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import ProductSkeleton from "@/shared/components/ProductSkeleton/ProductSkeleton";

export default function Top() {
    const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

    const {
        data,
        isPending,
        isError,
        error,
        refetch,
        isFetching
    } = useProductsByCategory("mens-shirts", 10);

    if (isPending) {
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

    if (isError) {
        return (
            <section className="mx-auto max-w-[1440px] px-4 py-10">
                <p className="text-sm text-red-500">
                    Error: {error.message}
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

    return (
        <section className="mx-auto mb-6 w-full max-w-[1350px] px-4 py-8 md:px-6 lg:px-0">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                    Top 100
                </h2>

                <div className="flex items-center gap-3">

                    {/* Previous Button */}
                    <button
                        type="button"
                        onClick={() => swiper?.slidePrev()}
                        aria-label="Previous products"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100"
                    >
                        <FaArrowLeftLong />
                    </button>

                    {/* Next Button */}
                    <button
                        type="button"
                        onClick={() => swiper?.slideNext()}
                        aria-label="Next products"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100"
                    >
                        <FaArrowRightLong />
                    </button>

                    <a
                        href="/products"
                        className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
                    >
                        View all
                    </a>
                </div>
            </div>

            {/* Slider - All Devices */}
            <Swiper
                onSwiper={setSwiper}
                spaceBetween={12}
                slidesPerView={2}
                loop
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    1205: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                }}
                className="!pb-3"
            >
                {data?.products.map((item) => (
                    <SwiperSlide key={item.id} className="h-auto">
                        <ProductCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}

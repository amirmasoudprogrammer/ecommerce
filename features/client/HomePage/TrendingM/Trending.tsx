"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Carditems from "./components/Carditems";
import trendingItems from "@/features/client/HomePage/TrendingM/data/Data";



export default function Trending() {
    return (
        <section className="mx-auto mb-6 w-full max-w-[1350px] px-4 py-8  md:px-6 lg:px-0">

            {/* Section Header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
                    Trending must-haves
                </h2>

                <a
                    href="/products"
                    className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
                >
                    View all
                </a>
            </div>

            {/* Mobile Slider */}
            <div className="tablet:hidden md:hidden">
                <Swiper
                    spaceBetween={16}
                    slidesPerView="auto"
                    className="!w-full !pb-3"
                >
                    {trendingItems.map((item) => (
                        <SwiperSlide key={item.id} className="!w-[438px]">
                            <Carditems item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Tablet Layout */}
            <div className="hidden flex-col items-center gap-4 tablet:flex laptop:hidden lg:hidden">
                {trendingItems.map((item) => (
                    <div key={item.id} className="w-full">
                        <Carditems item={item} />
                    </div>
                ))}
            </div>

            {/* Desktop Layout */}
            <div className="hidden grid-cols-3 gap-4 lg:grid">
                {trendingItems.map((item) => (
                    <Carditems key={item.id} item={item} />
                ))}
            </div>

        </section>
    );
}
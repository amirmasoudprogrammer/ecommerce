
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import trendingItems from "@/features/client/HomePage/TrendingM/data/Data";
import Carditems from "@/features/client/HomePage/TrendingM/components/Carditems";

export default function MobileTrendingSlider() {
    return (
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
    );
}

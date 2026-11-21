
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { useSlider } from "../hooks/useSlider";
import SliderPagination from "./SliderPagination";
import {slides} from "@/static-data/HomeBanSlider";
import Image from "next/image";

export default function SliderView() {
    const {
        activeIndex,
        handleSwiper,
        handleSlideChange,
        goToSlide,
    } = useSlider();

    return (
        <section className="relative w-full mx-auto  overflow-hidden mb-10">
            <div className="mx-auto w-full tablet:max-w-[991px] laptop:max-w-[1500px]">


            </div>
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                loop
                speed={1000}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                onSwiper={handleSwiper}
                onSlideChange={handleSlideChange}
                className="w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div>
                            <div className="w-full m-auto flex items-center justify-center mt-5">
                                <Image src={slide.image} sizes="(min-width: 1205px) 1500px, 991px" width={1500} height={1500} className="w-full h-[460px]" alt="image"/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderPagination
                total={slides.length}
                activeIndex={activeIndex}
                onChange={goToSlide}
            />
        </section>
    );
}

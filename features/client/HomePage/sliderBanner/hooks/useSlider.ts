
import { useCallback, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export function useSlider() {
    const swiperRef = useRef<SwiperType | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSwiper = useCallback((swiper: SwiperType) => {
        swiperRef.current = swiper;
        setActiveIndex(swiper.realIndex);
    }, []);

    const handleSlideChange = useCallback((swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
    }, []);

    const goToSlide = useCallback((index: number) => {
        swiperRef.current?.slideToLoop(index);
    }, []);

    return {
        activeIndex,
        handleSwiper,
        handleSlideChange,
        goToSlide,
    };
}

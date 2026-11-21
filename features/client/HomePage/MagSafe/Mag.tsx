
"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
    {
        title: "MAGSAFE",
        description:
            "Snap on a magnetic case, wallet, or both. And get faster wireless charging.",
        image: "/image/homePage/mag/magsafe-products.png",
    },
    {
        title: "FAST WIRELESS CHARGING",
        description:
            "Experience faster wireless charging with innovative MagSafe technology.",
        image: "/image/homePage/mag/magsafe-products.png",
    },
    {
        title: "MAGSAFE ACCESSORIES",
        description:
            "Discover magnetic accessories designed to make your everyday life easier.",
        image: "/image/homePage/mag/magsafe-products.png",
    },
];

export default function Mag() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slide = slides[currentSlide];

    return (
        <section className="mb-16 hidden w-full overflow-hidden bg-[#F7DDD0] md:block">
            <div className="relative mx-auto flex h-[180px] w-full max-w-[1440px] items-center lg:h-[221px]">

                {/* Previous Arrow */}
                <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-[5%] z-20 cursor-pointer text-3xl font-light text-[#4B4B4B] transition-transform hover:-translate-x-1"
                >
                    ‹
                </button>

                {/* Content */}
                <div
                    key={currentSlide}
                    className="relative z-10 ml-[12%] w-[48%] animate-[magFade_0.5s_ease] lg:ml-[13.3%] lg:w-[43%]"
                >
                    <h2 className="mb-3 text-lg font-semibold tracking-wide text-[#45616D] lg:text-[24px]">
                        {slide.title}
                    </h2>

                    <p className="max-w-[490px] text-sm leading-6 text-[#555555] lg:text-[20px] lg:leading-[28px]">
                        {slide.description}
                    </p>
                </div>

                {/* Products Image */}
                <div
                    key={`image-${currentSlide}`}
                    className="absolute bottom-0 right-[8%] h-full w-[38%] animate-[magFade_0.5s_ease] lg:right-[8%] lg:w-[32%]"
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        sizes="(max-width: 1023px) 38vw, 460px"
                        className="object-contain object-bottom"
                    />
                </div>

                {/* Next Arrow */}
                <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-[5%] z-20 cursor-pointer text-3xl font-light text-[#4B4B4B] transition-transform hover:translate-x-1"
                >
                    ›
                </button>

            </div>
        </section>
    );
}

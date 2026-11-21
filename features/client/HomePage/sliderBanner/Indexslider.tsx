"use client";

import dynamic from "next/dynamic";

const SliderView = dynamic(
    () => import("@/features/client/HomePage/sliderBanner/components/SliderView"),
    {
        ssr: false,
        loading: () => (
            <div
                className="hidden tablet:flex min-h-[400px] w-full items-center justify-center rounded-2xl bg-gray-100"
                aria-label="LoadingItem slider"
            >
        <span className="text-gray-500">
          LoadingItem...
        </span>
            </div>
        ),
    }
);

export default function IndexSlider() {
    return (
        <div className="hidden w-full tablet:block">
            <SliderView/>
        </div>
)}

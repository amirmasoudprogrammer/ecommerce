"use client";

import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import type {Swiper as SwiperInstance} from "swiper";
import {FaAngleRight} from "react-icons/fa6";

import "swiper/css";
import {FaArrowRightLong} from "react-icons/fa6";
import {FaArrowLeftLong} from "react-icons/fa6";

import {useHomeProducts} from "@/features/client/HomePage/Products/hooks/useProducts";
import ProductCard from "@/features/client/HomePage/Products/components/ProductCard";
import Pending from "@/features/client/HomePage/Products/Module/Pending";
import Errors from "@/features/client/HomePage/Products/Module/Errors";

export default function ProductsClient() {
    const swiperRef = useRef<SwiperInstance | null>(null);

    const {
        products,
        isPending,
        isError,
        error,
        refetch,
        isFetching,
    } = useHomeProducts();

    if (isPending) {return <Pending />;}

    if (isError) {return (<Errors error={error} refetch={refetch} isFetching={isFetching}/>);}

    return (
        <section className="mx-auto w-full min-w-0 max-w-[1440px] mb-6 px-4 py-10 md:px-6 lg:px-10">
            {/* Section Header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
                    Flash Sales
                </h2>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous products"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100"
                    >
                        <FaArrowLeftLong/>

                    </button>

                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next products"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100"
                    >
                        <FaArrowRightLong/>

                    </button>

                    <a
                        href="/products"
                        className="ml-2 text-xs flex items-center justify-between text-gray-500 transition hover:text-black"
                    >
                        <span className="mr-1">View all</span> <FaAngleRight/>

                    </a>
                </div>
            </div>


            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={16}
                slidesPerView={1.2}
                breakpoints={{
                    480: {
                        slidesPerView: 1.5,
                    },
                    744: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1205: {
                        slidesPerView: 4,
                    },
                }}
                className="!w-full !pb-3"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="h-auto">
                        <ProductCard product={product}/>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}

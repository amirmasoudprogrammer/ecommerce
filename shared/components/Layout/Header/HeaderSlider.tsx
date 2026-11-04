"use client"
import React, {useEffect, useState} from 'react';
import {headerData} from "@/static-data/headerData";
import Image from "next/image";

function HeaderSlider() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev: number) => (prev + 1) % headerData.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="hidden min-[1211px]:flex flex-1 h-full text-white  items-center pb-2 justify-center">
            <Image className="  mr-2" src={headerData[currentIndex].image}
                   alt={headerData[currentIndex].title} width={53} height={52}/>
            <div className="flex flex-col h-[62px] mt-5">
                <h3 className="text-[12px] font-normal">
                    {headerData[currentIndex].title}
                </h3>

                <p className="text-[12px] mt-0.5 w-[250px] text-gray-400 font-thin">
                    {headerData[currentIndex].description}
                </p>
            </div>
        </div>
    );
}

export default HeaderSlider;
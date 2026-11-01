"use client"
import React, {useState} from 'react';
import {headerMenu} from "@/static-data/headerData";
import Link from "next/link";

function HeaderMegaMenu(props) {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);



    return (
        <div className="container mt-5" onMouseLeave={() => setActiveMenu(null)}>
            <ul className="hidden md:flex  w-full justify-evenly ml-2">
                {headerMenu.map((menu, key) => (
                    <li className="relative pr-[2px]" key={key} onMouseEnter={() => setActiveMenu(menu.id)}><Link href="" className="text-sm text-gray-500 hover:text-orange-500 hover:font-medium">{menu.title}</Link>
                        {activeMenu === menu.id && menu.moreTitle && (
                            <div className={`absolute ${
                                    menu.id === 8 ? " -right-10" : "right-0 left-0"
                                } top-full z-50 pt-4 mt-2
        h-[388px] md:w-[600px] lg:w-[1121px]
        rounded-2xl border border-gray-100
        bg-white shadow-[0_15px_50px_rgba(0,0,0,0.12)]
        animate-mega-menu`}>

                            </div>
                        )}

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderMegaMenu;
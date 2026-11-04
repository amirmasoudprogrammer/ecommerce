"use client"
import React, {useState} from 'react';
import {headerMenu} from "@/static-data/headerData";
import Link from "next/link";
import MegaMenu from "@/shared/components/Layout/Header/MegaMenu";

function HeaderMegaMenu() {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);


    return (
        <div className="container mt-5" onMouseLeave={() => setActiveMenu(null)}>
            <ul className="hidden md:flex  w-full justify-evenly ml-2">
                {headerMenu.map((menu, key) => (
                    <li className="relative pr-[2px]" key={key} onMouseEnter={() => setActiveMenu(menu.id)}><Link
                        href="@/shared/components/Layout/Header/HeaderMegaMenu"
                        className="text-sm text-gray-500 hover:text-orange-500 hover:font-medium">{menu.title}</Link>
                        {activeMenu === menu.id && menu.moreTitle && (
                            <div
                                className={`absolute ${menu.id === 8 ? "right-0 left-auto translate-x-0" : "left-1/2 -translate-x-1/2"} top-full z-50 pt-3 w-[min(500px,calc(100vw-32px))] sm:w-[min(620px,calc(100vw-40px))] lg:w-[min(720px,calc(100vw-48px))] 2xl:w-[min(900px,calc(100vw-64px))] animate-mega-menu`}>
                                <div
                                    className="w-full min-h-[300px] max-h-[calc(100dvh-100px)] overflow-y-auto overflow-x-hidden rounded-xl border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.12)]"
                                >
                                    <MegaMenu
                                        menuItems={menu.moreTitle}
                                        idH={menu.id}
                                    />
                                </div>
                            </div>
                        )}


                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderMegaMenu;
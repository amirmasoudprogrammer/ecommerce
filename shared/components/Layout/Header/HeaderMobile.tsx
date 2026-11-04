"use client"
import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import {LuShoppingBag} from "react-icons/lu";
import {FiChevronDown, FiSearch, FiX} from "react-icons/fi";
import {menuItems} from "@/static-data/headerData";

function HeaderMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <>

            <div className="w-full px-4 tablet:hidden">


                <div className="flex w-full items-center justify-between gap-3">

                    {/* Hamburger */}
                    <div onClick={() => setIsMenuOpen(true)} className="flex shrink-0 cursor-pointer z-20  relative items-center">
                        <GiHamburgerMenu size={22}/>
                    </div>

                    {/* Logo */}
                    <div className="flex min-w-0 flex-1 justify-center">
                        <Link href="/">
                            <Image
                                src="/image/header/logo/Luminae.svg"
                                alt="Luminae Logo"
                                width={133}
                                height={26}
                                priority
                                className="h-auto w-[clamp(100px,34vw,133px)]"
                            />
                        </Link>
                    </div>

                    {/* Shopping Bag */}
                    <div className="flex shrink-0 cursor-pointer items-center">
                        <LuShoppingBag size={21}/>

                        <span
                            className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-xs">
                        3
                    </span>
                    </div>

                </div>


                <div className="mt-8 w-full">

                    <div className="flex h-10 w-full items-center overflow-hidden rounded border border-gray-300">

                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Search Products..."
                            className="h-full min-w-0 flex-1 px-3 text-xs text-black outline-none placeholder:text-gray-400"
                        />

                        {/* Category */}
                        <div className="flex h-full shrink-0 items-center  border-gray-200 px-1">

                            <select
                                defaultValue="all"
                                aria-label="Product category"
                                className="h-auto w-[90px]  cursor-pointer appearance-none bg-transparent text-[10px] text-gray-600 outline-none"
                            >
                                <option value="all">All categories</option>
                                <option value="woman">Woman</option>
                                <option value="male">Male</option>
                                <option value="mother-child">Mother-Child</option>
                                <option value="home">Home & Furniture</option>
                            </select>

                            <FiChevronDown
                                size={15}
                                className="shrink-0 text-gray-500"
                            />

                        </div>

                        {/* Search Button */}
                        <button
                            type="button"
                            aria-label="Search"
                            className="flex h-full w-10 shrink-0 items-center justify-center border-l border-gray-200"
                        >
                            <FiSearch size={19} className="text-black"/>
                        </button>

                    </div>

                </div>

            </div>


            {isMenuOpen && (
                <div className="fixed inset-0 z-[9999] h-dvh w-full overflow-y-auto bg-white md:hidden">

                    {/* Menu Header */}
                    <div className="flex h-[70px] items-center justify-between border-b border-gray-100 px-5">

                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Image
                                src="/image/header/logo/Luminae.svg"
                                alt="Luminae Logo"
                                width={133}
                                height={26}
                            />
                        </Link>

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
                        >
                            <FiX size={27} />
                        </button>

                    </div>

                    {/* Menu Content */}
                    <div className="px-5 py-6">

                        <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-400">
                            Navigation
                        </p>

                        <nav className="flex flex-col">

                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-between border-b border-gray-100 py-5 text-base font-medium text-gray-800 transition-colors hover:text-blue-600"
                                >
                                    {item.title}

                                    <FiChevronDown
                                        className="-rotate-90 text-gray-400"
                                        size={17}
                                    />
                                </Link>
                            ))}

                        </nav>

                        {/* Menu Footer */}
                        <div className="mt-10 flex flex-col gap-4">

                            <Link
                                href="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full rounded bg-gray-900 py-3 text-center text-sm text-white"
                            >
                                Login / Register
                            </Link>

                            <p className="text-center text-xs text-gray-400">
                                Welcome to Luminae Store
                            </p>

                        </div>

                    </div>

                </div>
            )}


        </>

    );
}

export default HeaderMobile;

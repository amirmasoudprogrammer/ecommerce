import Image from "next/image";
import Link from "next/link";
import {FiChevronDown, FiSearch} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {BiLogoFacebook} from "react-icons/bi";
import {FaTelegramPlane} from "react-icons/fa";
import BorderItems from "@/shared/components/Layout/Header/BorderItems";
import HeaderSlider from "@/shared/components/Layout/Header/HeaderSlider";
import {FaRegUser} from "react-icons/fa";
import {MdFavoriteBorder} from "react-icons/md";
import {LuShoppingBag} from "react-icons/lu";
import HeaderMegaMenu from "@/shared/components/Layout/Header/HeaderMegaMenu";
import HeaderMobile from "@/shared/components/Layout/Header/HeaderMobile";


function Header() {
    return (
        <header className="relative w-full flex flex-col">
            {/*Header item one*/}
            <div className="container w-full h-[100px]  mx-auto hidden tablet:mt-2 md:mt-2 xl:mt-auto  max-w-7xl tablet:grid tablet:items-center md:grid xl:flex  items-center xl:justify-between">
                <div className="flex items-center tablet:justify-evenly md:justify-evenly xl:justify-center ">
                    <Link className="md:mr-10 xl:mr-auto" href="/PROGRMMING/typeScript/ecommerce/public">
                        <Image
                            src="/image/header/logo/Logo.svg"
                            alt="logo"
                            width={128}
                            height={33}
                        />
                    </Link>
                    <div className="flex justify-center items-center w-[345px] h-[40px] border border-2 ml-8 rounded ">
                        <input type="text" placeholder="Search Producs.."
                               className="mr-5 text-sm w-[152px] h-[20px] text-black order-none outline-none"/>
                        <div className="flex h-full w-[120px] shrink-0 items-center  ">
                            <select
                                defaultValue="all"
                                aria-label="Product category"
                                className="h-full w-[80px]  cursor-pointer appearance-none bg-transparent p-1  text-xs text-gray-600 outline-none"
                            >
                                <option value="all">All categories</option>
                                <option value="electronics">Woman</option>
                                <option value="fashion">Male</option>
                                <option value="home">Mother-Child</option>
                                <option value="sports">Home & Furniture</option>
                            </select>
                            <FiChevronDown size={19} className=" shrink-0 text-gray-500"/>
                        </div>
                        <div className="border-l-2 pl-2 cursor-pointer">
                            <FiSearch size={20} className="text-black"/>

                        </div>
                    </div>
                </div>
                <div className="flex items-center  md:justify-evenly xl:justify-between md:w-full md:mt-5 xl:mt-auto xl:w-[700px]  m-auto">
                    <nav className="w-[420px] h-[20px] md:ml-0 xl:ml-10">
                        <ul className="flex items-center justify-between">
                            <li><Link
                                className="md:text-md xl:text-sm text-secondary hover:text-gray-700 hover:font-medium"
                                href="/PROGRMMING/typeScript/ecommerce/public">About us</Link></li>
                            <li><Link
                                className="md:text-md xl:text-sm text-secondary hover:text-gray-700 hover:font-medium"
                                href="/PROGRMMING/typeScript/ecommerce/public">Blog</Link></li>
                            <li><Link
                                className="md:text-md xl:text-sm text-secondary hover:text-gray-700 hover:font-medium"
                                href="/PROGRMMING/typeScript/ecommerce/public">Contact us</Link></li>
                            <li><Link
                                className="md:text-md xl:text-sm text-secondary hover:text-gray-700 hover:font-medium"
                                href="/PROGRMMING/typeScript/ecommerce/public">Help & support</Link></li>
                        </ul>
                    </nav>
                    <div className="flex text-gray-400 items-center justify-end w-[127.5px] h-[24px]">
                        <Link href="/PROGRMMING/typeScript/ecommerce/public"
                              className="md:text-2xl xl:text-lg font-bold mr-2 hover:font-medium hover:text-gray-700">
                            <FiInstagram/></Link>
                        <Link href="/PROGRMMING/typeScript/ecommerce/public"
                              className="md:text-2xl xl:text-lg font-bold mr-2 hover:font-medium hover:text-gray-700"><BiLogoFacebook/></Link>
                        <Link href="/PROGRMMING/typeScript/ecommerce/public"
                              className="md:text-2xl xl:text-lg font-bold hover:font-medium hover:text-gray-700"><FaTelegramPlane/></Link>

                    </div>
                </div>
            </div>
            {/*Header item one*/}


            {/* Header Bottom */}
            <div className="hidden md:block w-full bg-gray-800">
                <div className="container  mx-auto max-w-7xl flex items-center h-[78px] md:justify-center xl:justify-between ">

                    {/* Section One */}
                    <div className="xl:flex-1 tablet:w-[390px]   md:w-[400px] h-full text-white flex items-center justify-between xl:justify-start">
                        <div className="flex items-center tablet:ml-10 md:ml-10 md:mr-2 xl:ml-0 xl:justify-start">
                            <Image src="/image/header/icon/Vector.svg" alt="Categories" width={24} height={24}/>
                            <span className="font-bold tablet:text-sm md:text-sm lg:text-xl ml-2"> Categories</span>
                        </div>
                        <div className="flex items-center ml-10">
                            <div className="relative flex items-center">
                                <select
                                    defaultValue="USD"
                                    aria-label="Currency"
                                    className="lg:w-[60px] h-[40px] cursor-pointer rounded bg-gray-800   text-sm text-white outline-none"
                                >
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                </select>
                            </div>
                            <div className="relative flex items-center ml-5">
                                <select
                                    defaultValue="English"
                                    aria-label="English"
                                    className="w-[70px] h-[40px] cursor-pointer rounded bg-gray-800   text-sm text-white outline-none"
                                >
                                    <option value="en">English</option>
                                    <option value="tr">Türkçe</option>
                                    <option value="zh">中文</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Section One */}

                    <BorderItems/>

                    {/* Section Two */}
                    <HeaderSlider/>
                    {/* Section Two */}

                    <BorderItems/>

                    {/* Section Three */}
                    <div className="xl:flex-1 relative  w-[340px] z-10 tablet:ml-16 md:ml-16  xl:mr-0 h-full text-white flex items-center justify-end">
                        <Link href="/ssss" className="flex items-center md:mr-8 xl:mr-10">
                            <FaRegUser/>
                            <span className="md:text-[12px] xl:text-sm text-gray-300 ml-2">Sign in</span>
                        </Link>
                        <Link href="/ssss" className="flex items-center mr-10">
                            <MdFavoriteBorder/>

                            <span className="text-sm text-gray-300 ml-2">Favorites</span>
                        </Link>
                        <div className="flex items-center cursor-pointer ">
                            <LuShoppingBag/>
                            <span className=" text-sm text-gray-300 ml-2">Card</span>
                            <span
                                className="w-[24px] text-[14px] flex items-center justify-center h-[23px] bg-green-400 m-auto text-center ml-2 rounded-full">3</span>
                        </div>
                    </div>
                    {/* Section Three */}

                </div>
            </div>
            {/* Header Bottom */}


            {/* Header End */}
            <HeaderMegaMenu/>
            {/* Header End */}


            {/* Header Mobile */}

            <HeaderMobile/>

            {/* Header Mobile */}


        </header>
    );
}

export default Header;

import Image from "next/image";
import Link from "next/link";
import {FiChevronDown, FiSearch} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {BiLogoFacebook} from "react-icons/bi";
import {FaTelegramPlane} from "react-icons/fa";

function Header() {
    return (
        <header className="h-24 w-full">
            <div className="container mx-auto hidden md:mt-2 xl:mt-auto  max-w-7xl md:grid xl:flex h-full items-center xl:justify-between">
                <div className="flex items-center md:justify-evenly xl:justify-center ">
                    <Link className="md:mr-10 xl:mr-auto" href="/">
                        <Image
                            src="/image/header/logo/Logo.svg"
                            alt="logo"
                            width={128}
                            height={33}
                        />
                    </Link>
                    <div className="flex justify-center items-center w-[345px] h-[40px] border border-2 ml-8 rounded ">
                        <input type="text" placeholder="Search Producs.."
                               className="mr-5 text-sm w-[152px] h-[20px] order-none outline-none"/>
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
                            <FiSearch size={20}/>

                        </div>
                    </div>
                </div>
                <div className="flex items-center - md:justify-evenly xl:justify-between md:w-full md:mt-5 xl:mt-auto xl:w-[700px]  m-auto">
                    <nav className="w-[420px] h-[20px] ">
                        <ul className="flex items-center justify-between">
                            <li><Link className="md:text-md xl:text-sm text-secondary hover:text-gray-700 hover:font-medium" href="/">About us</Link></li>
                            <li><Link className="md:text-md xl:text-sm text-secondary hover:text-gray-700 hover:font-medium" href="/">Blog</Link></li>
                            <li><Link className="md:text-md xl:text-sm text-secondary hover:text-gray-700 hover:font-medium" href="/">Contact us</Link></li>
                            <li><Link className="md:text-md xl:text-sm text-secondary hover:text-gray-700 hover:font-medium" href="/">Help & support</Link></li>
                        </ul>
                    </nav>
                    <div className="flex text-gray-400 items-center justify-end  w-[127.5px] h-[24px]">
                        <Link href="/" className="md:text-2xl xl:text-lg font-bold mr-2 hover:font-medium hover:text-gray-700"> <FiInstagram/></Link>
                        <Link href="/" className="md:text-2xl xl:text-lg font-bold mr-2 hover:font-medium hover:text-gray-700"><BiLogoFacebook/></Link>
                        <Link href="/" className="md:text-2xl xl:text-lg font-bold hover:font-medium hover:text-gray-700"><FaTelegramPlane/></Link>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;


import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[calc(100vh-96px)] flex-1 items-center justify-center bg-white px-5 py-16">

            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">

                {/* Illustration */}
                <div className="flex w-full justify-center">
                    <Image
                        src="/image/notFound/Confused Character Behind 404 Error.png"
                        alt="404 Page Not Found"
                        width={650}
                        height={500}
                        priority
                        className="h-auto w-full max-w-[600px] object-contain"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">

                    <h1 className="text-[110px] font-extrabold leading-none tracking-tight text-[#0B2047] sm:text-[140px]">
                        404
                    </h1>

                    <h2 className="mt-5 text-3xl font-bold text-[#0B2047] sm:text-4xl">
                        Page Not Found!
                    </h2>

                    <p className="mt-5 max-w-[420px] text-base leading-8 text-[#53678C] sm:text-lg">
                        Oops! The page you are looking for might
                        have been removed, had its name changed,
                        or is temporarily unavailable.
                    </p>

                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF7014] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E95D00] hover:shadow-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>

                        Go Back Home
                    </Link>

                </div>
            </div>
        </main>
    );
}

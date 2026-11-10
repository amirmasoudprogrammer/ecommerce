import React from 'react';
import {footerLinks} from "@/static-data/footerData";



function Footer() {
    return (
        <footer className="w-full bg-[#d1e3eb] mt-5">

            {/* Newsletter */}
            <div className="hidden relative md:flex justify-center mb-5">
                <div className="absolute -top-11 z-10 flex w-[90%] max-w-[360px] flex-col items-center rounded-md bg-[#779caf] px-6 py-4 text-center text-white shadow-sm">
                    <h2 className="text-xl font-semibold">
                        Luminae Store
                    </h2>

                    <p className="mt-2 text-[10px]">
                        Register your email to not miss the last minutes offers + Free delivery
                    </p>

                    <form className="mt-3 flex w-full items-center rounded bg-white px-2 py-1">
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="newsletter-email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="min-w-0 flex-1 text-xs text-gray-700 outline-none"
                        />

                        <button
                            type="submit"
                            className="text-xs text-gray-600"
                            aria-label="Subscribe"
                        >
                            ➤
                        </button>
                    </form>
                </div>
            </div>

            {/* Main Footer */}
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-8 px-6 pb-8 pt-20 sm:grid-cols-4">

                {footerLinks.map((item) => (
                    <div key={item.title}>
                        <h3 className="mb-4 text-xs font-semibold text-gray-900">
                            {item.title}
                        </h3>

                        <ul className="space-y-3">
                            {item.links.map((link) => (
                                <li key={link}>
                                    <a
                                        href="@/shared/components/Layout/footer/Footer#"
                                        className="text-[11px] text-gray-600 transition-colors hover:text-black"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            {/* Payment Methods & Language */}
            <div className="border-t border-white/70 bg-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center md:justify-between gap-4 px-6 py-4">

                    <div className="flex items-center gap-4 text-sm font-bold text-gray-600">
                        <span>VISA</span>
                        <span>●●</span>
                        <span className="text-xs">PayPal</span>
                    </div>

                    <select
                        id="footer-language"
                        name="language"
                        defaultValue="English"
                        aria-label="Select language"
                        className="hidden md:block bg-transparent text-xs text-gray-700 outline-none">
                        <option value="English">English</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Chinese">Chinese</option>
                    </select>

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="hidden tablet:block md:block border-t border-gray-300 bg-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">

                    <p className="text-[10px] text-gray-700">
                        165-179 Forster Road City of Monash, Melbourne, Australia
                    </p>

                    <p className="text-[10px] text-gray-500">
                        ©2023 Copyright in reserved for luminae shop
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-700">
                        <a href="" aria-label="Instagram">◎</a>
                        <a href="" aria-label="Facebook">f</a>
                        <a href="" aria-label="Telegram">➤</a>
                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer;

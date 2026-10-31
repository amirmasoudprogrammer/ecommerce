
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        screens: {
            sm: "640px",
            tablet: "744px",
            md: "768px",
            Laptops:"1205px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },

        extend: {
            colors: {
                secondary: "#64748b",
            },
        },
    },

    plugins: [],
};

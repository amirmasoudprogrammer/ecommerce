/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        // Container Configuration
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.5rem",
                lg: "2rem",
            },
        },

        // Custom Breakpoints & Colors
        extend: {
            screens: {
                tablet: "744px",
                laptop: "1205px",
                "2xl": "1440px",
            },

            colors: {
                secondary: "#64748b",
            },
        },
    },

    plugins: [],
};
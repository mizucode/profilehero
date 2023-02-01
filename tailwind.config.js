/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
            },
            colors: {
                primari: "#0081C9",
                sec: "#5BC0F8",
                sec2: "#86E5FF",
                tdark: "#9ca3af",
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E4D53',
                secondary: '#EFB32F',
                'light-bg': '#FFFFFF',
                'dark-bg':  '#0A0A0A',
            },
            fontFamily: {
                sans: ['Inter','sans-serif'],
                body: ['Merriweather','serif'],
            },
        },
    },
    plugins: [],
};

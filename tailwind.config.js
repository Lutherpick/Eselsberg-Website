/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // we'll toggle via class
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E4D53',    // deep teal
                secondary: '#EFB32F',  // sunrise gold
                'light-bg': '#FFFFFF', // always white background
                'dark-bg': '#FFFFFF',  // white even in “dark” mode
            },
            fontFamily: {
                body: ['Merriweather', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

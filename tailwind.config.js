/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E4D53',       // deep teal accent
                secondary: '#EFB32F',     // sunrise gold
                'light-bg': '#F9FAFB',
                'dark-bg': '#0F172A',
            },
            fontFamily: {
                body: ['Merriweather', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
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
                accent: 'rgba(0,0,0,0.99)',
                'accent-light': 'rgba(255,255,255,0.62)',
            },
        },
    },
    plugins: [],
};

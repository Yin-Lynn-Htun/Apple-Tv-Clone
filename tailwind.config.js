/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                link: '#06c',
                'gray-text': '#a1a1a6',
            },
            backgroundImage: {
                movie1: "url('https://is4-ssl.mzstatic.com/image/thumb/q15eqXAa_XH-L0KIDkPBJA/420x236.jpg')",
            },
        },
    },
    plugins: [],
}

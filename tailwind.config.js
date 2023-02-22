/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                heading: [
                    'Helvetica Neue',

                    // 'HelveticaNeue-Light',
                    // 'Helvetica Neue Light',
                    // 'Helvetica',
                    // 'Arial',
                    // 'Lucida Grande',
                    // 'sans-serif',
                ],
                body: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

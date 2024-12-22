/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'txt-primary': '#000',
                'bg-primary': '#e8e8e8',
                'bg-secondary': '#fff',
                'bg-warning': '#f0ad4e',
                'bg-danger': '#d33',
                'bd-primary': '#8d8d8d',
                'bd-secondary': '#000',
                'btn-primary': '#3b83f6'
            }
        },

    },
    plugins: [],
}


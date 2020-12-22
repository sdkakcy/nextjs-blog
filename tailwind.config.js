module.exports = {
    purge: [
        './pages/**/*.js',
        './components/**/*.js'
    ],
    darkMode: 'media', // 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'accent-1': '#333',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
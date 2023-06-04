/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'palleteO0': '#fbe5c9',
        'palleteO1': '#F2A74B',
        'palleteO2': '#F27C38',
        'palleteO3': '#F27141',
        'palleteG1': '#252640',
        'palleteG2': '#0D0D0D',
      },
      spacing: {
        '104': '32rem',
        '128': '38rem',
      }
    },
  },
  plugins: [],
}


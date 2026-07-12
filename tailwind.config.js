/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0F9D58',
          blue: '#1E88E5',
          yellow: '#F9A825',
          slate: '#0F172A'
        }
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 157, 88, 0.12)'
      }
    }
  },
  plugins: []
};

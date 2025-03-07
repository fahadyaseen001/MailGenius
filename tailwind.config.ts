/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      extend: {
        maxWidth: {
          'container': '1280px'
        },
        keyframes: {
          marquee: {
            to: { transform: "translateX(-50%)" },
          },
        },
        animation: {
          marquee: "marquee var(--duration, 30s) linear infinite",
          'marquee-reverse': "marquee var(--duration, 30s) linear infinite reverse",
        },
      },
    },
    plugins: [],
  }
  
  
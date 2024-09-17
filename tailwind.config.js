/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        rg: "400",
        md: "500",
        smb: "600",
        bold: "700",
        extra: "800",
      },
      zIndex: {
        1: "1",
      },
      fontFamily: {
        sans: [
          '"Inter", sans-serif',
        ],
      },
      screens: {
        'smb': "468px",
        'md': '632px',
        'lg': '1024px',
        xl: { max: "1200px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }

        normal: { max: "600px" },
        // => @media (max-width: 767px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        smb: { max: "468px" },
        // => @media (max-width: 400px) { ... }
      },
      minWidth: {
        lg: "1200px",
        xl: "1500px",
        "2xl": "2200px",
        "3xl": "2800px",
        "4xl": "3600px",
      },
      maxWidth: {
        'smb': "468px",
        'normal': "600px",
        'md': '767px',
        'lg': '1024px'
      },
    },
  },
  plugins: [],
}


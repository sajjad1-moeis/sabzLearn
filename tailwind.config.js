const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
   content: ["./index.html", "./src/**/*.{vue,js,jsx,tsx}"],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: "16px",
         },
      },
      screens: {
         sm: "640px",
         // => @media (min-width: 640px) { ... }

         md: "799px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1260px",
         // => @media (min-width: 1280px) { ... }
         // xxl: "1400px",
      },

      extend: {
         colors: {
            slate: {
               50: "#f8fafc",
               100: "#f1f5f9",
               200: "#e2e8f0",
               300: "#cbd5e1",
               400: "#94a3b8",
               500: "#64748b",
               600: "#475569",
               700: "#334155",
               800: "#1e293b",
               900: "#0f172a",
               950: "#020617",
            },

            success: "#22c55e",
            darker: "#242a38",
            "dark-light": "#64748b",
            "dark-semi": "#242A38",
            "dark-medium": "#333c4c",
            "dark-xs": "#32334d",
            "dark-sm": "#28293D",
            "gray-1000": "#111827",
            warning: "#F59E0B",
            danger: "#EF4444",
            successDark: "#009979",
            brown: "#C19277",
            grayAdmin: "#242a38",
         },
         fontFamily: {
            danaBold: ["danaBold"],
            dana: ["dana"],
         },
      },
   },
   plugins: [],
});

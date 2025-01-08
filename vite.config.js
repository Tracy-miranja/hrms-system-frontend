import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// TailwindCSS Add Variables for Colors Plugin
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default defineConfig({
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [
    react(),
    // TailwindCSS Configuration
    {
      name: "tailwindcss-custom",
      config: {
        theme: {
          extend: {
            fontFamily: {
              sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
              ...colors,
            },
          },
        },
        plugins: [addVariablesForColors],
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

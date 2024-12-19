// eslint.config.js
export default [
  {
    ignores: ["node_modules/**", "dist/**"], // Ignore these folders
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      prettier: require("eslint-plugin-prettier"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      tailwindcss: require("eslint-plugin-tailwindcss"),
      "jsx-a11y": require("eslint-plugin-jsx-a11y"),
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off", // React 17+ doesn't require `import React`
      "react/prop-types": "off", // Disable PropTypes validation
      "jsx-a11y/no-onchange": "warn", // Accessibility rule
      "tailwindcss/no-custom-classname": "off", // Allow custom Tailwind classes
    },
  },
];

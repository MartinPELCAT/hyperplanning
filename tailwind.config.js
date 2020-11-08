module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    mode: "all",
    content: ["./pages/**/*.html", "./pages/**/*.tsx"],
  },
  theme: {
    extend: {
      backgroundColor: {
        "dark-blue": "#0e133b",
        "light-gray": "#f7f8fd",
        "active-icon": "#b052b8",
      },
      inset: {
        "-4": "-1rem",
      },
    },
  },
  variants: {},
  plugins: [],
};

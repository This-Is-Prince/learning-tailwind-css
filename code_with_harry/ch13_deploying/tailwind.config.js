module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xsm: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: {
        "10xl": ["10rem", { lineHeight: "2" }],
      },
      spacing: {
        13: "3.25rem",
      },
    },
  },
  plugins: [],
};

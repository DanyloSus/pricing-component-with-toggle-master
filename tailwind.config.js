const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "linear-gradient-from": "hsl(236, 72%, 79%)",
        "linear-gradient-to": "hsl(237, 63%, 64%)",

        "very-light-grayish-blue": "hsl(240, 78%, 98%)",
        "light-grayish-blue": "hsl(234, 14%, 74%)",
        "grayish-blue": "hsl(233, 13%, 49%)",
        "dark-grayish-blue": "hsl(232, 13%, 33%)",
      },
    },
  },
  plugins: [],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#fbf8ff",
        primaryColor: "#432779",
        secondaryColor: "#DEFFFF",
        lightBlueText: "#1E1A3A",
        lightGrayPrimary: "#F5F3F5",
        dipBlue: "#1E1A3A",
        primaryColorLight: "#1e1a3a8c",
        skyBlue: "#52BFEE",
        lightPurple: "#F0ECF9",
        lightGraySecondary: "#F5F3F5",
        galleryBackgroundColor: "#E3F5FC",
      },

      animation: {
        spin: "spin 1s linear",
        bounce: "bounce 1s linear",
      },
    },
  },
  plugins: [],
};

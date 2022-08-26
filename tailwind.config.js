/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#432779",
        secondaryColor: "#DEFFFF",
        primaryColorLight: "rgba(30, 26, 58, 0.55)",
        studentSectionColor: "#52BFEE",
        communityColor: "#1E1A3A",
        whyColor: "#F5F3F5",
        subscriptionSectionColor: '#1E1A3A'
      },
    },

    fontFamily: {
      'body': ['Montserrat'],
      'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)',
        'director-gradient':'linear-gradient(147deg, #c3cbdc 0%, #edf1f4 15%)',
        'performace-border':'0.5px solid rgb(159 159 159 / 57%)',
      },
      borderColor: {
        'performace-border': 'rgb(159 159 159 / 57%)', // Ensure it's also added to borderColor
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   addUtilities({
    //     '.no-scrollbar': {
    //       /* Hide scrollbar for IE, Edge and Firefox */
    //       '-ms-overflow-style': 'none', /* IE and Edge */
    //       'scrollbar-width': 'none', /* Firefox */
    //       /* Hide scrollbar for Chrome, Safari and Opera */
    //       '&::-webkit-scrollbar': {
    //         display: 'none',
    //       },
    //     },
    //   });
    // },
    require('tailwind-scrollbar'),
  ],
}


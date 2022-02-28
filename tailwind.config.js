module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'transparent': 'transparent',
      'red': "#C00D0D",
      "light-red": "#FB7575",
      "dark-red": "#600707",
      'burgundy': "#8B0000",
      'green': "#30DA0C",
      "light-green": "#ACFB76",
      "dark-green": "#137604",
      "leaf-green": "#004846",
      "light-leaf-green": "#008477",
      'blue': "#2D77F9",
      "dark-blue": "#0530E5",
      'turquoise': "#A9E9F7",
      "dark-turquoise": "#1DC6EC",
      'sky': "#A0F2FA",
      'white': "#FFFFFF",
      'grey': "#B0B0B0",
      'yellow': "#FFFF00",
      "light-yellow": "#FBFB8A",
      "dark-yellow": "#FFAB00",
      'sun': "#FA9A05",
      "dark-sun": "#FF9300",
      'orange': "#FF9B5B",
      "dark-orange": "#F66C1F",
      'charcoal': "#494949",
      'black': "#222222",
      "dark-black": "#111111",
    },
    extend: {
      screens: {
        'mdm': {'max': '767px'},
      },
      fontFamily: {
        'sans': ['digital_dream', 'Helvetica', 'Arial', 'sans-serif']
      },
      backgroundImage :{
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'red-button': 'inset 0 0 10px 3px rgba(167,0,0,1)',
        'blue-button' : 'inset 0 0 10px 3px rgba(0,23,204,1)',
        'green-button': 'inset 0 0 10px 3px rgba(0,67,0,1)',
        'orange-button': 'inset 0 0 5px 3px rgba(170,32,0,1)',
        'square-button': 'inset 0 0 20px #004846',
        'input': 'inset 0 0 7px #004846',
        'info-screen': 'inset 0 0 20px #137604',
        'key': 'inset 0 0 5px 2px #002BAD',
        'leaf-button': 'inset 0 0 5px 2px #004846',
        'yellow-button': 'inset 0 0 5px 2px #FF9B5B',
        'green-button-right': 'inset 0 0 10px 3px rgba(0,167,0,1)',
        'orange-button-right': 'inset 0 0 5px 3px rgba(170,32,0,1)',
        'left-button': 'inset 0 0 10px 3px rgba(74,74,74,1)',
        'last-button': 'inset 0 0 5px 2px rgba(204,120,0,1)',
        'square-bottom-button': 'inset 0 0 20px rgba(192,13,13,1)'
      }
    },
  },
  plugins: [],
};

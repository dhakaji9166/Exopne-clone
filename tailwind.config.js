module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'TWK_Lausanne': ['TWK_Lausanne', 'sans-serif'],
        'times': ['"Times New Roman"', 'serif'],
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)')",
      })
    },
  },
  plugins: [],
}

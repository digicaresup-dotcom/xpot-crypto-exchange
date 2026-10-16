module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05090a',
        panel: '#0c1614',
        panelAlt: '#10201d',
        green: '#22e08a',
        greenDeep: '#159960',
        text: '#e8f5ef',
        muted: '#8aa39a',
        red: '#ff5a6e',
        blue: '#6ab7ff'
      },
      boxShadow: {
        glow: '0 8px 24px rgba(34,224,138,.35)'
      }
    }
  },
  plugins: [],
}

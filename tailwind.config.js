/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nobre: {
          black: '#0A0908',      // Preto absoluto do fundo da logo
          espresso: '#543D30',   // Marrom escuro da paleta
          taupe: '#9E7E69',      // Marrom rosado / cobre suave da paleta e logo
          gold: '#C4A459',       // Dourado elegante dos detalhes
          ice: '#EAE8E5',        // Cinza gelo / off-white da paleta
          cream: '#F7F4F0',      // Fundo claro quente harmônico
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores originales (Mantener para no romper secciones previas)
        'madera-clara': '#DEB887',
        'madera-media': '#8B5A2B',
        'madera-oscura': '#5D3A1A',
        'acento-verde': '#2E7D32',
        'acento-verde-claro': '#81C784',
        'fondo-neutro': '#FDFCFB',
        'texto-principal': '#1A1A1A',
        
        // Colores nuevos y actualizados para la versión premium
        'oro-premium': '#C5A059',
        'nogal': '#3D2B1F', // Tono nogal elegante para los textos y fondos oscuros
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['"Inter"', 'sans-serif'],
        'titulos': ['"Playfair Display"', 'serif'],
        'texto': ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'wider-premium': '0.3em', // Añadido para los subtítulos uppercase
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-up': { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        'scale-up': { '0%': { transform: 'scale(0.95)', opacity: '0.5' }, '100%': { transform: 'scale(1)', opacity: '1' } }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-up': 'scale-up 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
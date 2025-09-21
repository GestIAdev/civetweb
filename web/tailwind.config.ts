import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CORTE DIAGONAL - Paleta optimizada para Split asimétrico
        'civet-green': '#32CD32',        // Verde principal - Lado B
        'civet-rich': '#2FBF2F',         // Verde más intenso para fondos
        'civet-dark': '#1F7A1F',         // Verde muy oscuro - mejor contraste
        'civet-lime': '#39FF14',         // Verde lima brillante - acentos
        
        // Sistema de negros y grises optimizado
        'corpo-black': '#000000',        // Negro puro - máximo contraste
        'corpo-dark': '#1A1A1A',         // Negro suave para elementos
        'corpo-gray': '#2F2F2F',         // Gris oscuro para texto secundario
        'corpo-medium': '#666666',       // Gris medio para elementos sutiles
        'corpo-light': '#F8F8F8',        // Gris muy claro
        'corpo-border': '#E0E0E0',       // Bordes claros
        
        // Colores de transición para Split
        'split-overlay': 'rgba(50, 205, 50, 0.15)',   // Overlay verde suave
        'split-blur': 'rgba(50, 205, 50, 0.3)',       // Efecto blur
        'split-gradient': 'rgba(0, 0, 0, 0.4)',       // Gradiente de foto
        
        'white-clean': '#FFFFFF',        // Blanco puro
      },
      fontFamily: {
        'corpo': ['IBM Plex Sans', 'Inter', 'system-ui', 'sans-serif'],
        'accent': ['IBM Plex Mono', 'Monaco', 'Consolas', 'monospace'], // Solo para acentos
        'display': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-green': 'pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'soft-glow': 'soft-glow 3s ease-in-out infinite alternate',
        'paw-gentle': 'paw-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-green': {
          '0%, 100%': {
            opacity: '1',
            'box-shadow': '0 0 0 0 rgba(50, 205, 50, 0.3)',
          },
          '50%': {
            opacity: '.9',
            'box-shadow': '0 0 0 8px rgba(50, 205, 50, 0)',
          },
        },
        'soft-glow': {
          'from': {
            'box-shadow': '0 2px 8px rgba(50, 205, 50, 0.2)',
          },
          'to': {
            'box-shadow': '0 4px 16px rgba(50, 205, 50, 0.4)',
          },
        },
        'paw-gentle': {
          '0%, 50%, 100%': {
            transform: 'translateY(0px) scale(1)',
          },
          '25%': {
            transform: 'translateY(-2px) scale(1.02)',
          },
        },
      },
      backgroundImage: {
        'subtle-dots': 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
        'green-gradient': 'linear-gradient(135deg, #32CD32 0%, #39FF14 50%, #228B22 100%)',
        'professional': 'linear-gradient(to bottom, #32CD32 0%, #2FBF2F 100%)',
      },
      backgroundSize: {
        'subtle-dots': '24px 24px',
      },
    },
  },
  plugins: [],
}

export default config
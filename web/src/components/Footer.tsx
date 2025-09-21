'use client'

// Obra de Arte: "Eco Terminal" - Un susurro digital para CIVET
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black-terminal via-black-terminal/95 to-civet-dark/20 border-t-2 border-gradient-to-r from-black to-lime-acid/30 p-3 relative z-[60] flex-shrink-0 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between text-xs">
          {/* Marca y copyright con aura */}
          <div className="flex items-center space-x-2 mb-2 md:mb-0 relative">
            <div className="absolute inset-0 bg-lime-electric/10 blur-lg rounded-full"></div>
            <span className="relative text-lime-electric font-medium drop-shadow-lg">
              CIVET © 2025
            </span>
            <span className="relative text-lime-electric hidden md:inline drop-shadow-md">
              | Sistema Terminal Veterinario
            </span>
          </div>

          {/* Info de contacto con efectos sutiles */}
          <div className="flex items-center space-x-4 text-lime-electric">
            <div className="flex items-center space-x-1 p-1 rounded bg-white/5 hover:bg-white/10 transition-all duration-300">
              <span className="animate-bounce">📧</span>
              <span className="hidden sm:inline">info@civet.vet</span>
            </div>
            <div className="flex items-center space-x-1 p-1 rounded bg-white/5 hover:bg-white/10 transition-all duration-300">
              <span className="animate-pulse">📱</span>
              <span>+54 9 261 250-2161</span>
            </div>
            <div className="flex items-center space-x-1 p-1 rounded bg-white/5 hover:bg-white/10 transition-all duration-300">
              <span>📍</span>
              <span className="hidden md:inline">Mendoza, Argentina</span>
              <span className="md:hidden">MDZ</span>
            </div>
          </div>

          {/* Status del terminal con glow */}
          <div className="hidden lg:flex items-center space-x-2 text-xs relative">
            <div className="absolute inset-0 bg-lime-acid/20 blur-md rounded-full"></div>
            <span className="relative w-2 h-2 bg-lime-acid rounded-full animate-pulse shadow-lime-acid/50"></span>
            <span className="relative text-lime-acid font-terminal drop-shadow-lg">TERMINAL_ACTIVO</span>
          </div>
        </div>

        {/* Línea de comandos con transparencia etérea */}
        <div className="mt-2 pt-2 border-t border-gradient-to-r from-transparent via-lime-acid/20 to-transparent">
          <div className="text-xs text-lime-electric font-terminal opacity-70 bg-gradient-to-r from-transparent via-white/5 to-transparent p-2 rounded backdrop-blur-sm">
            <span className="text-lime-electric drop-shadow-md">civet@veterinaria:</span>
            <span className="animate-typing">~$ tail -f /var/log/happiness.log | grep "mascotas_felices"</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
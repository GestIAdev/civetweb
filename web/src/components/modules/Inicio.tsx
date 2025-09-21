'use client'

// Obra de Arte: "Susurros Verdes" - Una composición poética para CIVET
// Inspirada en la calidez familiar, con gradientes suaves y transparencias etéreas
export default function Inicio() {
  return (
    <div className="h-full relative overflow-hidden">
      {/* CAPA BASE: Fondo Arquitectónico con Gradiente Familiar */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/vetelocal7.png')", backgroundSize: '50% auto', backgroundPosition: 'left', backgroundRepeat: 'no-repeat' }}
      />

      {/* CAPA DE PROFUNDIDAD: Overlay con Transparencia y Blur Suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-civet-rich/30 to-civet-green/40 backdrop-blur-[1px]">
        <img
          src="/images/fondoinclinado2.png"
          alt="Susurro de Fusión"
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
        />
      </div>

      {/* CAPA DE LUZ: Efecto de Brillo Suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none" />

      {/* CONTENIDO PRINCIPAL: Centro de Atención con Sombras Poéticas */}
      <div className="relative w-full h-full flex items-center justify-end">
        <div className="w-full md:w-1/2 flex justify-center p-8">
          <div className="w-full max-w-lg flex flex-col justify-center space-y-6 text-center animate-fade-in">
            
            {/* LOGO: Con Aura Luminosa */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-civet-green/20 to-civet-dark/20 blur-xl rounded-full"></div>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-lime-electric mb-2 drop-shadow-lg">
                CIVET
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-civet-green to-civet-dark mx-auto mb-3 rounded-full shadow-sm"></div>
              <p className="text-lg md:text-xl text-lime-electric font-medium drop-shadow-md">
                Centro Integral Veterinario
              </p>
            </div>

            {/* MENSAJE: Con Ritmo y Calidez */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-lime-electric leading-tight drop-shadow-lg">
                Cuidamos a tu familia
                <span className="block text-lime-acid font-semibold animate-pulse-slow">de cuatro patas</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-medium text-lime-electric/90 drop-shadow-md">
                Más de 15 años brindando atención veterinaria integral
                con tecnología avanzada y el cariño que tu mascota merece.
              </p>
            </div>

            {/* SERVICIOS: Con Puntos de Luz */}
            <div className="grid grid-cols-1 gap-3 py-2">
              <div className="flex items-center justify-center space-x-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm shadow-inner">
                <div className="w-2 h-2 bg-civet-green rounded-full shadow-sm animate-pulse"></div>
                <span className="text-lime-electric font-medium">Consultas generales</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm shadow-inner">
                <div className="w-2 h-2 bg-civet-dark rounded-full shadow-sm animate-pulse"></div>
                <span className="text-lime-electric font-medium">Cirugías especializadas</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm shadow-inner">
                <div className="w-2 h-2 bg-civet-green rounded-full shadow-sm animate-pulse"></div>
                <span className="text-lime-electric font-medium">Urgencias 24hs</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm shadow-inner">
                <div className="w-2 h-2 bg-civet-dark rounded-full shadow-sm animate-pulse"></div>
                <span className="text-lime-electric font-medium">Pet Shop completo</span>
              </div>
            </div>

            {/* LLAMADO A LA ACCIÓN: Con Efecto de Elevación */}
            <div className="space-y-4 pt-4">
              <button className="btn-professional px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-civet-green/50 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-civet-green to-civet-dark text-white rounded-full">
                SOLICITAR TURNO
              </button>
              <div className="text-sm text-corpo-gray drop-shadow-md">
                <span>📱 Llamanos: </span>
                <a href="tel:+5492612502161" className="text-lime-electric font-semibold hover:text-lime-acid transition-colors">
                  +54 9 261 250-2161
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* TOQUE FINAL: Partículas Suaves de Luz */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-civet-green/20 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-civet-dark/15 rounded-full blur-sm animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-civet-green/25 rounded-full blur-sm animate-float-slow"></div>
    </div>
  )
}
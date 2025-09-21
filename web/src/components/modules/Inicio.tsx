'use client'

// Obra de Arte: "Susurros Verdes" - Una composición poética para CIVET
// Inspirada en la calidez familiar, con gradientes suaves y transparencias etéreas
export default function Inicio() {
  return (
    <div className="h-full relative overflow-hidden bg-black pt-28 pb-20">
      {/* --- INICIO DE LA MODIFICACIÓN --- */}

      {/* CAPA 1: La Fotografía 'vetelocal4.png' a la izquierda */}
      {/*
        AJUSTE: Hacemos la transición del gradiente más suave.
        Cambiamos de 'black 40%, transparent 60%' a 'black 30%, transparent 70%'.
        Esto crea una zona de "desvanecimiento" mucho más amplia.
      */}
      <div
        className="absolute inset-0"
        style={{ 
          backgroundImage: "url('/images/vetelocalR.png')",
          backgroundSize: '50% auto',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
      
        }}
      />

      {/* CAPA 2: El Overlay 'fondoinclinado2.png' con Fusión Inversa y Blur */}
      {/*
        AJUSTE: Aplicamos el mismo cambio aquí para que las máscaras sigan siendo
        el complemento perfecto una de la otra.
      */}

      <div
        className="absolute inset-0 blur-lg"
        style={{
          backgroundImage: `url('/images/fondoinclinado5.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* --- FIN DE LA MODIFICACIÓN --- */}


      {/* CAPA DE LUZ: Efecto de Brillo Suave (Sin cambios) */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none" />

      {/* CONTENIDO PRINCIPAL: Centro de Atención con Sombras Poéticas (Sin cambios) */}
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


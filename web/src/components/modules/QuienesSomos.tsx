'use client'

import ModuloLayout from '@/components/ModuloLayout'

export default function QuienesSomos() {
  const pergaminoContent = (
    <div className="space-y-6">
      {/* Header del módulo */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-lime-electric mb-2">
          ./quienes-somos
        </h2>
        <div className="text-lime-electric font-terminal text-xs">
          <span className="terminal-prompt"></span>
          <span>cat historia_civet.txt</span>
        </div>
      </div>

      {/* Historia principal */}
      <div className="bg-minty-green/10 border border-lime-electric/30 p-4 rounded-lg">
        <h3 className="text-lime-electric font-terminal text-lg mb-3 flex items-center">
          <span className="paw-print scale-75 mr-2"></span>
          NUESTRA HISTORIA
        </h3>
        <div className="space-y-3 text-sm text-corpo-gray leading-relaxed">
          <p>
            <span className="text-lime-electric">Hace más de 15 años</span>, CIVET comenzó como un sueño: 
            crear un espacio donde la tecnología y el amor por los animales se encontraran 
            para brindar la mejor atención veterinaria.
          </p>
          <p>
            Nuestro nombre, <span className="text-lime-electric font-semibold">CIVET</span>, 
            representa nuestra dedicación a la <span className="text-lime-electric">
            Ciencia, Innovación, Veterinaria y Tecnología</span>.
          </p>
          <p>
            Cada día trabajamos para que tu mascota reciba no solo tratamiento médico, 
            sino el cariño y respeto que merece como miembro de tu familia.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="bg-minty-green/10 border border-lime-electric/30 p-4 rounded-lg">
        <h4 className="text-lime-electric font-terminal text-lg mb-3 text-center">NUESTROS VALORES</h4>
        <div className="grid grid-cols-1 gap-3">
          <div className="text-center p-2 rounded bg-lime-electric/10">
            <div className="text-xl mb-1">❤️</div>
            <h5 className="text-lime-electric font-terminal text-sm mb-1">COMPASIÓN</h5>
            <p className="text-xs text-corpo-gray">Tratamos cada mascota como si fuera nuestra</p>
          </div>
          <div className="text-center p-2 rounded bg-lime-electric/10">
            <div className="text-xl mb-1">🔬</div>
            <h5 className="text-lime-electric font-terminal text-sm mb-1">INNOVACIÓN</h5>
            <p className="text-xs text-corpo-gray">Tecnología de vanguardia al servicio de la vida</p>
          </div>
          <div className="text-center p-2 rounded bg-lime-electric/10">
            <div className="text-xl mb-1">🤝</div>
            <h5 className="text-lime-electric font-terminal text-sm mb-1">COMPROMISO</h5>
            <p className="text-xs text-corpo-gray">Disponibles cuando más nos necesitás</p>
          </div>
        </div>
      </div>
    </div>
  )

  const lienzoContent = (
    <div className="space-y-6">
      {/* Equipo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-minty-green/10 border border-lime-electric/30 p-4 rounded-lg hover:border-lime-electric/50 transition-colors">
          <h4 className="text-lime-electric font-terminal text-lg mb-3">DR. MARTINEZ</h4>
          <p className="text-xs text-lime-electric mb-2">VETERINARIO PRINCIPAL</p>
          <p className="text-sm text-corpo-gray">
            Especialista en medicina interna y cirugía. 15+ años de experiencia 
            salvando vidas peludas con tecnología avanzada.
          </p>
          <div className="mt-3 text-xs text-corpo-gray">
            <span>📚 Especialización: Cardiología Veterinaria</span><br/>
            <span>🎓 Universidad Nacional de Córdoba</span>
          </div>
        </div>

        <div className="bg-minty-green/10 border border-lime-electric/30 p-4 rounded-lg hover:border-lime-electric/50 transition-colors">
          <h4 className="text-lime-electric font-terminal text-lg mb-3">DRA. GONZALEZ</h4>
          <p className="text-xs text-lime-electric mb-2">ESPECIALISTA EN NUTRICIÓN</p>
          <p className="text-sm text-corpo-gray">
            Experta en planes nutricionales personalizados y suplementación. 
            Cada mascota tiene necesidades únicas.
          </p>
          <div className="mt-3 text-xs text-corpo-gray">
            <span>📚 Especialización: Nutrición Clínica</span><br/>
            <span>🎓 Universidad de Buenos Aires</span>
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center bg-minty-green/10 border border-lime-electric/30 p-4 rounded-lg">
          <h4 className="text-lime-electric font-terminal text-lg mb-3">MISIÓN</h4>
          <div className="text-sm text-corpo-gray">
            Proporcionar atención veterinaria integral de excelencia, 
            combinando tecnología avanzada con el cuidado humano que 
            cada mascota merece.
          </div>
        </div>

        <div className="text-center bg-minty-green/10 border border-lime-electric/30 p-4 rounded-lg">
          <h4 className="text-lime-electric font-terminal text-lg mb-3">VISIÓN</h4>
          <div className="text-sm text-corpo-gray">
            Ser la clínica veterinaria de referencia en Mendoza, 
            reconocida por la innovación, calidad y el compromiso 
            con la salud animal.
          </div>
        </div>
      </div>

      {/* Tecnología */}
      <div className="bg-minty-green/10 border border-lime-electric/30 p-4 rounded-lg text-center">
        <h3 className="text-lime-electric font-terminal text-xl mb-3">TECNOLOGÍA AVANZADA</h3>
        <div className="grid grid-cols-3 gap-4 text-sm text-corpo-gray">
          <div>📡 Rayos X Digitales</div>
          <div>🖥️ Ecografía HD</div>
          <div>🔬 Microscopía Avanzada</div>
        </div>
      </div>
    </div>
  )

  return (
    <ModuloLayout
      pergamino={pergaminoContent}
      lienzo={lienzoContent}
    />
  )
}


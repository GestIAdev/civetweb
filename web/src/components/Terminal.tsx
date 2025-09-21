'use client'

import { ModuleType } from '@/app/page'

interface TerminalProps {
  currentModule: ModuleType
  onModuleChange: (module: ModuleType) => void
  isTransitioning: boolean
}

const moduleCommands = {
  'inicio': 'home',
  'quienes-somos': 'about',
  'petshop': 'shop', 
  'alimentos': 'food',
  'especialidades': 'services',
  'pacientes': 'gallery',
  'contacto': 'contact'
}

const moduleLabels = {
  'inicio': 'Inicio',
  'quienes-somos': 'Quiénes Somos',
  'petshop': 'Pet Shop',
  'alimentos': 'Alimentos',
  'especialidades': 'Especialidades',
  'pacientes': 'Pacientes',
  'contacto': 'Contacto'
}

// Obra de Arte: "Navegante Digital" - Un puente etéreo hacia CIVET
export default function Terminal({ currentModule, onModuleChange, isTransitioning }: TerminalProps) {
  const modules: ModuleType[] = [
    'inicio',
    'quienes-somos',
    'petshop', 
    'alimentos',
    'especialidades',
    'pacientes',
    'contacto'
  ]

  return (
    <header className="bg-gradient-to-r from-black-terminal via-civet-dark/10 to-black-terminal border-b-2 border-gradient-to-r from-black to-lime-acid/30 p-4 relative z-[55] shadow-lg flex-shrink-0 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Logo/Brand con aura poética */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3 relative">
            <div className="absolute inset-0 bg-lime-electric/10 blur-xl rounded-full"></div>
            <img 
              src="/images/logocivet.jpg" 
              alt="CIVET Logo"
              className="relative h-10 w-auto object-contain drop-shadow-lg"
            />
            <h1 className="relative text-xl md:text-2xl font-bold text-lime-electric drop-shadow-lg">
              CIVET<span className="text-lime-acid animate-pulse-slow">.vet</span>
            </h1>
          </div>
          
          {/* Status del centro con glow */}
          <div className="hidden md:flex items-center space-x-2 text-xs relative">
            <div className="absolute inset-0 bg-lime-acid/20 blur-md rounded-full"></div>
            <span className="text-lime-electric drop-shadow-md">Estado:</span>
            <span className={`relative font-medium drop-shadow-lg ${isTransitioning ? 'text-lime-acid animate-pulse' : 'text-lime-electric'}`}>
              {isTransitioning ? 'Cargando...' : 'Atención disponible'}
            </span>
          </div>
        </div>

        {/* Navigation Menu - Con magia sutil */}
        <nav className="space-y-2 md:space-y-0">
          {/* Mobile: Dropdown con estilo etéreo */}
          <div className="md:hidden">
            <select 
              value={currentModule}
              onChange={(e) => onModuleChange(e.target.value as ModuleType)}
              className="w-full bg-black-terminal/80 border-2 border-black text-lime-electric p-3 font-corpo text-sm focus:border-lime-electric outline-none rounded-md backdrop-blur-sm shadow-inner"
              disabled={isTransitioning}
            >
              {modules.map(module => (
                <option key={module} value={module} className="bg-black-terminal text-lime-electric">
                  {moduleLabels[module]}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: Horizontal buttons con elevación */}
          <div className="hidden md:flex flex-wrap gap-3">
            {modules.map(module => (
              <button
                key={module}
                onClick={() => onModuleChange(module)}
                disabled={isTransitioning}
                className={`
                  px-4 py-2 text-sm font-corpo font-medium border-2 rounded-md transition-all duration-300 transform hover:scale-105
                  ${currentModule === module 
                    ? 'bg-gradient-to-r from-lime-acid to-lime-electric text-black-terminal border-black shadow-2xl shadow-lime-acid/50' 
                    : 'bg-black-terminal/80 text-lime-electric border-black hover:border-lime-electric hover:text-lime-acid hover:shadow-lg hover:shadow-lime-acid/30 backdrop-blur-sm'
                  }
                  ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                {moduleLabels[module]}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
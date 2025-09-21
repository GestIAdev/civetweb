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

// Obra de Arte: "Espectro Flotante" - Header cuántico para CIVET
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo Emblema */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-lime-electric rounded-full flex items-center justify-center shadow-lg p-1">
              <img 
                src="/images/logocivet3sinfondo.png" 
                alt="CIVET Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="hidden md:block text-lime-electric font-bold text-xl">Centro Integral Veterinario</span>
          </div>

          {/* Navigation Menu - Espectral */}
          <nav className="flex items-center space-x-1">
            {modules.map(module => (
              <button
                key={module}
                onClick={() => onModuleChange(module)}
                disabled={isTransitioning}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all duration-300
                  ${currentModule === module 
                    ? 'bg-lime-electric text-black shadow-lg' 
                    : 'text-black hover:bg-white/10 hover:text-lime-electric'
                  }
                  ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                {moduleLabels[module]}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
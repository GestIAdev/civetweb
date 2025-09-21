'use client'

import { ModuleType } from '@/app/page'
import Inicio from '@/components/modules/Inicio'
import QuienesSomos from '@/components/modules/QuienesSomos'
import PetShop from '@/components/modules/PetShop'
import Alimentos from '@/components/modules/Alimentos'
import Especialidades from '@/components/modules/Especialidades'
import Pacientes from '@/components/modules/Pacientes'
import Contacto from '@/components/modules/Contacto'

interface CanvasProps {
  currentModule: ModuleType
  isTransitioning: boolean
}

export default function Canvas({ currentModule, isTransitioning }: CanvasProps) {
  const renderModule = () => {
    if (isTransitioning) {
      return (
        <div className="flex items-center justify-center h-full bg-civet-green">
          <div className="text-center">
            <div className="text-2xl font-bold text-corpo-black mb-4">
              Cargando módulo...
            </div>
            <div className="text-sm text-corpo-dark">
              Centro Integral Veterinario CIVET
            </div>
          </div>
        </div>
      )
    }

    switch (currentModule) {
      case 'inicio':
        return <Inicio />
      case 'quienes-somos':
        return <QuienesSomos />
      case 'petshop':
        return <PetShop />
      case 'alimentos':
        return <Alimentos />
      case 'especialidades':
        return <Especialidades />
      case 'pacientes':
        return <Pacientes />
      case 'contacto':
        return <Contacto />
      default:
        return <Inicio />
    }
  }

  return (
    <main className="flex-1 h-full bg-white-clean relative">
      {/* Contenido del módulo - Arquitectura Vertical Forjada */}
      <div className={`
        relative h-full
        ${isTransitioning ? 'opacity-50' : 'opacity-100'}
        transition-opacity duration-300 ease-in-out
      `}>
        {renderModule()}
      </div>
    </main>
  )
}
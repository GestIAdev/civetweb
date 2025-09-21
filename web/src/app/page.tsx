'use client'

import { useState } from 'react'
import Terminal from '@/components/Terminal'
import Canvas from '@/components/Canvas'
import Footer from '@/components/Footer'
import WhatsAppPanic from '@/components/WhatsAppPanic'

export type ModuleType = 
  | 'inicio'
  | 'quienes-somos' 
  | 'petshop' 
  | 'alimentos' 
  | 'especialidades' 
  | 'pacientes' 
  | 'contacto'

export default function TerminalSoberano() {
  const [currentModule, setCurrentModule] = useState<ModuleType>('inicio')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleModuleChange = async (newModule: ModuleType) => {
    if (newModule === currentModule) return
    
    setIsTransitioning(true)
    
    // Simular comando de terminal con delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    setCurrentModule(newModule)
    setIsTransitioning(false)
  }

  return (
    <div className="h-full flex flex-col">
      {/* TERMINAL - Header Persistente */}
      <Terminal 
        currentModule={currentModule} 
        onModuleChange={handleModuleChange}
        isTransitioning={isTransitioning}
      />

      {/* CANVAS - Área Central con flex-1 y overflow controlado */}
      <div className="flex-1 overflow-y-auto">
        <Canvas 
          currentModule={currentModule}
          isTransitioning={isTransitioning}
        />
      </div>

      {/* SELLO - Footer Persistente */}
      <Footer />

      {/* BOTÓN DE PÁNICO - WhatsApp CTA Flotante */}
      <WhatsAppPanic />
    </div>
  )
}
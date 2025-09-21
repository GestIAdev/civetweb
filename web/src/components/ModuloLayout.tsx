// components/ModuloLayout.tsx
// Arquitectura Sagrada: "Pergamino + Lienzo"
// Para módulos internos de CIVET - Diseño familiar y cálido

import { ReactNode } from 'react'

interface ModuloLayoutProps {
  pergamino: ReactNode  // Panel izquierdo - funcional (30%)
  lienzo: ReactNode     // Panel derecho - visual (70%)
}

export default function ModuloLayout({ pergamino, lienzo }: ModuloLayoutProps) {
  return (
    <div className="flex h-full w-full bg-civet-dark text-corpo-gray overflow-hidden pt-28 pb-20">
      {/* SECCIÓN DEL PERGAMINO (IZQUIERDA) - 30% */}
      <div className="w-[30%] h-full p-6 overflow-y-auto bg-civet-dark/95 backdrop-blur-sm border-r border-lime-electric/20">
        <div className="h-full">
          {pergamino}
        </div>
      </div>

      {/* SECCIÓN DEL LIENZO (DERECHA) - 70% CON SEPARADOR DIAGONAL */}
      <div className="relative w-[70%] h-full p-6 overflow-y-auto bg-civet-dark">
        {/* El Separador Diagonal - Firma visual de CIVET */}
        <div
          className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-civet-dark via-lime-electric/10 to-transparent pointer-events-none"
          style={{
            transform: 'skewX(-12deg)',
            transformOrigin: 'top left',
            marginLeft: '-2rem',
            zIndex: 1
          }}
        />
        {/* Contenido del Lienzo */}
        <div className="relative z-10 h-full">
          {lienzo}
        </div>
      </div>
    </div>
  )
}
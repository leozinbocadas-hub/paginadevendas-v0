"use client"

import Image from "next/image"
import { Sparkles, ChevronLeft, ChevronRight, Monitor } from "lucide-react"
import { useState } from "react"

const desktopImages = [
  "/images/app-showcase/app-5.png",
  "/images/app-showcase/app-6.png",
]

export function DesktopShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % desktopImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + desktopImages.length) % desktopImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 md:py-24 px-2 md:px-4 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary text-xs md:text-sm tracking-[0.3em] uppercase animate-fade-in">
            <Monitor className="w-3 h-3 md:w-4 md:h-4" />
            <span className="transition-all duration-300 hover:scale-105">Versão Desktop</span>
            <Monitor className="w-3 h-3 md:w-4 md:h-4" />
          </div>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-balance text-glow transition-all duration-500 hover:scale-[1.02] px-2">
            Explore no Seu
            <br />
            <span className="text-primary transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">
              PC ou Notebook
            </span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed transition-all duration-300 hover:text-foreground/80 px-4">
            A experiência completa da Biblioteca Mística na tela grande. Navegue com mais espaço e conforto.
          </p>
        </div>

        {/* Container - Tamanho maior no mobile */}
        <div className="relative w-full flex items-center justify-center px-2 md:px-4">
          <div className="relative w-full max-w-[95vw] md:max-w-4xl aspect-video">
            {/* Container fixo para todas as imagens */}
            {desktopImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`App Desktop Screenshot ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1200px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.jpg"
                  }}
                />
              </div>
            ))}

            {/* Botões de navegação - escondidos no mobile, visíveis no desktop */}
            {desktopImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="hidden md:flex absolute left-[-60px] lg:left-[-70px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/40 hover:border-primary/60 items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 group backdrop-blur-sm"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7 text-primary transition-all duration-300 group-hover:scale-110" />
                </button>

                <button
                  onClick={nextImage}
                  className="hidden md:flex absolute right-[-60px] lg:right-[-70px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/40 hover:border-primary/60 items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 group backdrop-blur-sm"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-primary transition-all duration-300 group-hover:scale-110" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Navigation dots */}
        {desktopImages.length > 1 && (
          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {desktopImages.map((_, index) => (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary w-8 h-2 shadow-lg shadow-primary/50"
                    : "bg-primary/30 hover:bg-primary/50 w-2 h-2"
                }`}
                onClick={() => goToImage(index)}
                aria-label={`Ver imagem ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Contador */}
        {desktopImages.length > 1 && (
          <div className="text-center mt-4 md:mt-6">
            <p className="text-xs md:text-sm text-muted-foreground">
              {currentIndex + 1} / {desktopImages.length}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

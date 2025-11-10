"use client"

import { Button } from "@/components/ui/button"
import { Clock, Shield, Check, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { trackPurchaseClick } from "@/lib/facebook-pixel"

export function ConversionSection() {
  const [timeLeft, setTimeLeft] = useState(5 * 60) // 5 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
  return (
    <section id="comprar" className="py-24 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Urgency */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive border border-destructive/20 rounded-full px-6 py-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Oferta por Tempo Limitado</span>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide transition-all duration-300 hover:text-foreground/80">
              A oferta termina em:
            </p>
            <div className="inline-flex items-center justify-center gap-3 bg-destructive text-destructive-foreground rounded-lg px-16 md:px-24 py-4 border-2 border-destructive shadow-lg animate-pulse min-w-[280px] md:min-w-[400px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-destructive/50">
              <Clock className="w-6 h-6 transition-all duration-300 hover:rotate-12" />
              <span className="text-4xl md:text-5xl font-mono font-bold tabular-nums transition-all duration-300">
                {timeLeft > 0 ? formattedTime : "00:00"}
              </span>
            </div>
            {timeLeft === 0 && (
              <p className="text-destructive font-semibold text-lg transition-all duration-300 animate-pulse">
                ⚠️ A oferta expirou!
              </p>
            )}
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            O Portal Não Permanecerá
            <br />
            <span className="text-primary">Aberto Para Sempre</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Uma oportunidade única de acesso ao conhecimento ancestral por um investimento simbólico.
          </p>
        </div>

        {/* Conversion box */}
        <div className="bg-gradient-to-b from-card to-secondary/50 border-2 border-primary rounded-lg p-8 md:p-12 glow-purple space-y-8">
          {/* Price */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">Inicie Sua Jornada Hoje Por Apenas</p>
            <p className="text-6xl md:text-7xl font-bold font-serif text-primary text-glow">R$ 37,00</p>
            <p className="text-lg text-foreground font-semibold">
              Pagamento único • Acesso vitalício • Sem mensalidades
            </p>
          </div>

          {/* Final benefits */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 group cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-primary/30 group-hover:shadow-md group-hover:shadow-primary/50">
                <Check className="w-3 h-3 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <div>
                <p className="font-semibold text-foreground transition-all duration-300 group-hover:text-primary">600+ Grimórios Completos</p>
                <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground/70">Acesso imediato e vitalício</p>
              </div>
            </div>
            <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 group cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-primary/30 group-hover:shadow-md group-hover:shadow-primary/50">
                <Sparkles className="w-3 h-3 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <div>
                <p className="font-semibold text-foreground transition-all duration-300 group-hover:text-primary">Feed Oculto Exclusivo</p>
                <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground/70">Conteúdo novo toda semana</p>
              </div>
            </div>
            <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 group cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-primary/30 group-hover:shadow-md group-hover:shadow-primary/50">
                <Check className="w-3 h-3 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <div>
                <p className="font-semibold text-foreground transition-all duration-300 group-hover:text-primary">Legião Oculta</p>
                <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground/70">Comunidade de praticantes</p>
              </div>
            </div>
            <div className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 group cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-primary/30 group-hover:shadow-md group-hover:shadow-primary/50">
                <Check className="w-3 h-3 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <div>
                <p className="font-semibold text-foreground transition-all duration-300 group-hover:text-primary">Robô Oculto (IA)</p>
                <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground/70">Suporte 24/7 especializado</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg md:text-xl font-bold glow-purple transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(147,51,234,0.7)] active:scale-105"
            asChild
          >
            <a
              href="https://pay.cakto.com.br/3du3hsn_618390"
              onClick={() => {
                // Rastreia o evento de conversão no Meta Pixel
                trackPurchaseClick()
              }}
            >
              <span className="hidden sm:inline">Quero Atravessar o Portal Agora</span>
              <span className="sm:hidden">Atravessar o Portal Agora</span>
            </a>
          </Button>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-3 text-center bg-secondary/50 rounded-lg p-6 transition-all duration-300 hover:bg-secondary/70 hover:shadow-lg group cursor-pointer">
            <Shield className="w-8 h-8 text-primary flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]" />
            <div className="text-left">
              <p className="font-semibold text-foreground transition-all duration-300 group-hover:text-primary">Garantia Incondicional de 7 Dias</p>
              <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground/80">
                Se não for o que esperava, devolvemos 100% do seu investimento. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

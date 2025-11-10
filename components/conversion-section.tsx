import { Button } from "@/components/ui/button"
import { Clock, Shield, Check, Sparkles } from "lucide-react"

export function ConversionSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Urgency */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive border border-destructive/20 rounded-full px-6 py-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Oferta por Tempo Limitado</span>
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
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">600+ Grimórios Completos</p>
                <p className="text-sm text-muted-foreground">Acesso imediato e vitalício</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <Sparkles className="w-3 h-3 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Feed Oculto Exclusivo</p>
                <p className="text-sm text-muted-foreground">Conteúdo novo toda semana</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Legião Oculta</p>
                <p className="text-sm text-muted-foreground">Comunidade de praticantes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Robô Oculto (IA)</p>
                <p className="text-sm text-muted-foreground">Suporte 24/7 especializado</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg md:text-xl font-bold glow-purple transition-all duration-300 hover:scale-[1.02]"
            asChild
          >
            <a href="https://pay.cakto.com.br/3du3hsn_618390" target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">Quero Atravessar o Portal Agora</span>
              <span className="sm:hidden">Atravessar o Portal Agora</span>
            </a>
          </Button>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-3 text-center bg-secondary/50 rounded-lg p-6">
            <Shield className="w-8 h-8 text-primary flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-foreground">Garantia Incondicional de 7 Dias</p>
              <p className="text-sm text-muted-foreground">
                Se não for o que esperava, devolvemos 100% do seu investimento. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

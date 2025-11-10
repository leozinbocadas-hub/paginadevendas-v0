import { Check } from "lucide-react"

export function ValueSection() {
  const benefits = [
    "600+ livros e grimórios organizados",
    "Feed Oculto com conteúdo diário exclusivo",
    "Acesso à Legião Oculta (comunidade)",
    "Robô Oculto - IA especializada",
    "Novos conteúdos adicionados mensalmente",
    "Disponível em Web, Mobile e Desktop",
    "Suporte dedicado",
    "Garantia incondicional de 7 dias",
  ]

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            O Verdadeiro Valor Desta
            <br />
            <span className="text-primary">Iniciação</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Se cada grimório custasse apenas R$ 8,65 (valor extremamente baixo),
            <br />
            esta biblioteca valeria R$ 5.191,00
          </p>
        </div>

        <div className="bg-card border-2 border-primary rounded-lg p-8 md:p-12 glow-purple">
          {/* Value comparison */}
          <div className="text-center mb-10">
            <div className="inline-block">
              <p className="text-muted-foreground mb-2">Valor Real Estimado</p>
              <p className="text-3xl md:text-4xl font-bold line-through text-muted-foreground mb-4">R$ 5.191,00</p>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
              <p className="text-primary mb-2 font-semibold">Investimento Hoje</p>
              <p className="text-5xl md:text-7xl font-bold font-serif text-primary text-glow">R$ 37,00</p>
              <p className="text-muted-foreground mt-2">Pagamento único • Acesso vitalício</p>
            </div>
          </div>

          {/* Benefits list */}
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

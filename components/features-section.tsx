import { Sparkles, Users, Brain } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Feed Oculto",
      subtitle: "Conhecimento Diário",
      description:
        "Um feed exclusivo estilo rede social com postagens diárias sobre práticas ocultas, rituais, interpretações astrológicas e ensinamentos esotéricos. Conteúdo fresco toda semana para manter sua jornada sempre em evolução.",
      benefits: [
        "Postagens diárias sobre ocultismo",
        "Rituais e práticas explicadas",
        "Interpretações astrológicas",
        "Calendário lunar e sabático",
      ],
    },
    {
      icon: Users,
      title: "Legião Oculta",
      subtitle: "Comunidade Exclusiva",
      description:
        "Uma rede social privada apenas para membros da Biblioteca Mística. Conecte-se com outros praticantes, compartilhe experiências, tire dúvidas e faça parte de uma verdadeira fraternidade oculta.",
      benefits: [
        "Rede social exclusiva de praticantes",
        "Troca de experiências e práticas",
        "Grupos temáticos por interesse",
        "Eventos e rituais coletivos online",
      ],
    },
    {
      icon: Brain,
      title: "Robô Oculto",
      subtitle: "IA Especializada",
      description:
        "Uma inteligência artificial treinada especificamente em ocultismo e esoterismo. Tire dúvidas sobre práticas, interprete símbolos, entenda rituais e receba orientações personalizadas 24/7.",
      benefits: [
        "IA treinada em ocultismo",
        "Respostas instantâneas",
        "Interpretação de símbolos",
        "Orientações personalizadas",
      ],
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            Recursos Que Você Não Encontra
            <br />
            <span className="text-primary">Em Nenhum Outro Lugar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Além dos 600+ grimórios, você terá acesso a três ferramentas exclusivas que transformam sua jornada de
            aprendizado
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-lg p-8 md:p-12 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.01] group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon className="w-7 h-7 text-primary transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold transition-all duration-300 group-hover:text-primary">{feature.title}</h3>
                    <p className="text-primary text-sm font-medium transition-all duration-300 group-hover:font-semibold">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg transition-all duration-300 group-hover:text-foreground/90">{feature.description}</p>
              </div>

              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4 transition-all duration-300 hover:bg-secondary/70 hover:translate-x-2 hover:shadow-md group-hover:border group-hover:border-primary/20 cursor-pointer">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 transition-all duration-300 group-hover:scale-150" />
                    <span className="text-foreground transition-all duration-300 group-hover:font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

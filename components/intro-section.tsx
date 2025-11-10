import { BookOpen, Users, Brain, Sparkles } from "lucide-react"

export function IntroSection() {
  const pillars = [
    {
      icon: BookOpen,
      title: "600+ Grimórios",
      description: "Conhecimento organizado em módulos temáticos completos",
    },
    {
      icon: Sparkles,
      title: "Feed Oculto",
      description: "Conteúdo diário exclusivo sobre práticas esotéricas",
    },
    {
      icon: Users,
      title: "Legião Oculta",
      description: "Comunidade secreta de praticantes iniciados",
    },
    {
      icon: Brain,
      title: "Robô Oculto",
      description: "IA especializada em ocultismo para suas dúvidas",
    },
  ]

  const modules = [
    "Astrologia",
    "Bruxaria",
    "Wicca",
    "Magia do Caos",
    "Umbanda",
    "Candomblé",
    "Tantra",
    "Hermetismo",
    "Goetia",
    "Radiestesia",
    "Magia Sexual",
    "Deidades",
    "Reiki",
    "Cabala",
    "Espiritismo",
    "Alquimia",
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            Uma Biblioteca Diferente de
            <br />
            <span className="text-primary">Tudo o Que Você Já Viu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Não é apenas uma coleção de livros. É um sistema completo de iniciação ao conhecimento oculto, com
            ferramentas que conectam você à sabedoria ancestral e a outros praticantes.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 space-y-3 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Modules */}
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8">Módulos Temáticos Disponíveis</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {modules.map((module, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                {module}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

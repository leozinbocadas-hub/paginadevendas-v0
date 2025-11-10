import { Smartphone, Monitor, Globe } from "lucide-react"

export function PlatformsSection() {
  const platforms = [
    {
      icon: Globe,
      title: "Web",
      description: "Acesse pelo navegador em qualquer dispositivo",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "App disponível para iOS e Android",
    },
    {
      icon: Monitor,
      title: "Desktop",
      description: "Aplicativo para Windows, Mac e Linux",
    },
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            Acesse Onde e Quando
            <br />
            <span className="text-primary">Quiser</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A Biblioteca Mística está disponível em todas as plataformas para que você nunca perca o ritmo dos seus
            estudos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:scale-105 hover:-translate-y-2 text-center space-y-4 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto glow-purple-sm transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-primary/50">
                <platform.icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-serif text-2xl font-bold transition-all duration-300 group-hover:text-primary">{platform.title}</h3>
              <p className="text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground/80">{platform.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">Um único pagamento</span> • Acesso em todas as plataformas •
            Sincronização automática
          </p>
        </div>
      </div>
    </section>
  )
}

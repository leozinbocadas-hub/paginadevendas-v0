import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marina Souza",
      title: "Praticante de Wicca",
      text: "Depois de anos gastando fortunas em livros físicos caros e difíceis de encontrar, finalmente encontrei tudo em um só lugar. O Feed Oculto é um diferencial incrível que me mantém sempre atualizada. Valeu cada centavo.",
      rating: 5,
    },
    {
      name: "Luciano Rodrigues",
      title: "Estudante de Hermetismo",
      text: "A Legião Oculta mudou minha prática completamente. Poder trocar experiências com outros iniciados sérios, sem o ruído das redes sociais comuns, é algo único. E o Robô Oculto me ajuda a interpretar símbolos complexos instantaneamente.",
      rating: 5,
    },
    {
      name: "Beatriz Oliveira",
      title: "Astróloga Tradicional",
      text: "A organização por módulos temáticos é perfeita. Consigo aprofundar em cada área de forma estruturada. Além disso, encontrei textos raros sobre Astrologia Medieval que nunca vi em nenhum outro lugar. Investimento que se paga sozinho.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
            Praticantes Que Já
            <br />
            <span className="text-primary">Atravessaram o Portal</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Veja o que dizem aqueles que iniciaram sua jornada
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

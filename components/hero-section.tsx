import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Mystical background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Overline */}
        <div className="flex items-center justify-center gap-2 text-primary text-sm tracking-[0.3em] uppercase">
          <Sparkles className="w-4 h-4" />
          <span>Não é para todos</span>
          <Sparkles className="w-4 h-4" />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-balance text-glow leading-tight">
          O Portal do Conhecimento
          <br />
          <span className="text-primary">Proibido</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          600+ grimórios ancestrais aguardam por você.
        </p>

        <div className="pt-8 pb-4">
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-background/30 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden shadow-2xl glow-purple">
            {/* Placeholder for VSL - replace the src with your actual video URL */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/50 to-primary/10">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
                </div>
                <p className="text-sm text-muted-foreground">Insira o código da sua VSL aqui</p>
              </div>
            </div>
            {/* Uncomment and add your video embed code here
            <iframe
              src="YOUR_VIDEO_URL"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold glow-purple transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://pay.cakto.com.br/3du3hsn_618390" target="_blank" rel="noopener noreferrer">
              Iniciar Minha Jornada
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Acesso vitalício • Apenas R$ 37,00 • Garantia de 7 dias</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  )
}

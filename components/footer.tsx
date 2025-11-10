export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <p className="font-serif text-lg md:text-2xl lg:text-3xl font-semibold text-primary italic text-balance transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(147,51,234,0.5)] cursor-default">
            "O conhecimento oculto não é encontrado, é conquistado."
          </p>
          <div className="pt-6 text-sm text-muted-foreground space-y-2">
            <p className="transition-all duration-300 hover:text-foreground/70">© 2025 Biblioteca Mística. Todos os direitos reservados.</p>
            <p className="transition-all duration-300 hover:text-foreground/70">Este produto não substitui orientação profissional adequada.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

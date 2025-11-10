"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"
import { CustomVideoPlayer } from "@/components/custom-video-player"

// URL do vídeo - Cole aqui a URL do seu vídeo
// 
// ⚠️ IMPORTANTE: Para usar o player customizado com barra roxa, você precisa de uma URL DIRETA do vídeo
//
// OPÇÕES RECOMENDADAS:
// 1. Google Drive (link direto de streaming):
//    - Faça upload no Google Drive
//    - Compartilhe como "Qualquer pessoa com o link pode ver"
//    - Extraia o FILE_ID da URL: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
//    - Use: https://drive.google.com/uc?export=view&id=FILE_ID
//
// 2. Hospedagem própria (CDN, servidor):
//    - Upload em servidor próprio ou CDN (Cloudflare, AWS S3, etc.)
//    - Cole a URL direta do arquivo: https://seuservidor.com/video.mp4
//
// 3. Outros serviços:
//    - Vimeo (com link direto)
//    - Cloudflare Stream
//    - AWS CloudFront
//
// FORMATOS ACEITOS:
// - MP4: .mp4
// - WebM: .webm
// - OGG: .ogg
// - Qualquer URL direta de vídeo que o navegador suporte

// Cole aqui a URL DIRETA do seu vídeo
// Exemplo Google Drive: https://drive.google.com/uc?export=view&id=1ABC123xyz456
// Exemplo servidor: https://seuservidor.com/video.mp4
const VIDEO_URL = "https://drive.google.com/file/d/1ldg7CtfTrNCbNsJvLncwuV4JegPQ9zis/view?usp=sharing" // Cole sua URL DIRETA de vídeo aqui

// Função para detectar se é uma URL direta de vídeo
function isDirectVideoUrl(url: string): boolean {
  if (!url) return false
  
  // Verifica se termina com extensão de vídeo
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi", ".m3u8"]
  const hasExtension = videoExtensions.some(ext => url.toLowerCase().includes(ext))
  
  // Verifica se é um link direto do Google Drive para streaming
  const isGoogleDriveDirect = url.includes("drive.google.com/uc?export=view")
  
  return hasExtension || isGoogleDriveDirect || (!url.includes("youtube.com") && !url.includes("youtu.be") && !url.includes("drive.google.com/file/d"))
}

// Função para converter URL do Google Drive para link direto de streaming
function getGoogleDriveDirectUrl(url: string): string {
  if (!url) return ""
  
  let fileId = ""
  
  // Formato: https://drive.google.com/file/d/FILE_ID/view
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (fileMatch) {
    fileId = fileMatch[1]
  }
  
  // Formato: https://drive.google.com/open?id=FILE_ID
  const openMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (openMatch) {
    fileId = openMatch[1]
  }
  
  // Se for apenas o ID (sem URL completa)
  if (!fileId && /^[a-zA-Z0-9_-]+$/.test(url.trim())) {
    fileId = url.trim()
  }
  
  if (!fileId) return ""
  
  // Tenta múltiplos formatos do Google Drive
  // Formato 1: uc?export=download (força download, mas pode funcionar para streaming)
  // Formato 2: uc?export=view (visualização)
  // IMPORTANTE: O arquivo deve estar configurado como "Qualquer pessoa com o link pode ver"
  
  // Primeiro tenta o formato de download (mais comum para vídeos)
  return `https://drive.google.com/uc?export=download&id=${fileId}`
}

// Função para processar a URL do vídeo
function processVideoUrl(url: string): string {
  if (!url) return ""
  
  // Se já for uma URL direta de vídeo, retorna como está
  if (isDirectVideoUrl(url)) {
    return url
  }
  
  // Se for Google Drive, tenta converter para link direto
  if (url.includes("drive.google.com") || /^[a-zA-Z0-9_-]+$/.test(url.trim())) {
    return getGoogleDriveDirectUrl(url)
  }
  
  // Se for YouTube, retorna vazio (não suporta player customizado)
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return ""
  }
  
  return url
}

export function HeroSection() {
  const videoUrl = processVideoUrl(VIDEO_URL)
  const hasVideo = Boolean(videoUrl)
  const isGoogleDrive = VIDEO_URL.includes("drive.google.com") && !VIDEO_URL.includes(".mp4") && !VIDEO_URL.includes(".webm")
  
  // Extrai o file ID do Google Drive
  let googleDriveFileId = ""
  if (isGoogleDrive) {
    const fileMatch = VIDEO_URL.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    if (fileMatch) {
      googleDriveFileId = fileMatch[1]
    }
  }
  
  // Para Google Drive, tenta usar o player HTML5 primeiro com URL direta
  // Se não funcionar, o componente CustomVideoPlayer tentará iframe como fallback

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Mystical background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Overline */}
        <div className="flex items-center justify-center gap-2 text-primary text-sm tracking-[0.3em] uppercase animate-fade-in">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="transition-all duration-300 hover:scale-105">Não é para todos</span>
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-balance text-glow leading-tight transition-all duration-500 hover:scale-[1.02]">
          O Portal do Conhecimento
          <br />
          <span className="text-primary transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">Proibido</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed transition-all duration-300 hover:text-foreground/80">
          600+ grimórios ancestrais aguardam por você.
        </p>

        <div className="pt-8 pb-4">
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-background/30 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden shadow-2xl glow-purple transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:scale-[1.01]">
            {hasVideo ? (
              // Player de vídeo customizado com barra roxa
              // Para Google Drive, tenta URL direta primeiro, depois iframe como fallback
              <CustomVideoPlayer 
                videoUrl={videoUrl}
                googleDriveFileId={isGoogleDrive ? googleDriveFileId : undefined}
                autoplay={true}
                className="rounded-lg"
              />
            ) : (
              // Placeholder quando não há vídeo configurado
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/50 to-primary/10 transition-all duration-500">
                <div className="text-center space-y-4 px-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 border border-primary flex items-center justify-center transition-all duration-300">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <p className="text-sm text-muted-foreground transition-all duration-300">
                    Configure a URL do vídeo no componente HeroSection
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    Edite a variável VIDEO_URL no arquivo components/hero-section.tsx
                  </p>
                  <div className="text-xs text-primary/70 mt-2 space-y-1">
                    <p>⚠️ Use uma URL DIRETA de vídeo:</p>
                    <p>• Google Drive: https://drive.google.com/uc?export=view&id=FILE_ID</p>
                    <p>• Servidor próprio: https://seuservidor.com/video.mp4</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold glow-purple transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] active:scale-105"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("comprar")
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
          >
            Iniciar Minha Jornada
          </Button>
          <p className="text-sm text-muted-foreground mt-4 transition-all duration-300 hover:text-foreground/70">Acesso vitalício • Apenas R$ 37,00 • Garantia de 7 dias</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float transition-all duration-300 hover:scale-110 hover:text-primary/80 cursor-pointer"
        onClick={() => {
          const element = document.getElementById("comprar")
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }}
      >
        <ChevronDown className="w-8 h-8 text-primary transition-all duration-300" />
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"
import { CustomVideoPlayer } from "@/components/custom-video-player"

// URL do vídeo - Cole aqui a URL do seu vídeo
// 
// ⚠️ IMPORTANTE: Para usar o player customizado com barra roxa, você precisa de uma URL DIRETA do vídeo
//
// OPÇÕES RECOMENDADAS (GRATUITAS):
// 
// 1. 🥇 Bunny.net Stream (RECOMENDADO - 1GB grátis):
//    - Acesse: https://bunny.net/stream/
//    - Crie conta gratuita
//    - Faça upload do vídeo
//    - Copie a URL de streaming (formato: https://vz-xxxxx.b-cdn.net/xxxxx/play_480p.mp4)
//    - Cole aqui: const VIDEO_URL = "https://vz-xxxxx.b-cdn.net/xxxxx/play_480p.mp4"
//
// 2. 🥈 YouTube (GRATUITO - Ilimitado):
//    - Faça upload no YouTube
//    - Configure como "Não listado" ou "Público"
//    - Cole a URL: https://www.youtube.com/watch?v=VIDEO_ID
//    - ou: https://youtu.be/VIDEO_ID
//    - Funciona automaticamente (usa iframe do YouTube)
//
// 3. 🥉 Google Drive (pode ter problemas de CSP):
//    - Faça upload no Google Drive
//    - Compartilhe como "Qualquer pessoa com o link pode ver"
//    - Cole: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
//
// 4. Hospedagem própria (VPS, CDN):
//    - Upload em servidor próprio ou CDN
//    - Cole a URL direta: https://seuservidor.com/video.mp4
//
// FORMATOS ACEITOS:
// - MP4: .mp4 (recomendado)
// - WebM: .webm
// - OGG: .ogg
// - YouTube: URLs do YouTube/youtu.be
// - Qualquer URL direta de vídeo que o navegador suporte

// Cole aqui a URL do seu vídeo
// Exemplo Bunny.net iframe: https://iframe.mediadelivery.net/play/539276/06a6aff2-d8da-41dc-8942-ae5119eca3aa
// Exemplo Bunny.net direto: https://vz-xxxxx.b-cdn.net/xxxxx/play_480p.mp4
// Exemplo YouTube: https://www.youtube.com/watch?v=VIDEO_ID
// Exemplo Google Drive: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
// Exemplo servidor: https://seuservidor.com/video.mp4
const VIDEO_URL = "https://iframe.mediadelivery.net/play/539276/06a6aff2-d8da-41dc-8942-ae5119eca3aa" // Cole sua URL aqui

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

// Função para extrair ID do YouTube
function getYouTubeVideoId(url: string): string {
  if (!url) return ""
  
  let videoId = ""
  const watchMatch = url.match(/(?:youtube\.com\/watch\?v=)([^&\n?#]+)/)
  if (watchMatch) videoId = watchMatch[1]
  
  const youtuBeMatch = url.match(/(?:youtu\.be\/)([^&\n?#]+)/)
  if (youtuBeMatch) videoId = youtuBeMatch[1]
  
  const embedMatch = url.match(/(?:youtube\.com\/embed\/)([^&\n?#]+)/)
  if (embedMatch) videoId = embedMatch[1]
  
  return videoId
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
  
  // YouTube retorna vazio (será tratado separadamente com iframe)
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return ""
  }
  
  return url
}

// Função para detectar e processar URL do Bunny.net
function getBunnyNetUrl(url: string): { isIframe: boolean; iframeUrl?: string; directUrl?: string } {
  if (!url) return { isIframe: false }
  
  // Formato iframe: https://iframe.mediadelivery.net/play/LIBRARY_ID/VIDEO_ID
  const iframeMatch = url.match(/iframe\.mediadelivery\.net\/play\/(\d+)\/([a-zA-Z0-9-]+)/)
  if (iframeMatch) {
    return {
      isIframe: true,
      iframeUrl: url, // Usa o iframe diretamente
    }
  }
  
  // Formato direto: https://vz-xxxxx.b-cdn.net/xxxxx/play_480p.mp4
  if (url.includes("b-cdn.net") || url.includes("mediadelivery.net")) {
    return {
      isIframe: false,
      directUrl: url,
    }
  }
  
  return { isIframe: false }
}

export function HeroSection() {
  const videoUrl = processVideoUrl(VIDEO_URL)
  const hasVideo = Boolean(videoUrl)
  const isGoogleDrive = VIDEO_URL.includes("drive.google.com") && !VIDEO_URL.includes(".mp4") && !VIDEO_URL.includes(".webm")
  const isYouTube = VIDEO_URL.includes("youtube.com") || VIDEO_URL.includes("youtu.be")
  const bunnyNet = getBunnyNetUrl(VIDEO_URL)
  
  // Extrai o file ID do Google Drive
  let googleDriveFileId = ""
  if (isGoogleDrive) {
    const fileMatch = VIDEO_URL.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    if (fileMatch) {
      googleDriveFileId = fileMatch[1]
    }
  }
  
  // Extrai o ID do YouTube
  const youtubeVideoId = isYouTube ? getYouTubeVideoId(VIDEO_URL) : ""
  
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
            {bunnyNet.isIframe && bunnyNet.iframeUrl ? (
              // Bunny.net iframe embed
              <iframe
                src={bunnyNet.iframeUrl}
                className="absolute inset-0 w-full h-full rounded-lg"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ border: "none", width: "100%", height: "100%" }}
                loading="eager"
              />
            ) : bunnyNet.directUrl ? (
              // Bunny.net URL direta (player customizado)
              <CustomVideoPlayer 
                videoUrl={bunnyNet.directUrl}
                autoplay={true}
                className="rounded-lg"
              />
            ) : isYouTube && youtubeVideoId ? (
              // YouTube iframe (alternativa gratuita)
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=0&disablekb=1&fs=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${youtubeVideoId}&iv_load_policy=3&cc_load_policy=0&mute=0`}
                className="absolute inset-0 w-full h-full rounded-lg"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                style={{ border: "none", width: "100%", height: "100%" }}
              />
            ) : hasVideo ? (
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

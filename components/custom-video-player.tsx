"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw } from "lucide-react"

interface CustomVideoPlayerProps {
  videoUrl: string
  autoplay?: boolean
  className?: string
}

export function CustomVideoPlayer({ videoUrl, autoplay = true, className = "" }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [useIframe, setUseIframe] = useState(false)

  // Atualiza o tempo atual e a barra de progresso
  const updateProgress = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const total = videoRef.current.duration
      setCurrentTime(current)
      setDuration(total || 0)

      // Atualiza a barra de progresso visual
      if (progressBarRef.current && total > 0) {
        const percentage = (current / total) * 100
        progressBarRef.current.style.width = `${percentage}%`
      }
    }
  }

  // Formata tempo em MM:SS
  const formatTime = (seconds: number): string => {
    if (!isFinite(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Rewind 10 segundos
  const rewind10 = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10)
    }
  }

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Ajustar volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  // Clique na barra de progresso para pular
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration > 0) {
      const progressContainer = e.currentTarget
      const rect = progressContainer.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = clickX / rect.width
      videoRef.current.currentTime = percentage * duration
    }
  }

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  // Event listeners
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Se for Google Drive, tenta usar iframe diretamente (mais confiável)
    if (videoUrl.includes("drive.google.com") && !videoUrl.includes(".mp4") && !videoUrl.includes(".webm")) {
      const fileIdMatch = videoUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || videoUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/)
      if (fileIdMatch) {
        // Aguarda um pouco para ver se o vídeo HTML5 carrega, se não, usa iframe
        const timeout = setTimeout(() => {
          if (isLoading && !video.duration) {
            setUseIframe(true)
            setHasError(false)
          }
        }, 3000)
        
        return () => clearTimeout(timeout)
      }
    }

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
      setIsLoading(false)
      setHasError(false)
    }

    const handleTimeUpdate = () => {
      updateProgress()
    }

    const handlePlay = () => {
      setIsPlaying(true)
      setIsLoading(false)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
      if (progressBarRef.current) {
        progressBarRef.current.style.width = "0%"
      }
    }

    const handleError = (e: Event) => {
      console.error("Erro ao carregar vídeo:", e)
      setIsLoading(false)
      setHasError(true)
      
      // Se for Google Drive e não funcionou, tenta usar iframe
      if (video.src.includes("drive.google.com")) {
        const currentSrc = video.src
        // Tenta extrair o file ID e usar iframe
        const fileIdMatch = currentSrc.match(/[?&]id=([a-zA-Z0-9_-]+)/)
        if (fileIdMatch) {
          setUseIframe(true)
        }
      }
    }

    const handleCanPlay = () => {
      setIsLoading(false)
    }

    const handleWaiting = () => {
      setIsLoading(true)
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)
    video.addEventListener("error", handleError)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("waiting", handleWaiting)
    document.addEventListener("fullscreenchange", handleFullscreenChange)

    // Autoplay com fallback para muted
    if (autoplay) {
      const attemptPlay = async () => {
        try {
          await video.play()
          setIsPlaying(true)
        } catch (error: any) {
          console.log("Autoplay bloqueado:", error)
          // Tenta autoplay mutado como fallback
          if (error.name === "NotAllowedError") {
            video.muted = true
            setIsMuted(true)
            try {
              await video.play()
              setIsPlaying(true)
            } catch (mutedError) {
              console.log("Autoplay mutado também bloqueado:", mutedError)
              setIsPlaying(false)
            }
          } else {
            setIsPlaying(false)
          }
        }
      }
      attemptPlay()
    }

    // Mostrar/ocultar controles ao mover o mouse
    let controlsTimeout: NodeJS.Timeout
    const handleMouseMove = () => {
      setShowControls(true)
      clearTimeout(controlsTimeout)
      controlsTimeout = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false)
        }
      }, 3000)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", () => setShowControls(true))
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
      video.removeEventListener("error", handleError)
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("waiting", handleWaiting)
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
      clearTimeout(controlsTimeout)
    }
  }, [autoplay, isPlaying, videoUrl])

  // Se precisar usar iframe (fallback para Google Drive)
  if (useIframe && videoUrl.includes("drive.google.com")) {
    const fileIdMatch = videoUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || videoUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/)
    const fileId = fileIdMatch ? fileIdMatch[1] : ""
    const iframeUrl = `https://drive.google.com/file/d/${fileId}/preview?autoplay=1&mute=0`
    
    return (
      <div
        ref={containerRef}
        className={`relative w-full h-full bg-black rounded-lg overflow-hidden ${className}`}
      >
        <iframe
          src={iframeUrl}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ border: "none" }}
        />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full bg-black rounded-lg overflow-hidden group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => {
        if (isPlaying) {
          setTimeout(() => setShowControls(false), 2000)
        }
      }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-contain"
        playsInline
        preload="auto"
        onClick={togglePlay}
        crossOrigin="anonymous"
        onError={(e) => {
          console.error("Erro no elemento de vídeo:", e)
          setIsLoading(false)
          setHasError(true)
          // Tenta usar iframe se for Google Drive
          if (videoUrl.includes("drive.google.com")) {
            const fileIdMatch = videoUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || videoUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/)
            if (fileIdMatch) {
              setUseIframe(true)
            }
          }
        }}
      />

      {/* Loading Indicator */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error Message */}
      {hasError && !useIframe && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <div className="text-center space-y-4 px-4 max-w-md">
            <div className="w-16 h-16 mx-auto rounded-full bg-destructive/20 border-2 border-destructive flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <div>
              <p className="text-white font-semibold text-lg mb-2">Erro ao carregar vídeo</p>
              <p className="text-white/70 text-sm">
                O Google Drive não permite streaming direto de vídeos. 
                Por favor, use um serviço de hospedagem de vídeo adequado ou hospede o vídeo em um servidor próprio.
              </p>
            </div>
            <div className="text-xs text-white/50 space-y-1">
              <p>💡 Alternativas recomendadas:</p>
              <p>• YouTube (público)</p>
              <p>• Vimeo</p>
              <p>• Servidor próprio / CDN</p>
              <p>• Cloudflare Stream</p>
            </div>
          </div>
        </div>
      )}

      {/* Controls Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Progress Bar Container - Barra roxa igual à imagem */}
        <div
          className="w-full h-2 bg-primary/20 cursor-pointer relative"
          onClick={handleProgressClick}
        >
          {/* Progress Bar - ROXA brilhante que acompanha o vídeo */}
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-100 ease-linear"
            style={{ 
              width: "0%",
              boxShadow: "0 0 10px rgba(147, 51, 234, 0.8)"
            }}
          />
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between px-4 py-3 gap-4">
          {/* Left Controls */}
          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5" fill="currentColor" />
              )}
            </button>

            {/* Rewind 10s - Estilo igual à imagem */}
            <button
              onClick={rewind10}
              className="relative w-10 h-10 flex items-center justify-center text-white hover:text-primary/80 transition-all group/rewind"
              aria-label="Retroceder 10 segundos"
            >
              {/* Círculo branco com borda (igual à imagem) */}
              <div className="absolute inset-0 rounded-full border-2 border-white group-hover/rewind:border-primary transition-colors bg-transparent" />
              {/* Container para ícone e número */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Ícone de seta circular (refresh) */}
                <RotateCcw className="w-5 h-5 absolute" strokeWidth={2} />
                {/* Número 10 no centro (menor e mais discreto) */}
                <span className="text-[9px] font-bold leading-none absolute -mt-0.5">10</span>
              </div>
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
                aria-label={isMuted ? "Ativar som" : "Silenciar"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider-purple"
              />
            </div>

            {/* Time Display */}
            <div className="text-white text-sm font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center">
            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
              aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
            >
              {isFullscreen ? (
                <Minimize className="w-5 h-5" />
              ) : (
                <Maximize className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


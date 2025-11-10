"use client"

import { memo, useState, useEffect } from "react"

interface BunnyIframeProps {
  src: string
  className?: string
}

export const BunnyIframe = memo(function BunnyIframe({ src, className = "" }: BunnyIframeProps) {
  const [iframeSrc, setIframeSrc] = useState<string>("")
  const [hasInitialized, setHasInitialized] = useState(false)

  useEffect(() => {
    // Define o src apenas uma vez quando o componente monta
    if (!hasInitialized && src) {
      setIframeSrc(src)
      setHasInitialized(true)
    }
  }, [src, hasInitialized])

  // Se ainda não inicializou, não renderiza o iframe
  if (!hasInitialized || !iframeSrc) {
    return null
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <iframe
        key="bunny-iframe-single"
        src={iframeSrc}
        className={className}
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        allowFullScreen
        loading="eager"
        style={{
          border: 0,
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%"
        }}
      />
    </div>
  )
}, (prevProps, nextProps) => {
  // Comparação customizada: só re-renderiza se o src realmente mudou
  return prevProps.src === nextProps.src
})


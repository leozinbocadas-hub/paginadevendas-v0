// Facebook Pixel Helper Functions
// Para rastrear eventos de conversão no Meta Ads

declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, any>
    ) => void
  }
}

// Rastrear evento de conversão (Purchase/Lead)
export function trackConversion(eventName: string = "Lead", params?: Record<string, any>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params)
  }
}

// Rastrear evento de página visualizada
export function trackPageView() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView")
  }
}

// Rastrear evento de clique no botão de compra
export function trackPurchaseClick() {
  trackConversion("InitiateCheckout", {
    content_name: "Biblioteca Mística - Portal do Conhecimento Oculto",
    content_category: "Digital Product",
    value: 37.0,
    currency: "BRL",
  })
}

// Rastrear evento de compra concluída (quando o usuário completar o checkout)
export function trackPurchase() {
  trackConversion("Purchase", {
    content_name: "Biblioteca Mística - Portal do Conhecimento Oculto",
    content_category: "Digital Product",
    value: 37.0,
    currency: "BRL",
  })
}

// Rastrear evento de Lead (quando o usuário chega na página de checkout)
export function trackLead() {
  trackConversion("Lead", {
    content_name: "Biblioteca Mística - Portal do Conhecimento Oculto",
    content_category: "Digital Product",
  })
}


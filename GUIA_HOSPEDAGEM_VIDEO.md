# 🎥 Guia de Hospedagem de Vídeo para VSL

## ⚡ Opção Recomendada: Cloudflare Stream (GRÁTIS)

### Por que Cloudflare Stream?
- ✅ **100% GRÁTIS** até 100.000 minutos/mês
- ✅ URLs diretas de streaming (funciona com player customizado)
- ✅ CDN global (vídeo carrega rápido em qualquer lugar)
- ✅ Sem marca d'água
- ✅ Controle total sobre o vídeo
- ✅ Suporta autoplay

### Como configurar:

1. **Criar conta no Cloudflare Stream:**
   - Acesse: https://www.cloudflare.com/products/cloudflare-stream/
   - Clique em "Sign Up" (é grátis)
   - Faça login na sua conta

2. **Fazer upload do vídeo:**
   - No painel do Cloudflare, vá em "Stream"
   - Clique em "Upload a video"
   - Selecione seu arquivo de vídeo
   - Aguarde o processamento (pode levar alguns minutos)

3. **Obter a URL direta:**
   - Após o processamento, clique no vídeo
   - Copie a URL que aparece (algo como: `https://customer-xxxxx.cloudflarestream.com/xxxxx/manifest/video.m3u8`)
   - **OU** use a URL direta MP4 (se disponível)

4. **Configurar no código:**
   - Abra `components/hero-section.tsx`
   - Localize: `const VIDEO_URL = "..."`
   - Cole a URL do Cloudflare Stream

---

## 🐰 Alternativa: Bunny.net Stream

### Vantagens:
- ✅ Preço muito baixo (US$ 0.01 por GB de armazenamento)
- ✅ URLs diretas de streaming
- ✅ CDN rápido
- ✅ Sem limites de tráfego

### Como configurar:

1. **Criar conta:**
   - Acesse: https://bunny.net/stream/
   - Crie uma conta gratuita

2. **Fazer upload:**
   - No painel, vá em "Stream"
   - Faça upload do vídeo
   - Aguarde processamento

3. **Obter URL:**
   - Copie a URL de streaming fornecida
   - Cole no código

---

## ☁️ Alternativa: AWS S3 + CloudFront

### Vantagens:
- ✅ Controle total
- ✅ Escalável
- ✅ URLs diretas

### Desvantagens:
- ⚠️ Requer conhecimento técnico
- ⚠️ Configuração mais complexa

### Como configurar:

1. **Criar bucket no S3:**
   - Acesse AWS Console
   - Crie um bucket S3
   - Faça upload do vídeo
   - Configure permissões públicas

2. **Configurar CloudFront:**
   - Crie uma distribuição CloudFront
   - Configure o bucket S3 como origem
   - Obtenha a URL do CloudFront

3. **Usar no código:**
   - Cole a URL do CloudFront no `VIDEO_URL`

---

## 📝 Configuração no Código

Após obter a URL do vídeo, configure assim:

```typescript
// components/hero-section.tsx

// Para Cloudflare Stream:
const VIDEO_URL = "https://customer-xxxxx.cloudflarestream.com/xxxxx/manifest/video.m3u8"

// Para Bunny.net:
const VIDEO_URL = "https://vz-xxxxx.b-cdn.net/xxxxx/play_480p.mp4"

// Para AWS CloudFront:
const VIDEO_URL = "https://d1234567890.cloudfront.net/video.mp4"
```

---

## ⚠️ Importante

- **Formato recomendado:** MP4 (H.264)
- **Tamanho:** Otimize o vídeo antes do upload (use HandBrake ou similar)
- **Permissões:** Certifique-se de que o vídeo está público/acessível
- **Teste:** Sempre teste a URL diretamente no navegador antes de usar no código

---

## 🎯 Recomendação Final

**Para começar rápido e grátis:** Use **Cloudflare Stream**
- É gratuito
- Fácil de configurar
- Funciona perfeitamente com o player customizado
- CDN global = vídeo carrega rápido

**Link direto:** https://www.cloudflare.com/products/cloudflare-stream/


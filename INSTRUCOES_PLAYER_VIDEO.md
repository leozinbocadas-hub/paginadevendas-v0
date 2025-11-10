# 🎥 Player de Vídeo Customizado - Instruções

## ✅ O que foi implementado

Um player de vídeo customizado com:
- ✅ Barra de progresso **ROXA** que acompanha a reprodução do vídeo
- ✅ Controles customizados (play/pause, rewind 10s, volume, fullscreen)
- ✅ Autoplay com áudio
- ✅ Visual limpo e profissional
- ✅ Sem informações do YouTube ou outros serviços

## 📋 Como configurar

### Opção 1: Google Drive (Recomendado)

1. **Faça upload do vídeo no Google Drive**
2. **Compartilhe o arquivo:**
   - Clique com botão direito no arquivo > **Compartilhar**
   - Selecione **"Qualquer pessoa com o link pode ver"**
   - Copie o link compartilhado

3. **Extraia o FILE_ID:**
   - O link será algo como: `https://drive.google.com/file/d/1ABC123xyz456/view?usp=sharing`
   - O `FILE_ID` é: `1ABC123xyz456`

4. **Configure no código:**
   - Abra `components/hero-section.tsx`
   - Localize a linha: `const VIDEO_URL = ""`
   - Cole: `https://drive.google.com/uc?export=view&id=FILE_ID`
   - Substitua `FILE_ID` pelo ID do seu arquivo

**Exemplo:**
```typescript
const VIDEO_URL = "https://drive.google.com/uc?export=view&id=1ABC123xyz456"
```

### Opção 2: Servidor próprio / CDN

1. **Faça upload do vídeo** em um servidor ou CDN (Cloudflare, AWS S3, etc.)
2. **Obtenha a URL direta** do arquivo (ex: `https://seuservidor.com/video.mp4`)
3. **Configure no código:**
   ```typescript
   const VIDEO_URL = "https://seuservidor.com/video.mp4"
   ```

### Opção 3: Outros serviços

- **Vimeo:** Use o link direto do vídeo (se disponível)
- **Cloudflare Stream:** Use a URL de streaming fornecida
- **AWS CloudFront:** Use a URL do CloudFront

## 🎨 Recursos do Player

- **Barra de progresso roxa:** Acompanha a reprodução do vídeo em tempo real
- **Controles:**
  - ▶️ Play/Pause
  - ⏪ Retroceder 10 segundos (com círculo e número "10")
  - 🔊 Volume (com slider roxo)
  - ⛶ Fullscreen
- **Autoplay:** Inicia automaticamente ao carregar a página
- **Tempo de vídeo:** Mostra o tempo atual e total (ex: 1:23 / 5:45)

## ⚠️ Observações Importantes

1. **Google Drive pode ter limitações:**
   - Dependendo das configurações de compartilhamento, o Google Drive pode bloquear acesso direto
   - Se não funcionar, tente usar um serviço de hospedagem de vídeo dedicado

2. **Autoplay com áudio:**
   - Navegadores modernos podem bloquear autoplay com áudio
   - O vídeo tentará iniciar automaticamente, mas pode precisar de interação do usuário

3. **Formatos suportados:**
   - MP4 (recomendado)
   - WebM
   - OGG
   - Qualquer formato suportado pelo navegador

## 🐛 Solução de Problemas

### O vídeo não carrega
- Verifique se a URL está correta
- Verifique se o arquivo está compartilhado corretamente (Google Drive)
- Tente usar uma URL direta de um servidor próprio

### O vídeo não inicia automaticamente
- Alguns navegadores bloqueiam autoplay com áudio
- O usuário pode precisar clicar no vídeo para iniciar

### A barra de progresso não aparece
- Verifique se o vídeo está carregando corretamente
- Verifique o console do navegador para erros

## 📝 Exemplo Completo

```typescript
// components/hero-section.tsx

// Para Google Drive:
const VIDEO_URL = "https://drive.google.com/uc?export=view&id=1ABC123xyz456"

// Para servidor próprio:
const VIDEO_URL = "https://seuservidor.com/video.mp4"

// Para Vimeo (se tiver link direto):
const VIDEO_URL = "https://vimeo.com/123456789"
```

## 🎯 Próximos Passos

1. Faça upload do seu vídeo
2. Configure a URL no código
3. Teste no navegador
4. Ajuste conforme necessário

---

**Dúvidas?** Verifique o código em `components/custom-video-player.tsx` para mais detalhes.


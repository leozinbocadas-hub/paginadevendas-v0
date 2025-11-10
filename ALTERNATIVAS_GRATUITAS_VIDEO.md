# 🎥 Alternativas Gratuitas para Hospedar Vídeo

## ⚡ Opções que Funcionam com Player HTML5 Customizado

---

## 1. 🎬 **Vimeo (GRÁTIS - Recomendado)**

### Vantagens:
- ✅ **Plano gratuito disponível**
- ✅ **Sem anúncios**
- ✅ **Alta qualidade**
- ✅ **URLs diretas de vídeo disponíveis** (em alguns casos)
- ✅ **Player personalizável**

### Como usar:

1. **Criar conta:** https://vimeo.com/signup
2. **Fazer upload do vídeo**
3. **Configurar privacidade:**
   - Vá em Settings > Privacy
   - Escolha "Anyone with the link"
4. **Obter link direto:**
   - Vimeo não fornece link direto MP4 no plano gratuito
   - **MAS** você pode usar o embed do Vimeo (funciona bem)

### Configuração no código:

```typescript
// Para usar embed do Vimeo (funciona, mas não é player customizado)
// Você precisaria adaptar o código para suportar Vimeo embed
```

**Link:** https://vimeo.com/

---

## 2. 📦 **Bunny.net Stream (GRÁTIS - 1GB)**

### Vantagens:
- ✅ **1GB GRÁTIS** para sempre
- ✅ **URLs diretas de streaming**
- ✅ **CDN global**
- ✅ **Funciona perfeitamente com player HTML5**
- ✅ **Sem marca d'água**

### Como usar:

1. **Criar conta:** https://bunny.net/stream/
2. **Fazer upload do vídeo**
3. **Obter URL de streaming:**
   - No painel, vá em "Stream Library"
   - Clique no vídeo
   - Copie a URL de streaming (formato: `https://vz-xxxxx.b-cdn.net/xxxxx/play_480p.mp4`)

### Configuração no código:

```typescript
const VIDEO_URL = "https://vz-xxxxx.b-cdn.net/xxxxx/play_480p.mp4"
```

**Link:** https://bunny.net/stream/

---

## 3. 🌊 **Wave.video (GRÁTIS - Limitado)**

### Vantagens:
- ✅ **Plano gratuito**
- ✅ **Player personalizável**
- ✅ **Ferramentas de edição**

### Desvantagens:
- ⚠️ Limitações no plano gratuito
- ⚠️ Pode ter marca d'água

**Link:** https://wave.video/

---

## 4. 🎥 **Kapwing (GRÁTIS)**

### Vantagens:
- ✅ **Totalmente gratuito**
- ✅ **Ferramentas de edição**
- ✅ **Upload ilimitado**

### Desvantagens:
- ⚠️ Pode ter marca d'água
- ⚠️ URLs diretas podem não estar disponíveis

**Link:** https://www.kapwing.com/

---

## 5. 📹 **Vidnoz Flex (GRÁTIS)**

### Vantagens:
- ✅ **Gratuito**
- ✅ **Sem anúncios**
- ✅ **Rastreamento de visualizações**

**Link:** https://pt.vidnoz.com/

---

## 6. 🎬 **YouTube (GRÁTIS - Sempre Funciona)**

### Vantagens:
- ✅ **100% gratuito**
- ✅ **Ilimitado**
- ✅ **CDN global**
- ✅ **Sempre funciona**

### Desvantagens:
- ⚠️ Mostra controles do YouTube (mas podemos ocultar)
- ⚠️ Pode mostrar vídeos relacionados no final

### Como usar:

1. **Fazer upload no YouTube**
2. **Configurar como "Não listado" ou "Público"**
3. **Usar embed do YouTube** (já temos código para isso)

### Configuração no código:

```typescript
// Já temos suporte para YouTube no código
const VIDEO_URL = "https://www.youtube.com/watch?v=VIDEO_ID"
// ou
const VIDEO_URL = "https://youtu.be/VIDEO_ID"
```

**Link:** https://www.youtube.com/

---

## 🏆 **RECOMENDAÇÃO FINAL**

### Para seu caso, recomendo nesta ordem:

1. **🥇 Bunny.net Stream** (1GB grátis, URLs diretas, funciona perfeitamente)
2. **🥈 YouTube** (sempre funciona, ilimitado, mas mostra controles)
3. **🥉 Vimeo** (gratuito, mas pode não ter URL direta no plano free)

---

## 📝 **Tutorial Rápido: Bunny.net Stream**

### Passo a passo:

1. **Acesse:** https://bunny.net/stream/
2. **Clique em "Sign Up"** (é grátis)
3. **Crie sua conta**
4. **No painel, vá em "Stream Library"**
5. **Clique em "Upload Video"**
6. **Faça upload do seu vídeo**
7. **Aguarde o processamento**
8. **Clique no vídeo processado**
9. **Copie a URL de streaming** (algo como: `https://vz-xxxxx.b-cdn.net/xxxxx/play_480p.mp4`)
10. **Cole no código:**

```typescript
// components/hero-section.tsx
const VIDEO_URL = "https://vz-xxxxx.b-cdn.net/xxxxx/play_480p.mp4"
```

### Pronto! Funciona perfeitamente com o player customizado! 🎉

---

## ⚠️ **Importante**

- **Bunny.net** oferece 1GB grátis para sempre
- Se seu vídeo for maior que 1GB, você pode:
  - Comprimir o vídeo (usar HandBrake ou similar)
  - Ou pagar apenas pelo que usar (preço muito baixo)
- **YouTube** é ilimitado, mas mostra controles do YouTube

---

## 🎯 **Qual Escolher?**

- **Quer URL direta e player 100% customizado?** → **Bunny.net Stream**
- **Quer algo ilimitado e não se importa com controles do YouTube?** → **YouTube**
- **Quer algo intermediário?** → **Vimeo**

---

**Dúvidas?** Teste o Bunny.net Stream primeiro - é rápido, fácil e funciona perfeitamente!


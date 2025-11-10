# 🎥 Tutorial: Hospedar Vídeo na VPS Ubuntu

## 📋 Pré-requisitos

- VPS Ubuntu (20.04 ou superior recomendado)
- Acesso SSH à VPS
- Domínio configurado (opcional, mas recomendado)
- Nginx ou Apache instalado

---

## 🚀 Passo 1: Conectar na VPS via SSH

```bash
ssh usuario@seu-ip-vps
# ou
ssh usuario@seu-dominio.com
```

---

## 📁 Passo 2: Criar Diretório para Vídeos

```bash
# Criar diretório para vídeos
sudo mkdir -p /var/www/videos

# Dar permissões corretas
sudo chown -R $USER:$USER /var/www/videos
sudo chmod -R 755 /var/www/videos
```

**Alternativa (mais simples):**
```bash
# Criar na pasta home do usuário
mkdir -p ~/videos
cd ~/videos
```

---

## 📤 Passo 3: Fazer Upload do Vídeo

### Opção A: Usando SCP (do seu computador Windows)

No **PowerShell** ou **CMD** do seu computador Windows:

```powershell
# Navegue até a pasta onde está o vídeo
cd C:\caminho\para\seu\video

# Faça upload do vídeo
scp seu-video.mp4 usuario@seu-ip-vps:/var/www/videos/

# Ou se criou na pasta home:
scp seu-video.mp4 usuario@seu-ip-vps:~/videos/
```

### Opção B: Usando WinSCP (Interface Gráfica)

1. **Baixe e instale o WinSCP:** https://winscp.net/
2. **Conecte na sua VPS:**
   - Host: `seu-ip-vps` ou `seu-dominio.com`
   - Usuário: seu usuário
   - Senha: sua senha
3. **Navegue até `/var/www/videos`** ou `~/videos`
4. **Arraste e solte o arquivo de vídeo**

### Opção C: Usando FileZilla (FTP/SFTP)

1. **Baixe o FileZilla:** https://filezilla-project.org/
2. **Conecte via SFTP:**
   - Host: `sftp://seu-ip-vps`
   - Usuário: seu usuário
   - Senha: sua senha
   - Porta: 22
3. **Faça upload do vídeo**

### Opção D: Usando wget/curl (se o vídeo estiver online)

Na VPS:

```bash
cd /var/www/videos
wget https://url-do-video-online.com/video.mp4
# ou
curl -O https://url-do-video-online.com/video.mp4
```

---

## 🌐 Passo 4: Configurar Nginx para Servir Vídeos

### Instalar Nginx (se não tiver)

```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Configurar Nginx para Vídeos

```bash
# Criar arquivo de configuração
sudo nano /etc/nginx/sites-available/videos
```

**Cole este conteúdo:**

```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;
    # ou use o IP: server_name seu-ip-vps;

    # Tamanho máximo de upload (ajuste conforme necessário)
    client_max_body_size 500M;

    # Diretório raiz
    root /var/www/videos;
    index index.html;

    # Configurações para vídeos
    location / {
        try_files $uri $uri/ =404;
        
        # Headers para streaming de vídeo
        add_header Accept-Ranges bytes;
        add_header Cache-Control "public, max-age=3600";
        
        # CORS (se necessário)
        add_header Access-Control-Allow-Origin "*";
        add_header Access-Control-Allow-Methods "GET, HEAD, OPTIONS";
    }

    # Otimização para arquivos de vídeo
    location ~* \.(mp4|webm|ogg|mov|avi)$ {
        # Streaming de vídeo
        add_header Accept-Ranges bytes;
        add_header Cache-Control "public, max-age=86400";
        
        # CORS
        add_header Access-Control-Allow-Origin "*";
        add_header Access-Control-Allow-Methods "GET, HEAD, OPTIONS";
        add_header Access-Control-Allow-Headers "Range";
        
        # Suporte para range requests (necessário para streaming)
        proxy_set_header Range $http_range;
        proxy_set_header If-Range $http_if_range;
        
        # Timeout maior para vídeos grandes
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }
}
```

**Salve e saia:** `Ctrl + X`, depois `Y`, depois `Enter`

### Ativar o site

```bash
# Criar link simbólico
sudo ln -s /etc/nginx/sites-available/videos /etc/nginx/sites-enabled/

# Remover site padrão (opcional)
sudo rm /etc/nginx/sites-enabled/default

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

---

## 🔒 Passo 5: Configurar HTTPS com Let's Encrypt (Recomendado)

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obter certificado SSL
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com

# Renovação automática (já configurado automaticamente)
sudo certbot renew --dry-run
```

---

## 📝 Passo 6: Obter a URL do Vídeo

Após configurar, sua URL será:

```
http://seu-dominio.com/seu-video.mp4
# ou
https://seu-dominio.com/seu-video.mp4 (com SSL)
```

**Exemplo:**
```
https://lpbiblioteca.produtohub.store/vsl.mp4
```

---

## ⚙️ Passo 7: Configurar no Código

No arquivo `components/hero-section.tsx`:

```typescript
const VIDEO_URL = "https://seu-dominio.com/seu-video.mp4"
```

---

## 🔧 Configurações Adicionais

### Otimizar Vídeo (Reduzir Tamanho)

Na sua VPS ou no seu computador, instale o FFmpeg:

```bash
# Ubuntu
sudo apt install ffmpeg -y
```

**Comprimir vídeo:**
```bash
ffmpeg -i video-original.mp4 -vcodec h264 -acodec mp2 video-otimizado.mp4
```

**Reduzir qualidade (mais compressão):**
```bash
ffmpeg -i video-original.mp4 -vcodec h264 -crf 28 -acodec mp2 video-otimizado.mp4
```

### Configurar Firewall

```bash
# Permitir HTTP e HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Verificar status
sudo ufw status
```

### Monitorar Espaço em Disco

```bash
# Ver espaço usado
df -h

# Ver tamanho dos vídeos
du -sh /var/www/videos/*
```

---

## 🐛 Solução de Problemas

### Erro 403 Forbidden

```bash
# Verificar permissões
sudo chmod -R 755 /var/www/videos
sudo chown -R www-data:www-data /var/www/videos
```

### Vídeo não carrega

1. **Verificar se o arquivo existe:**
   ```bash
   ls -lh /var/www/videos/
   ```

2. **Verificar logs do Nginx:**
   ```bash
   sudo tail -f /var/log/nginx/error.log
   ```

3. **Testar acesso direto:**
   ```bash
   curl -I http://seu-dominio.com/seu-video.mp4
   ```

### Vídeo não faz streaming (não pula partes)

Certifique-se de que o Nginx está configurado com `Accept-Ranges` (já incluído no exemplo acima).

---

## 📊 Exemplo Completo

### Estrutura de Arquivos

```
/var/www/videos/
├── vsl.mp4
├── video-promocional.mp4
└── index.html (opcional)
```

### URL Final

```
https://lpbiblioteca.produtohub.store/vsl.mp4
```

### Configuração no Código

```typescript
// components/hero-section.tsx
const VIDEO_URL = "https://lpbiblioteca.produtohub.store/vsl.mp4"
```

---

## ✅ Checklist Final

- [ ] Vídeo enviado para VPS
- [ ] Nginx instalado e configurado
- [ ] Permissões corretas no diretório
- [ ] Firewall configurado (portas 80 e 443)
- [ ] SSL configurado (Let's Encrypt)
- [ ] URL testada no navegador
- [ ] URL configurada no código

---

## 🎯 Próximos Passos

1. **Fazer upload do vídeo** usando um dos métodos acima
2. **Configurar Nginx** conforme o tutorial
3. **Testar a URL** diretamente no navegador
4. **Configurar no código** do projeto
5. **Testar na landing page**

---

## 💡 Dicas

- **Use nomes de arquivo simples:** `vsl.mp4` ao invés de `Video Sales Letter Final Version 2024.mp4`
- **Otimize o vídeo antes do upload** para reduzir tamanho e tempo de carregamento
- **Use HTTPS** para melhor segurança e performance
- **Configure cache** para melhorar performance (já incluído no exemplo)
- **Monitore o uso de banda** da sua VPS

---

**Dúvidas?** Verifique os logs do Nginx ou teste a URL diretamente no navegador primeiro!


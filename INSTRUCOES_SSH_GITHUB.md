# 🔑 Instruções para Adicionar Chave SSH no GitHub

## ✅ Chave SSH Criada com Sucesso!

Sua chave SSH foi criada e está pronta para ser adicionada no GitHub.

## 📋 Chave Pública (Copie esta chave):

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFE25z1aXdZ9EqSO5PH3QowjKmiPkL4wpVebqt+0cYg4 github-paginadevendas
```

## 🚀 Passo a Passo para Adicionar no GitHub:

### 1. Acesse o GitHub
- Vá para: https://github.com/settings/keys
- Ou: GitHub → Settings → SSH and GPG keys

### 2. Adicione a Nova Chave
- Clique em **"New SSH key"** ou **"Add SSH key"**
- **Title:** Digite um nome descritivo (ex: "Página de Vendas - Windows")
- **Key type:** Deixe como "Authentication Key"
- **Key:** Cole a chave pública acima (toda a linha começando com `ssh-ed25519`)
- Clique em **"Add SSH key"**

### 3. Confirme a Senha
- Digite sua senha do GitHub para confirmar

### 4. Teste a Conexão
Após adicionar a chave no GitHub, teste a conexão executando:

```powershell
ssh -T git@github.com
```

Você deve ver uma mensagem como:
```
Hi leozinbocadas-hub! You've successfully authenticated, but GitHub does not provide shell access.
```

## ✅ Configurações Aplicadas:

- ✅ Chave SSH criada: `id_ed25519_github`
- ✅ Arquivo de configuração SSH criado: `~/.ssh/config`
- ✅ Remote do repositório atualizado para SSH: `git@github.com:leozinbocadas-hub/paginadevendas-v0.git`

## 🎯 Próximos Passos:

Depois de adicionar a chave no GitHub:

1. **Teste a conexão:**
   ```powershell
   ssh -T git@github.com
   ```

2. **Faça o push:**
   ```powershell
   git push
   ```

## 📝 Localização dos Arquivos:

- **Chave Privada:** `C:\Users\Leonardo\.ssh\id_ed25519_github`
- **Chave Pública:** `C:\Users\Leonardo\.ssh\id_ed25519_github.pub`
- **Config SSH:** `C:\Users\Leonardo\.ssh\config`

## ⚠️ Importante:

- **NUNCA compartilhe a chave privada** (id_ed25519_github)
- **Apenas a chave pública** (id_ed25519_github.pub) deve ser adicionada no GitHub
- Mantenha a chave privada segura e não a compartilhe com ninguém

## 🔒 Segurança:

A chave foi criada sem senha para facilitar o uso, mas se você quiser adicionar uma senha de proteção, pode criar uma nova chave com:

```powershell
ssh-keygen -t ed25519 -C "github-paginadevendas" -f $env:USERPROFILE\.ssh\id_ed25519_github
```

(Digite uma senha quando solicitado)

---

**Dúvidas?** Consulte a documentação do GitHub: https://docs.github.com/en/authentication/connecting-to-github-with-ssh



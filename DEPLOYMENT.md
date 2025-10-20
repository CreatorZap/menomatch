# 🚀 MenoMatch - Guia de Deploy na Vercel

## ✅ Status: PRONTO PARA DEPLOY!

Este projeto está 100% configurado e otimizado para deploy na Vercel.

---

## 📋 Pré-requisitos

- [x] Conta na Vercel (https://vercel.com)
- [x] Repositório Git (GitHub, GitLab, ou Bitbucket)
- [x] Node.js 18.x ou superior (para desenvolvimento local)

---

## 🚀 Deploy Rápido (3 Passos)

### **Opção 1: Deploy via CLI (Recomendado)**

```bash
# 1. Instalar Vercel CLI (se ainda não tiver)
npm install -g vercel

# 2. Fazer login na Vercel
vercel login

# 3. Deploy!
vercel --prod
```

### **Opção 2: Deploy via Dashboard**

1. Acesse https://vercel.com/new
2. Importe seu repositório Git
3. Configure o projeto:
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`
4. Adicione variáveis de ambiente (veja seção abaixo)
5. Clique em **Deploy**!

---

## 🔐 Variáveis de Ambiente (Environment Variables)

Configure estas variáveis no Dashboard da Vercel:

### **Obrigatórias:**

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `REACT_APP_GA_MEASUREMENT_ID` | `G-0MWJ1MZHS0` | Google Analytics 4 ID (já configurado) |
| `REACT_APP_SITE_URL` | `https://menomatch.com` | URL do seu site (para SEO) |

### **Opcionais (ConvertKit):**

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `REACT_APP_CONVERTKIT_API_KEY` | `sua_api_key` | Para integração de email |
| `REACT_APP_CONVERTKIT_FORM_ID` | `seu_form_id` | ID do formulário ConvertKit |

### **Como adicionar na Vercel:**

1. Dashboard → Projeto → Settings → Environment Variables
2. Adicione cada variável
3. Escolha o ambiente: Production, Preview, ou Development
4. Salve e faça redeploy

---

## 📁 Estrutura do Projeto

```
MenoMatch/
├── public/               # Arquivos estáticos
│   ├── index.html       # ✅ Com Google Analytics
│   ├── logo192.png      # ✅ Logo otimizado
│   ├── logo512.png      # ✅ Logo para PWA
│   ├── manifest.json    # ✅ PWA configurado
│   ├── og-image.jpg     # ✅ Open Graph image
│   └── favicon.ico      # ✅ Favicon
├── src/
│   ├── components/      # Componentes React
│   ├── pages/           # Páginas e artigos
│   ├── data/            # Dados (perguntas, produtos, artigos)
│   ├── App.jsx          # ✅ Router configurado
│   └── index.js         # ✅ HelmetProvider
├── package.json         # ✅ Dependências
├── vercel.json          # ✅ Configuração Vercel
├── tailwind.config.js   # ✅ Tailwind CSS
└── .gitignore           # ✅ Git ignore
```

---

## ✅ Checklist Pré-Deploy

- [x] **Build funciona localmente** (`npm run build`)
- [x] **Todas as imagens carregam** (banners dos 8 artigos ✅)
- [x] **Rotas funcionam** (/, /blog, /about, /blog/:slug)
- [x] **Quiz completo** (10 perguntas funcionais)
- [x] **Página de resultados** (produtos recomendados)
- [x] **SEO otimizado** (meta tags, Open Graph, Schema.org)
- [x] **Google Analytics** configurado
- [x] **Responsivo** (mobile, tablet, desktop)
- [x] **vercel.json** criado e otimizado
- [x] **Links de afiliação** nos produtos

---

## 🔧 Configuração do vercel.json

O arquivo `vercel.json` está configurado com:

✅ **Build otimizado** para Create React App  
✅ **Cache de assets estáticos** (1 ano)  
✅ **SPA routing** (todas as rotas → index.html)  
✅ **Headers de segurança** (X-Frame-Options, CSP, etc.)  

---

## 🌐 Domínio Customizado

### **Adicionar domínio próprio:**

1. Dashboard → Projeto → Settings → Domains
2. Adicione seu domínio (ex: `menomatch.com`)
3. Configure DNS:
   ```
   Tipo: A
   Nome: @
   Valor: 76.76.21.21
   
   Tipo: CNAME
   Nome: www
   Valor: cname.vercel-dns.com
   ```
4. Aguarde propagação DNS (até 48h)

---

## 📊 Monitoramento Pós-Deploy

### **Verificar após deploy:**

1. ✅ Site carrega corretamente
2. ✅ Quiz funciona
3. ✅ Todos os 8 artigos abrem
4. ✅ Imagens carregam (especialmente banners)
5. ✅ Google Analytics rastreando
6. ✅ Links de afiliação funcionam
7. ✅ Mobile responsivo
8. ✅ Performance (Lighthouse score)

### **Ferramentas úteis:**

- **Vercel Analytics:** Dashboard → Analytics (grátis)
- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **Google Search Console:** https://search.google.com/search-console
- **Uptime Monitor:** https://uptimerobot.com/

---

## 🐛 Troubleshooting

### **Build falha:**

```bash
# Limpar cache e reconstruir
rm -rf node_modules build
npm install
npm run build
```

### **Rotas 404 após deploy:**

- ✅ Verifique se `vercel.json` existe
- ✅ Confirme que todas as rotas redirecionam para `/index.html`

### **Imagens não carregam:**

- ✅ Verifique URLs do Unsplash (todas corretas ✅)
- ✅ Confirme que `public/` tem logo192.png e og-image.jpg

### **Environment variables não funcionam:**

- ✅ Variáveis devem começar com `REACT_APP_`
- ✅ Redeploy após adicionar variáveis
- ✅ Limpar cache: `vercel --prod --force`

---

## 🔄 Atualizações Futuras

### **Deploy automático (CI/CD):**

A Vercel já faz deploy automático quando você:
- Faz push para branch `main` → Deploy Production
- Faz push para outras branches → Deploy Preview
- Abre Pull Request → Deploy Preview com comentário

### **Comando para redeploy:**

```bash
# Redeploy production
vercel --prod

# Redeploy preview
vercel
```

---

## 📈 Otimizações Pós-Deploy

### **Performance:**

1. ✅ **Image Optimization:** Imagens já são do Unsplash CDN
2. ⏳ **Code Splitting:** React já faz automaticamente
3. ⏳ **Service Worker:** Habilitar PWA (opcional)
4. ⏳ **Analytics:** Monitorar Core Web Vitals

### **SEO:**

1. ✅ **Sitemap:** Adicionar `public/sitemap.xml`
2. ✅ **robots.txt:** Adicionar `public/robots.txt`
3. ✅ **Google Search Console:** Submeter sitemap
4. ✅ **Schema.org:** Já implementado nos artigos ✅

---

## 🎯 URLs Importantes Pós-Deploy

| Recurso | URL |
|---------|-----|
| **Site ao vivo** | `https://menomatch.vercel.app` (ou seu domínio) |
| **Dashboard Vercel** | https://vercel.com/dashboard |
| **Analytics** | Dashboard → Analytics |
| **Logs** | Dashboard → Deployments → [deployment] → Logs |
| **Google Analytics** | https://analytics.google.com |

---

## ✅ Status Final

**🎉 PROJETO 100% PRONTO PARA DEPLOY! 🎉**

- ✅ 8 artigos completos com banners funcionais
- ✅ Quiz totalmente funcional (10 perguntas)
- ✅ Página de resultados com produtos
- ✅ SEO otimizado em todas as páginas
- ✅ Google Analytics configurado
- ✅ Design responsivo
- ✅ Performance otimizada
- ✅ Configuração Vercel completa

**Próximo passo:** `vercel --prod` 🚀

---

## 📞 Suporte

- **Vercel Docs:** https://vercel.com/docs
- **Create React App Docs:** https://create-react-app.dev/
- **React Router Docs:** https://reactrouter.com/

---

**Desenvolvido com 💜 por MenoMatch Team**

*Última atualização: Outubro 2025*


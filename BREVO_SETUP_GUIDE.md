# 📧 Guia de Configuração - Brevo (SendinBlue)

## ✅ Migração Concluída!

A integração foi migrada de **Kit (ConvertKit)** para **Brevo (SendinBlue)**.

---

## 🚀 Como Configurar

### PASSO 1: Obter API Key do Brevo

1. Acesse: https://app.brevo.com/settings/keys/api
2. Clique em **"Create a new API key"**
3. Nome: `MenoMatch Website`
4. Copie a chave gerada (ex: `xkeysib-abc123...`)

---

### PASSO 2: Obter o ID da sua Lista

1. Acesse: https://app.brevo.com/contact/list
2. Clique na lista onde deseja adicionar os contatos
3. O ID aparece na URL: `.../contact/list/[ID]`
4. Exemplo: se a URL for `https://app.brevo.com/contact/list/2`, o ID é `2`

---

### PASSO 3: Configurar o arquivo `.env`

Edite o arquivo `.env` na raiz do projeto:

```env
REACT_APP_BREVO_API_KEY=xkeysib-sua-api-key-aqui
REACT_APP_BREVO_API_BASE=https://api.brevo.com/v3
REACT_APP_BREVO_LIST_ID=2
```

**Substitua:**
- `xkeysib-sua-api-key-aqui` → Sua API key real
- `2` → ID da sua lista

---

### PASSO 4: Reiniciar o Servidor

```bash
# Parar o servidor (Ctrl+C)
# Reiniciar:
npm start
```

**⚠️ IMPORTANTE:** O servidor DEVE ser reiniciado após editar o `.env`

---

## 🧪 Testando a Integração

### 1. Testar Localmente

1. Ir para: http://localhost:3000
2. Completar o quiz (10 perguntas)
3. Clicar em **"Send Me My Results"**
4. Preencher um email de teste
5. Clicar em **"Send Me My Results"** (no modal)

### 2. Verificar o Console do Browser

Abra DevTools (F12) → Console

**✅ SUCESSO - Deve aparecer:**
```
📧 Subscribing to Brevo: seu@email.com
📋 List ID: 2
📤 Request body: {...}
✅ Successfully subscribed to Brevo: {...}
```

**❌ ERRO - Se aparecer:**
```
❌ Brevo API key not configured
⚠️ Please add your Brevo API key to .env file
```
→ Verifique se o `.env` está correto e reinicie o servidor

---

### 3. Verificar no Brevo Dashboard

1. Ir para: https://app.brevo.com/contact/list
2. Clicar na sua lista
3. **Procurar pelo email de teste**
4. Verificar se os **Attributes** foram preenchidos:
   - `FIRSTNAME`
   - `SOURCE`: MenoMatch Quiz
   - `PRIMARY_SYMPTOMS`: lista de sintomas
   - `TOP_PRODUCT_1`, `TOP_PRODUCT_2`, `TOP_PRODUCT_3`
   - `AGE_RANGE`
   - `QUIZ_COMPLETION_DATE`
   - etc.

---

## 📊 Dados Capturados

Quando um usuário completa o quiz e fornece o email, os seguintes dados são enviados para o Brevo:

### Contact Attributes:
- `FIRSTNAME` - Nome (se fornecido)
- `SOURCE` - "MenoMatch Website"
- `TAGS` - Tags separadas por vírgula (ex: "quiz-completed, symptom-hot-flashes, severity-high")
- `PRIMARY_SYMPTOMS` - Lista de sintomas identificados
- `SYMPTOM_COUNT` - Número de sintomas
- `TOP_PRODUCT_1`, `TOP_PRODUCT_2`, `TOP_PRODUCT_3` - Produtos recomendados
- `AGE_RANGE` - Faixa etária
- `QUIZ_COMPLETION_DATE` - Data/hora de conclusão
- `LANDING_PAGE` - Página onde o usuário estava
- `REFERRER` - De onde veio
- `SEVERITY` - Severidade (low, medium, high)

---

## 🚀 Deploy na Vercel

Para funcionar em produção:

### 1. Adicionar Variáveis de Ambiente na Vercel

1. Ir para: https://vercel.com/[seu-projeto]/settings/environment-variables
2. Adicionar as 3 variáveis:
   - `REACT_APP_BREVO_API_KEY` = `xkeysib-sua-api-key`
   - `REACT_APP_BREVO_API_BASE` = `https://api.brevo.com/v3`
   - `REACT_APP_BREVO_LIST_ID` = `2` (ou seu ID)
3. Aplicar em: **Production**, **Preview**, e **Development**

### 2. Fazer Redeploy

```bash
git add .
git commit -m "feat: migrate from Kit to Brevo email integration"
git push origin main
```

Ou no dashboard da Vercel: **Deployments** → **Redeploy**

---

## 🔧 Troubleshooting

### Problema: "API key not configured"

**Causa:** Variáveis de ambiente não carregadas

**Solução:**
1. Verificar se `.env` existe e está na raiz do projeto
2. Verificar se não tem erros de digitação
3. **Reiniciar o servidor** (Create React App só lê `.env` na inicialização)

---

### Problema: "HTTP 401 Unauthorized"

**Causa:** API key inválida ou expirada

**Solução:**
1. Ir para https://app.brevo.com/settings/keys/api
2. Verificar se a API key está ativa
3. Se necessário, gerar uma nova chave
4. Atualizar no `.env` e reiniciar

---

### Problema: "HTTP 400 Bad Request"

**Causa:** Dados enviados estão incorretos

**Possíveis causas:**
- List ID inválido
- Attribute names com caracteres especiais
- Email em formato inválido

**Solução:**
1. Verificar `REACT_APP_BREVO_LIST_ID` no `.env`
2. Ver a resposta completa da API no console do browser
3. Verificar os logs do Brevo: https://app.brevo.com/logs

---

### Problema: Request não aparece no Network

**Causa:** Erro JavaScript antes do fetch

**Solução:**
1. Abrir DevTools → Console
2. Procurar por erros vermelhos
3. Verificar se `brevoService.js` foi importado corretamente

---

## 📚 Documentação da API Brevo

- **Docs oficiais:** https://developers.brevo.com/
- **API Reference:** https://developers.brevo.com/reference
- **Create/Update Contact:** https://developers.brevo.com/reference/createcontact

---

## 🎯 Próximos Passos (Opcional)

### 1. Criar Automações no Brevo

Você pode criar automações para enviar emails baseados em:
- Tags (ex: `severity-high` → enviar email específico)
- Attributes (ex: `TOP_PRODUCT_1` → enviar info sobre o produto)
- Listas (ex: usuários que completaram o quiz)

### 2. Criar Segmentos

Segmentos úteis:
- Usuários com `severity-high`
- Usuários com sintoma específico (via `TAGS`)
- Usuários que não abriram o primeiro email (para re-engajamento)

### 3. Tracking Adicional

Você pode adicionar mais tracking em `src/services/brevoService.js`:
- Eventos do usuário (cliques em produtos, páginas visitadas)
- Campos customizados adicionais
- Integração com outros serviços (Google Analytics, Facebook Pixel)

---

## ✅ Checklist de Configuração

- [ ] API key do Brevo obtida
- [ ] List ID identificado
- [ ] Arquivo `.env` configurado
- [ ] Servidor reiniciado
- [ ] Teste local realizado com sucesso
- [ ] Email de teste apareceu no Brevo
- [ ] Attributes verificados no Brevo
- [ ] Variáveis adicionadas na Vercel
- [ ] Deploy realizado
- [ ] Teste em produção realizado

---

**🎉 Pronto! Sua integração com Brevo está configurada!**

Se tiver problemas, verifique os logs do console do browser e da API do Brevo.


# 📊 Tracking e UTM - Documentação

## ✅ Implementado

### 1. Meta Pixel (Facebook Pixel)
- **Pixel ID:** `1260571942761375`
- **Status:** ✅ Ativo
- **Localização:** `app/layout.tsx`
- **Eventos rastreados:**
  - `PageView` - Automático em todas as páginas
  - `InitiateCheckout` - Quando o usuário clica no botão de compra
  - `Lead` - Disponível para uso
  - `Purchase` - Disponível para uso (quando compra for concluída)

### 2. UTMify
- **Status:** ✅ Ativo
- **Localização:** `app/layout.tsx`
- **Funcionalidades:**
  - Captura automática de parâmetros UTM
  - Previne perda de dados de rastreamento
  - Compatível com Meta Ads

## 🎯 Código UTM para Meta Ads

Use este código UTM ao configurar seus anúncios no Meta Ads Manager:

```
utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}
```

### Como usar:

1. **No Meta Ads Manager:**
   - Vá para a configuração da campanha
   - Na seção de URL, adicione os parâmetros UTM
   - Use o código acima como template

2. **Exemplo de URL completa:**
   ```
   https://seusite.com/?utm_source=FB&utm_campaign=Biblioteca_Mistica|123456&utm_medium=Conversao|789012&utm_content=Video_VSL|345678&utm_term=feed
   ```

3. **Parâmetros explicados:**
   - `utm_source=FB` - Origem (Facebook)
   - `utm_campaign={{campaign.name}}|{{campaign.id}}` - Nome e ID da campanha
   - `utm_medium={{adset.name}}|{{adset.id}}` - Nome e ID do conjunto de anúncios
   - `utm_content={{ad.name}}|{{ad.id}}` - Nome e ID do anúncio
   - `utm_term={{placement}}` - Posicionamento do anúncio (feed, stories, etc.)

## 📈 Eventos de Conversão

### Eventos disponíveis no código:

1. **InitiateCheckout** - Disparado quando o usuário clica no botão "Quero Atravessar o Portal Agora"
   - Valor: R$ 37,00
   - Moeda: BRL
   - Localização: `components/conversion-section.tsx`

2. **Purchase** - Disparado quando a compra é concluída (se necessário adicionar na página de confirmação)
   - Valor: R$ 37,00
   - Moeda: BRL

3. **Lead** - Disponível para uso em formulários ou outras ações

### Como adicionar novos eventos:

```typescript
import { trackConversion, trackPurchase, trackLead } from "@/lib/facebook-pixel"

// Exemplo: Rastrear compra concluída
trackPurchase()

// Exemplo: Rastrear lead
trackLead()

// Exemplo: Rastrear evento customizado
trackConversion("CustomEvent", { custom_param: "value" })
```

## 🔍 Verificação

### Como verificar se está funcionando:

1. **Meta Pixel:**
   - Instale a extensão "Facebook Pixel Helper" no Chrome
   - Acesse o site e verifique se o pixel está ativo
   - Clique no botão de compra e verifique se o evento `InitiateCheckout` é disparado

2. **UTMify:**
   - Acesse o site com parâmetros UTM na URL
   - Verifique no console do navegador se os parâmetros estão sendo capturados
   - Os dados devem ser preservados durante a navegação

## 📝 Notas Importantes

1. **Privacy:** Os scripts respeitam as configurações de privacidade do navegador
2. **Performance:** Os scripts são carregados com `strategy="afterInteractive"` para não bloquear o carregamento da página
3. **UTMify:** Previne a perda de dados UTM durante a navegação do usuário
4. **Meta Pixel:** Rastreia automaticamente PageView em todas as páginas

## 🚀 Próximos Passos

1. Configure os parâmetros UTM nos anúncios do Meta Ads
2. Verifique os eventos no Meta Events Manager
3. Configure eventos de conversão no Meta Ads Manager
4. Monitore as conversões e otimize suas campanhas

---

**Dúvidas?** Consulte a documentação do Meta Pixel e UTMify para mais informações.


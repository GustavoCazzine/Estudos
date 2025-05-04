
# Natural Beauty Space - Site Institucional e Sistema de Agendamento

## 📋 Visão Geral

Este projeto é um site completo para o salão de beleza Natural Beauty Space, com foco em serviços de cílios e sobrancelhas, incluindo sistema de agendamento online, blog, portfólio e integração com Google Maps e Google Calendar.

## 🚀 Configuração do Projeto

### 1. Configurações Essenciais

Para colocar o site em produção e usar todas as funcionalidades, você precisa configurar:

#### 1.1 Google Maps API Key

1. Crie uma conta no [Google Cloud Platform](https://console.cloud.google.com/)
2. Crie um novo projeto
3. Ative a API do Google Maps JavaScript
4. Crie uma chave de API com restrições para o seu domínio
5. Substitua a API key no arquivo `src/components/map/GoogleMap.tsx`

```jsx
// Substitua YOUR_GOOGLE_MAPS_API_KEY pela sua chave real
const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
```

#### 1.2 Google Calendar API

Para integrar com o Google Calendar:

1. No Google Cloud Platform, ative a API do Google Calendar
2. Crie credenciais OAuth 2.0
3. Configure o escopo para acesso ao calendário
4. Substitua as credenciais em `src/services/googleCalendarService.ts`

### 2. Personalização de Conteúdo

#### 2.1 Informações do Salão

Substitua as informações do salão no arquivo:
- `src/data/siteInfo.ts` (Após criar este arquivo - veja instruções abaixo)

```typescript
// Crie este arquivo com as informações do seu salão
export const siteInfo = {
  name: "Natural Beauty Space",
  address: "Rua exemplo, 123 - Bairro, Piracicaba - SP",
  phone: "(19) 99999-9999",
  whatsapp: "5519999999999",
  email: "contato@naturalbeautyspace.com.br",
  instagram: "@naturalbeautyspace",
  workingHours: {
    weekdays: "09:00 - 18:00",
    saturday: "09:00 - 15:00",
    sunday: "Fechado"
  },
  location: {
    lat: -22.7342, // Substitua pelas coordenadas do seu endereço
    lng: -47.6501, // Estas são coordenadas de exemplo em Piracicaba
  }
};
```

#### 2.2 Serviços Oferecidos

Edite os serviços, preços e descrições no arquivo:
- `src/stores/bookingStore.ts`

#### 2.3 Imagens

1. Substitua as imagens em `src/assets/` seguindo a estrutura:
   - `services/` - Imagens dos serviços
   - `team/` - Fotos da equipe
   - `portfolio/` - Trabalhos realizados
   - `testimonials/` - Fotos de clientes
   - `blog/` - Imagens para o blog
   - `ui/` - Logos, ícones e elementos de interface

2. Para gerenciar imagens, acesse o painel administrativo em `/images`

### 3. Configuração de SEO e Analytics

1. Edite as meta tags em `index.html` na raiz do projeto
2. Substitua o favicon em `public/favicon.ico`
3. Para adicionar Google Analytics:

```html
<!-- Adicione este código antes do fechamento da tag </head> em index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 💻 Desenvolvimento

### Requisitos

- Node.js 16 ou superior
- NPM ou Yarn

### Comandos

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build de produção localmente
npm run preview
```

### Estrutura de Arquivos Principais

```
src/
  ├── assets/        # Imagens, fontes e arquivos estáticos
  ├── components/    # Componentes reutilizáveis
  ├── context/       # Contextos React, incluindo gerenciamento de imagens
  ├── hooks/         # Hooks personalizados
  ├── lib/           # Utilitários e funções auxiliares
  ├── pages/         # Páginas principais da aplicação
  ├── services/      # Serviços de API e integrações
  ├── stores/        # Estados globais (usando Zustand)
  └── App.tsx        # Componente raiz da aplicação
```

## 🧩 Funcionalidades Implementadas

1. **Sistema de Agendamento**
   - Seleção de data e horário
   - Filtragem e busca de serviços
   - Carrinho de serviços
   - Confirmação de agendamento

2. **Site Institucional**
   - Página inicial com destaques
   - Página de serviços detalhados
   - Sobre nós com equipe
   - Portfólio de trabalhos
   - Blog com artigos
   - Localização com mapa interativo
   - Formulário de contato

3. **Páginas Legais**
   - Política de Privacidade
   - Termos de Uso
   - Política de Cancelamento
   - Política de Cookies

4. **Recursos Técnicos**
   - Design responsivo
   - Otimização de imagens
   - Lazy loading
   - SEO otimizado
   - Animações e transições

## ⚙️ Personalização Avançada

### Tema e Cores

As cores principais do tema estão definidas em:
- `tailwind.config.ts` - Configuração global do Tailwind CSS

```typescript
// Personalize as cores alterando estes valores
colors: {
  'salon-rosa-claro': '#FFECEF',
  'salon-rosa-poeira': '#F5E8E4',
  'salon-terracota': '#DD8E79',
  'salon-dourado-claro': '#E9B949',
  'salon-gold': '#D9B26A',
  'salon-beige': '#F4EAE0',
  'salon-pink': '#F0C7CD',
  'salon-cream': '#FAF3EB',
  'salon-light-text': '#71717a',
  'salon-dark-text': '#27272a',
}
```

## 📱 Integração com Redes Sociais

Para adicionar botões de compartilhamento ou links para redes sociais, edite:
- Links no rodapé: `src/components/layout/Footer.tsx`
- Meta tags para compartilhamento: `index.html`

## 🔒 Segurança e Privacidade

- Todas as páginas legais (Privacidade, Termos, etc.) devem ser revisadas por um advogado
- As políticas devem ser adequadas à legislação local (LGPD no Brasil)
- Certifique-se de que o formulário de contato tenha consentimento para coleta de dados

## 📞 Suporte e Contato

Para suporte técnico ou dúvidas sobre o projeto, entre em contato com:

- Desenvolvedor: [seu-email@example.com](mailto:seu-email@example.com)
- Website: [www.seusite.com](https://www.seusite.com)

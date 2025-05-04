
# Diretório de Imagens

Este diretório contém todas as imagens utilizadas no site Natural Beauty Space.

## Estrutura de pastas

```
assets/
  ├── services/         # Imagens dos serviços oferecidos
  ├── team/             # Fotos da equipe
  ├── portfolio/        # Imagens da galeria de trabalhos
  ├── testimonials/     # Fotos dos clientes que deram depoimentos
  ├── blog/             # Imagens para posts do blog
  └── ui/               # Elementos UI, ícones, logos, etc.
```

## Como usar imagens no projeto

### 1. Importar a imagem no componente

```jsx
import servicePic from '@/assets/services/extensao-cilios.jpg';

const MyComponent = () => {
  return (
    <img src={servicePic} alt="Extensão de Cílios" />
  );
};
```

### 2. Usando imagens públicas (URL direta)

Para imagens públicas, você pode colocá-las na pasta `public/` e acessá-las diretamente:

```jsx
const MyComponent = () => {
  return (
    <img src="/logo.png" alt="Logo" />
  );
};
```

### Padrões para imagens

- Prefira formatos modernos como WebP para melhor performance
- Use JPG para fotografias e PNG para imagens com transparência
- Otimize imagens antes de adicionar ao projeto (remova metadados desnecessários, ajuste a compressão)
- Padronize tamanhos de imagens para melhor consistência e desempenho
- Sempre adicione atributo `alt` descritivo e semântico para acessibilidade
- Considere usar `loading="lazy"` para carregar imagens apenas quando necessário

### Exemplo de padrões de dimensão recomendadas

- Banner principal: 1920 x 1080px
- Thumbnails serviços: 800 x 600px
- Fotos da equipe: 600 x 600px (quadradas)
- Imagens blog: 1200 x 630px
- Galeria portfolio: 800 x 800px

## Otimização de imagens

Para o melhor desempenho do site, recomendamos as seguintes práticas:

1. Comprima imagens antes de adicionar (use ferramentas como TinyPNG, Squoosh)
2. Use imagens responsivas com srcset quando apropriado
3. Considere lazy loading para imagens abaixo da dobra
4. Use CDN para entrega de imagens quando em produção

## Exemplos de implementação com lazy loading e imagens responsivas

```jsx
<img 
  src={smallImage} 
  srcSet={`${smallImage} 400w, ${mediumImage} 800w, ${largeImage} 1200w`}
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Descrição da imagem"
  loading="lazy"
  width="800"
  height="600"
/>
```

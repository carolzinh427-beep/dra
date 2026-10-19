# Dra. Leticia Steegmuller — Biomedicina Estética

Site institucional premium, sofisticado, elegante e totalmente responsivo desenvolvido para a **Dra. Leticia Steegmuller**, Biomédica Esteta (CRBM/DF 23260).

---

## Identidade Visual & Diretrizes

- **Paleta Exclusiva:**
  - Marrom Profundo: `#49352D` (Hero, Contato, Navbar ativa, Rodapé)
  - Marrom Secundário: `#705449` (Textos de apoio e sutilezas)
  - Branco Puro: `#FFFFFF` (Fundo de Resultados e contrastes)
  - Off-white: `#F8F5F1` (Fundo de Procedimentos e cartões)
  - Dourado Fosco: `#B89A65` (Detalhes metálicos sólidos, linhas e botões selecionados)
  - Preto Suave: `#191715` (Tipografia e sombras de silhueta)
- **Tipografia Editorial:**
  - `Bodoni Moda`: Títulos, nome da profissional, frases de destaque
  - `DM Sans`: Textos corridos, navegação, botões e informações técnicas
- **Regras de Ouro:**
  - Zero gradientes
  - Zero emojis
  - Transições suaves e naturais entre seções
  - Responsividade Mobile-First (320px a 4K)
  - Respeito integral a `prefers-reduced-motion`

---

## Estrutura de Seções

1. **Navbar Minimalista:** Transparente sobre a dobra heroica, com transição para fundo marrom sólido ao rolar a página. Menu móvel compacto e acessível.
2. **Hero Editorial:** Fotografia real da Dra. Leticia com recorte em transparência de alta precisão ao lado do nome e da frase institucional ("*Naturalidade, técnica e planejamento em cada detalhe.*"). CTAs diretos para agendamento via WhatsApp e visualização de resultados.
3. **Procedimentos Confirmados:** Grade de cards com fotografia editorial e descrições técnicas claras de Harmonização Facial, Bioestimuladores de Colágeno, Toxina Botulínica e Preenchimento Labial.
4. **Resultados (Antes e Depois):** Quatro espaços de casos clínicos com controle deslizante interativo (*split comparison*) e alternador para modo *Lado a Lado*, além de aviso ético e legal.
5. **Agendamento Direto WhatsApp:** Canal oficial com mensagem inicial codificada para o número `(61) 92004-4305` e botão do perfil oficial no Instagram.
6. **Rodapé Profissional:** Contém a credencial oficial obrigatória (`Biomédica Esteta | CRBM/DF 23260`), navegação, links sociais e modal de privacidade.
7. **Botão Flutuante de WhatsApp:** Acesso rápido e discreto, em conformidade com as *safe-areas* de dispositivos móveis.

---

## Como Substituir Imagens e Conteúdo

Todos os dados e imagens estão centralizados no arquivo:
`src/config/siteConfig.ts`

- **Fotografia da Dra. Leticia:** Coloque a imagem em `/public/dra-leticia-cutout.png`.
- **Casos de Antes e Depois:** Insira as imagens reais em `/public/images/results/` e atualize os caminhos em `clinicalResults` no `siteConfig.ts`.

---

## Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar build localmente
npm run preview
```

---

## Deploy no Vercel

O projeto está configurado com `vercel.json` e otimizado para deploy contínuo integrado ao GitHub.

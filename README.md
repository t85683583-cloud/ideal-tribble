# BidX — apresentação de produto

Apresentação estática do plano de evolução do BidX para **Marketplace, Leilões e Economia Digital**.

## Direção visual

A interface usa a direção **Signal Ledger**: marinho-ink, azul cobalto, verde-lima como sinal de ação, tipografia Space Grotesk + Manrope e detalhes em DM Mono para dar ao material um tom editorial e operacional.

## Rodar localmente

```bash
npm install
npm run dev
```

## Validar

```bash
npm run check
npm run build
```

## Publicar no GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` publica automaticamente a branch `main` no GitHub Pages. No repositório, habilite **Settings → Pages → Source: GitHub Actions** se ainda não estiver habilitado.

O endereço esperado é:

`https://t85683583-cloud.github.io/ideal-tribble/`

## Conteúdo interativo

- Tema **Sistema / Claro / Escuro**, persistido no navegador.
- Navegação por âncoras e menu responsivo.
- Mockup de produto e fluxo do comprador.
- Mockup de central do vendedor.
- Leilão demonstrativo com contador e botão de lance local.
- Roadmap com seleção de fase.
- Checklist expansível de próximos passos.

Os números e exemplos exibidos são demonstrativos, conforme solicitado no briefing.

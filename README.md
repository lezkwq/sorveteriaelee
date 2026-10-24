# Boutique do Açaí

Adaptação local no branch `boutique_do_acai`. A versão original permanece no branch `main`. Sem push ou deploy.

## Desenvolvimento

Use Node.js 22.12 ou superior. Instale com `npm ci` e execute `npm run dev`. Para compilar: `npm run build`. O arquivo `package-lock.json` fixa as dependências, incluindo a correção de segurança do TanStack Start.

## Dados e imagens

Dados fornecidos pelo cliente em `src/lib/site.ts`. Fotos WebP em `public/images`, com lado maior de até 1600 px e sem ampliação. Originais preservados em `assets/originais`. Fotos identificadas pelo conteúdo, pois a ordem dos anexos difere da descrição no briefing. A captura dos copos empilhados foi recortada para remover os cantos arredondados.

`SITE.mostrarPudim` controla a seção da Fábrica do Pudim e começa desligado. A Salada de Fruta aparece somente em texto, pois não foi enviada uma foto identificada do produto.

## Pendências

Confira os marcadores CONFIRMAR no config: horários, fundação, domínio oficial, foto da Salada de Fruta, venda de pudins e URL ativa do cardápio. Canonical e URLs absolutas de compartilhamento dependem do domínio oficial.

O endereço do Pedir Delivery fornecido retorna "Loja não encontrada". Por orientação do cliente, os botões de cardápio usam `CARDAPIO_URL`, apontando ao WhatsApp até a confirmação de um endereço online ativo.

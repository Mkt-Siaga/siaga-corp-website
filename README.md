# Site Grupo Siaga

Site institucional do Grupo Siaga / Siaga Trading. É uma página única em HTML, CSS e JavaScript puros, sem build.
Visual: laranja `#F7A600` sobre preto, como no gruposiaga.com atual. A fonte é a Saira (Google Fonts), que substitui a Chamber Sans Pro do site antigo porque essa é paga.

## Seções (`index.html`)

`#inicio`: hero com vídeo · números · `#grupo` (o grupo e a operação global) · `#jornada` (as 7 etapas da cadeia) · `#servicos` (6 pilares) · `#diferenciais` · `#categorias` MatCon e perfis de cliente · `#marcas` · `#modalidades` (abas importação/exportação, ICMS e vantagens) · `#presenca` (escritórios) · `#lideranca` · `#contato`

## Estrutura

```
css/styles.css   Tokens de cor (:root) e componentes
js/dados.js      Todo o conteúdo: números, jornada, pilares, diferenciais, categorias, marcas, modalidades, escritórios, liderança, contato (window.SIAGA)
js/main.js       Monta as listas, abas, menu do celular, contadores
assets/img       Fotos do site atual · assets/icones  Ícones SVG das categorias e de contato
assets/marcas    Logos do Grupo Siaga, Siaga Trading e das marcas · assets/video/hero.mp4 (18 MB)
```

Para mudar texto, número, marca ou endereço, edite só `js/dados.js`.

## Rodar localmente

```
powershell -NoProfile -ExecutionPolicy Bypass -File ..\ferramentas\serve.ps1 -Root . -Port 5185
```

## Pendências

- **Marcas:** Sixx, G8 e Nexbridge estão ocultas (`oculta: true` em `js/dados.js`; tire o campo para voltarem). Ultra Hidra foi removida a pedido. A Tekends ficou de fora até alguém confirmar.
- **Link da Durax:** aponta para dev.duraxbr.com, o site novo. Trocar para duraxbr.com quando ele for o principal.
- **Hong Kong:** Flat A, 20/F, ZJ 300, 300 Lockhart Road, Wan Chai (informado em 29/10/2026).
- **Liderança:** só tem as iniciais. Faltam fotos e a autorização para exibir.
- **Contato:** os botões abrem um e-mail para contato@gruposiaga.com. O site antigo usava formulário do RD Station; dá para embutir de novo, se quiserem.
- **Números:** +300 fornecedores, +104 empresas e +730 lotes vêm do siagatrading.com. 37 países: operação através de parceiros (não citar o nome do parceiro no site).
- **Idiomas:** o site antigo tinha PT, EN e 中文. Este só tem PT. Existe deck em inglês no Canva (DAHS2FdV3qM) para servir de base.

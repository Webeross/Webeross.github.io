# Webeross.github.io

Site pessoal de Eduardo Weber, publicado em **https://webeross.github.io/** (GitHub Pages).

HTML, CSS e JavaScript puros.

| Arquivo | O que é |
|---|---|
| `index.html` | Conteúdo: apresentação, projetos, como trabalho, stack e contato |
| `style.css` | Visual (claro e escuro automáticos) |
| `main.js` | Botão de tema e ano do rodapé |
| `.nojekyll` | Diz ao GitHub Pages para servir os arquivos como estão |

Ver localmente: `python3 -m http.server 8000` nesta pasta e abrir http://localhost:8000.

**Ao mudar `style.css` ou `main.js`, aumente o `?v=N` no `index.html`** (ex.: `style.css?v=3`). O GitHub Pages manda o navegador guardar os arquivos por 10 minutos; sem isso, quem já visitou pode ver HTML novo com CSS velho (página quebrada).

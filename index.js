// get all snippet elements with lang code
const snippets = document.querySelectorAll("pre[lang]")

// for each snippet element
for (let i = 0; i < snippets.length; i++) {
  // current element
  const snippet = snippets[i]
  // get written language
  const lang = snippet.getAttribute("lang")
  // highligh syntax using prism
  const code = Prism.highlight(snippet.innerText, Prism.languages[lang], lang)
  // replace with snippet content
  snippet.innerHTML = code
}
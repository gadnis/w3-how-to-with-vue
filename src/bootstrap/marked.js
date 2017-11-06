import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/solarized-dark.css'

marked.setOptions({
  highlight(code) {
    return hljs.highlightAuto(code).value
  }
})
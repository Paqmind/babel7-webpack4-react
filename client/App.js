import React from 'react'

export default function App() {
  return <div>It works!</div>
}

export async function initCodeHighlight(node) {
  let hljsModule = await import(/* webpackChunkName: "highlightjs" */ "highlight.js/lib/highlight.js")
  let hljs = hljsModule.default

  // In order to speed up webpack compilation,
  // instead of dynamic loading of the list of the required languages, we will do it manually
  // Otherwise webpack creates 250+ bundles for each language file
  async function getJavascriptParser() {
    let module = await import(
      /* webpackChunkName: "highlightjs/javascript" */
      `highlight.js/lib/languages/javascript`)
    let file = module.default
    hljs.registerLanguage("javascript", file)
  }

  async function getSqlParser() {
    let module = await import(
      /* webpackChunkName: "highlightjs/sql" */
      `highlight.js/lib/languages/sql`)
    let file = module.default
    hljs.registerLanguage("sql", file)
  }

  async function getClojureParser() {
    let module = await import(
      /* webpackChunkName: "highlightjs/clojure" */
      `highlight.js/lib/languages/clojure`)
    let file = module.default
    hljs.registerLanguage("clojure", file)
  }

  async function getHaskellParser() {
    let module = await import(
      /* webpackChunkName: "highlightjs/haskell" */
      `highlight.js/lib/languages/haskell`)
    let file = module.default
    hljs.registerLanguage("haskell", file)
  }

  async function getHtmlParser() {
    let module = await import(
      /* webpackChunkName: "highlightjs/htmlbars" */
      `highlight.js/lib/languages/htmlbars`)
    let file = module.default
    hljs.registerLanguage("htmlbars", file)
  }

  async function getXmlParser() {
    let module = await import(
      /* webpackChunkName: "highlightjs/xml" */
      `highlight.js/lib/languages/xml`)
    let file = module.default
    hljs.registerLanguage("xml", file)
  }

  async function getCssParser() {
    let module = await import(
      /* webpackChunkName: "highlightjs/css" */
      `highlight.js/lib/languages/css`)
    let file = module.default
    hljs.registerLanguage("css", file)
  }

  async function getDiffParser() {
    let module = await import(
      /* webpackChunkName: "highlightjs/diff" */
      `highlight.js/lib/languages/diff`)
    let file = module.default
    hljs.registerLanguage("diff", file)
  }

  // we can optimize this code and load only files that are required on the page
  await getJavascriptParser()
  await getSqlParser()
  await getClojureParser()
  await getHaskellParser()
  await getHtmlParser()
  await getXmlParser()
  await getCssParser()
  await getDiffParser()

  hljs.configure({languages: []})
  node.querySelectorAll("code").forEach(function (block) {
    hljs.highlightBlock(block)
  })
}

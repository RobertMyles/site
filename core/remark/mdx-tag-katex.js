const visit = require("unist-util-visit")

const wrapMdxTags = markdownAST => {
  visit(markdownAST, `inlineMath`, node => {
    node.type = `html`
    node.value = `<InlineMath>{${node.value}}</InlineMath>`
  })

  visit(markdownAST, `math`, node => {
    node.type = `html`
    node.value = `<MathBlock>{${node.value}}</MathBlock>`
  })
}

module.exports = () => {
  return wrapMdxTags
}

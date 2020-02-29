import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../components/layouts/BlogLayout"
import "katex/dist/katex.min.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <BlogLayout>
        <Helmet title={`${mdx.frontmatter.title} | Robert Myles McDonnell`}>
          <meta charSet="utf-8" />
          <title>Robert Myles McDonnell</title>
          <link rel="canonical" href="http://robertmylesmcdonnell.com" />
        </Helmet>
        <h1>{mdx.frontmatter.title}</h1>
        <h4>{mdx.frontmatter.date}</h4>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </BlogLayout>
    </>
  )
}

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
      }
      body
    }
  }
`

export default PageTemplate

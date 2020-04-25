import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../components/layouts/BlogLayout"
import "katex/dist/katex.min.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import Utterances from "../components/Utterances"

function PageTemplate({ data }) {
  //{data: { mdx }
  return (
    <>
      <BlogLayout>
        <Helmet
          title={`${data.mdx.frontmatter.title} | Robert Myles McDonnell`}
        >
          <meta charSet="utf-8" />
          <title>Robert Myles McDonnell</title>
          <link rel="canonical" href="http://robertmylesmcdonnell.com" />
        </Helmet>
        <h1>{data.mdx.frontmatter.title}</h1>
        <h4>{data.mdx.frontmatter.date}</h4>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Utterances repository={data.site.siteMetadata.utterances}></Utterances>
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
    site {
      siteMetadata {
        utterances
      }
    }
  }
`

export default PageTemplate

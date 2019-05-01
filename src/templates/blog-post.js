import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../components/layouts/BlogLayout"
import "katex/dist/katex.min.css"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Helmet from "react-helmet"
import get from "lodash/get"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

const PageTemplate = props => {
  const mdx = props.data.mdx
  const siteTitle = get(props, "data.site.siteMetadata.title")
  const pageTitle = get(props, "data.mdx.frontmatter.title")
  console.log(props)
  return (
    <>
      <BlogLayout>
        <Helmet title={`${mdx.frontmatter.title} | ${siteTitle}`} />
        <h1>{pageTitle}</h1>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </BlogLayout>
    </>
  )
}

export default PageTemplate
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      code {
        body
      }
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../components/layouts/BlogLayout"
import dompurify from "dompurify"
import "katex/dist/katex.min.css"

export default ({ data }) => {
  const post = data.markdownRemark
  const sanitizer = dompurify.sanitize
  return (
    <BlogLayout>
      <div>
        <h1 style={{ color: `white` }}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: sanitizer(post.html) }} />
      </div>
    </BlogLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BlogLayout from "../components/layouts/BlogLayout"
// import dompurify from "dompurify"
import "katex/dist/katex.min.css"
import MDXRenderer from "gatsby-mdx/mdx-renderer"

const PageTemplate = () => (
  <StaticQuery
    query={graphql`
      query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
          id
          frontmatter {
            title
          }
          code {
            body
          }
        }
      }
    `}
    render={data => (
      <>
        <BlogLayout>
          <div>
            <h1>{data.mdx.frontmatter.title}</h1>
            <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
          </div>
        </BlogLayout>
      </>
    )}
  />
)

// export const query = graphql`
//   query BlogPostQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       id
//       frontmatter {
//         title
//       }
//       code {
//         body
//       }
//     }
//   }
// `
export default PageTemplate

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `

// const post = data.markdownRemark
//{/* <div dangerouslySetInnerHTML={{ __html: sanitizer(post.html) }} /> */}

// with post.frontmatter below
// const sanitizer = dompurify.sanitize

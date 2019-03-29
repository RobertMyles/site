import BlogLanding from "../components/layouts/BlogLandingLayout"
import React from "react"
import { graphql } from "gatsby"
import { styles } from "../utils"

export default ({ data }) => (
  <div style={{ color: styles.colors.mainWhite }}>
    <BlogLanding />
    <h1>Blog</h1>
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
    {/* {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
        </h3>
        <p>{node.excerpt}</p>
      </div>
    ))} */}
  </div>
)

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

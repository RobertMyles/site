import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
// import Navbar from "../navbar"
import { styles } from "../../utils"

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1 style={{ color: styles.colors.mainWhite }}>
          About {data.site.siteMetadata.title}
        </h1>
        <p style={{ color: styles.colors.mainWhite }}>
          desc: {data.site.siteMetadata.author}
        </p>
      </div>
    )}
  />
)
// export default ({ data }) => (
//   <div>
//     <h1>Blog Posts</h1>
//     <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
//     {data.allMarkdownRemark.edges.map(({ node }) => (
//       <div key={node.id}>
//         <Link to={node.fields.slug}>
//           <h3>
//             {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
//           </h3>
//           <p>{node.excerpt}</p>
//         </Link>
//       </div>
//     ))}
//   </div>
// )
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

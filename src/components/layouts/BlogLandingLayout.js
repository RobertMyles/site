// import React from "react"
// import { StaticQuery, Link, graphql } from "gatsby"
// // import Navbar from "../navbar"
// import { styles } from "../../utils"

// // export default ({ data }) => (
// //   <StaticQuery
// //     query={graphql`
// //       query {
// //         allMdx {
// //           edges {
// //             node {
// //               id
// //               excerpt
// //               frontmatter {
// //                 title
// //               }
// //               fields {
// //                 slug
// //               }
// //             }
// //           }
// //         }
// //       }
// //     `}
// //     render={data => (
// //       <div>
// //         <h1>Blog Posts</h1>
// //         <ul>
// //           {posts.map(({ node: post }) => (
// //             <li key={post.id}>
// //             <Link to={post.fields.slug}>
// //             <h2>{post.frontmatter.title}</h2>
// //             </Link>
// //             <p>{post.excerpt}</p>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     )}
// //   />
// // )
// export default ({ data }) => (
//   <div>
//     <h1>Blog Posts</h1>
//     <h4>{data.allMdx.totalCount} Posts</h4>
//     {data.allMdx.edges.map(({ node }) => (
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
// // export const query = graphql`
// //   query {
// //     site {
// //       siteMetadata {
// //         title
// //       }
// //     }
// //   }
// // `
// export const query = graphql`
//   query {
//     allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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

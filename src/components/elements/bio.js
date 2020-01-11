import React from "react"
import { styles } from "../../utils"
import styled from "styled-components"
import { StaticQuery, Link, graphql } from "gatsby"
import circle from "../../images/circle_border.jpeg"
import GitHubButton from "react-github-btn"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <BioDiv>
        <Image src={circle} height={200} />
        <Ppp style={{ fontWeight: "bolder", fontSize: 35 }}>
          Hi, I'm Rob, welcome to my site.
        </Ppp>
        <Ppp style={{ maxWidth: "500px" }}>
          I'm a data scientist, currently working for{" "}
          <a href="https://www.firstdata.com/en_us/home.html">
            First Data/Fiserv
          </a>{" "}
          on problems such as fraud detection, report automation and analysis on
          encrypted data. I blog on my open-source work and on data science,
          usually R-related.
        </Ppp>
        <div style={{ textAlign: "center" }}>
          <GitHubButton href="https://github.com/robertmyles" data-size="large">
            robertmyles
          </GitHubButton>
        </div>
        <Ppp
          style={{
            fontFamily: styles.bodyFont,
            fontSize: 30,
            fontWeight: "bolder",
          }}
        >
          Latest Posts
        </Ppp>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledLink
              to={node.fields.slug}
              style={{ textDecoration: "none" }}
            >
              <h3 style={{ fontFamily: styles.titleFont }}>
                {node.frontmatter.title}
              </h3>
              {/* <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              /> */}
            </StyledLink>
          </div>
        ))}
      </BioDiv>
    )}
  />
)

const BioDiv = styled.div`
  font-family: ${styles.bodyFont};
  font-weight: lighter;
  padding-top: 40px;
  padding-left: 0px;
  text-align: left;
  max-height: 800px;
  a {
    color: ${styles.colors.mainRed};
    text-decoration: none;
  }
  a:hover {
    color: ${styles.colors.mainPink};
  }
`
const Ppp = styled.p`
  justify-content: center;
  max-width: 800px;
  font-size: 1.2rem;
`

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`
// const Datespan = styled.span`
//   font-family: ${styles.bodyFont};
//   color: ${styles.colors.mainGreen};
//   :hover {
//     color: ${styles.colors.mainBlue};
//   }
// `
const StyledLink = styled(Link)`
  color: ${styles.colors.mainRed};
  :hover {
      color: ${styles.colors.mainBlue};
    }
  }
`

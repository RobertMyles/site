import React from "react"
import { Link, graphql } from "gatsby"
import Navbar from "../components/navbar/Navbar"
import { styles } from "../utils"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import { MobileView } from "react-device-detect"

export default ({ data }) => (
  <>
    <Helmet title="Blog | Robert Myles McDonnell">
      <meta charSet="utf-8" />
      <title>Robert Myles McDonnell</title>
      <link rel="canonical" href="https://robertmylesmcdonnell.com" />
    </Helmet>
    <Navbar
      color={styles.colors.mainBlue}
      linkcolor={styles.colors.mainWhite}
      linkbackground={styles.colors.mainBlue}
      linkhover={styles.colors.mainRed}
      iconcolor={styles.colors.mainWhite}
      iconhover={styles.colors.mainRed}
    />
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
        <br />
        <h1 style={{ fontFamily: styles.bodyFont, fontSize: 40 }}>
          Blog Posts
        </h1>
        <h3 style={{ fontFamily: styles.bodyFont }}>
          {data.allMdx.totalCount} Posts
        </h3>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id} style={{ display: "inline-block" }}>
            <StyledLink
              to={node.fields.slug}
              style={{ textDecoration: "none" }}
            >
              <h2 style={{ fontFamily: styles.titleFont }}>
                {node.frontmatter.title}{" "}
                <span style={{ color: styles.colors.mainBlue }}> --- </span>
                <Datespan>{node.frontmatter.date}</Datespan>
              </h2>
              <span
                style={{
                  display: "inline-block",
                  color: styles.colors.mainBlue,
                  fontFamily: styles.bodyFont,
                }}
              >
                <Img
                  style={{ float: `left` }}
                  fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                />
                <p
                  style={{
                    left: `25px`,
                    position: "relative",
                    top: `12px`,
                    textAlign: "left",
                  }}
                >
                  {node.excerpt}
                </p>
              </span>
            </StyledLink>
          </div>
        ))}
      </Grid>
      <MobileView>
        <li>
          <StyledLink to="/blog">Blog</StyledLink>
        </li>
        <li>
          <StyledLink to="/cv">CV</StyledLink>
        </li>
        <li>
          <StyledLink to="/research">Research</StyledLink>
        </li>
        <li>
          <StyledLink to="/other">Other</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </MobileView>
    </Grid>
  </>
)
const Datespan = styled.span`
  font-family: ${styles.bodyFont};
  color: ${styles.colors.mainGreen};
  :hover {
    color: ${styles.colors.mainBlue};
  }
`
const StyledLink = styled(Link)`
  color: ${styles.colors.mainRed};
  display: inline-block;
  :hover {
      color: ${styles.colors.mainBlue};
    }
  }
`

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            featuredImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`

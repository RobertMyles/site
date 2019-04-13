import React from "react"
import { Link, graphql } from "gatsby"
import Navbar from "../components/navbar/Navbar"
import { styles } from "../utils"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

export default ({ data }) => (
  <>
    <Navbar
      color={styles.colors.mainPink}
      linkcolor={styles.colors.mainBlue}
      linkhover={styles.colors.mainWhite}
      linkbackground={styles.colors.mainPink}
      iconcolor={styles.colors.mainBlue}
      iconhover={styles.colors.mainWhite}
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
          <div key={node.id}>
            <StyledLink
              to={node.fields.slug}
              style={{ textDecoration: "none" }}
            >
              <h2 style={{ fontFamily: styles.titleFont }}>
                {node.frontmatter.title}{" "}
                <span style={{ color: styles.colors.mainBlue }}> --- </span>
                <Datespan>{node.frontmatter.date}</Datespan>
              </h2>
              <p
                style={{
                  color: styles.colors.mainBlue,
                  fontFamily: styles.bodyFont,
                }}
              >
                {node.excerpt}
              </p>
            </StyledLink>
          </div>
        ))}
      </Grid>
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

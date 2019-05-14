import React from "react"
import SEO from "../components/elements/seo"
import Navbar from "../components/navbar/Navbar"
import { styles } from "../utils"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

const StyledLink = styled(Link)`
  color: ${styles.colors.mainRed};
  :hover {
      color: ${styles.colors.mainBlue};
    }
  }
`

const NotFoundPage = ({ data }) => (
  <div>
    <Navbar
      color={styles.colors.mainBlack}
      linkcolor={styles.colors.mainWhite}
      linkbackground={styles.colors.mainBlack}
      linkhover={styles.colors.mainYellow}
      iconcolor={styles.colors.mainWhite}
      iconhover={styles.colors.mainYellow}
    />
    <SEO title="404: Not found" />
    <Grid container direction="row" justify="center">
      <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
        <h1 style={{ fontFamily: styles.titleFont }}>Opa! Page Not Found.</h1>
        <br />
        <p style={{ fontFamily: styles.bodyFont }}>
          You just hit a route that doesn&#39;t exist... maybe you meant one of
          the pages below?
        </p>
        <br />
        <br />
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledLink
              to={node.fields.slug}
              style={{ textDecoration: "none" }}
            >
              <h2 style={{ fontFamily: styles.titleFont }}>
                {node.frontmatter.title}
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
  </div>
)

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
        }
      }
    }
  }
`

export default NotFoundPage

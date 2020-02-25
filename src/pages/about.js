import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { styles } from "../utils"
import styled from "styled-components"
import Navbar from "../components/navbar/Navbar"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { MobileView } from "react-device-detect"

export default () => (
  <>
    <Helmet title="CV | Robert Myles McDonnell">
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
    <Container maxWidth="lg">
      <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
        <br />
        <br />
        <br />
        <DDiv>
          <Ppp>
            I received my PhD in International Relations from the University of
            Sao Paulo in Brazil in 2016, and I have a Master's in International
            Relations from Dublin City University, Ireland and my undergraduate
            degree in in Fine Art from the National College of Art & Design in
            Dublin.{" "}
          </Ppp>
          <Ppp>
            I've been working in data science since 2014, and among the
            positions I've held, I've been the director of the DIPROJ technical
            unit in the Sao Paulo City Council and the lead data scientist for
            Avanade.
          </Ppp>
          <Ppp>
            I'm also an open-source developer and I've produced a number of
            software packages for the statistical programming language{" "}
            <a href="https://cran.r-project.org/">R</a>. I'm particularly
            interested in data visualization and producing something meaningful
            from data. My other interests include the philosophy of economics,
            Bayesian modelling and political science.
          </Ppp>

          <Ppp>
            I blog (infrequently) about stuff I've learned in R, Python or so
            on. I like to share it because I learned this way -- from people
            taking time to post tutorials, snippets of code or to write blog
            posts.{" "}
          </Ppp>
          <Ppp>
            Apart from data science, I like to code in JavaScript, particularly
            React.js. I made this website using{" "}
            <a href="https://www.gatsbyjs.org/">Gatsby.js</a>,{" "}
            <a href="https://mdxjs.com/">MDX</a>,{" "}
            <a href="https://reactjs.org/">React</a> and{" "}
            <a href="https://www.styled-components.com/">Styled Components</a>.
            The code can be seen on the GitHub repo for the site. The design is
            my own, although inspired by{" "}
            <a href="https:beautifulwebtype.com/space-grotesk/">
              Beautiful Web Type and Tania Rascia's{" "}
              <a href="https://www.taniarascia.com/">website</a>.
            </a>{" "}
            For the fonts, I used the lovely{" "}
            <a href="https:alessiolaiso.com/aleo-font">Aleo</a> font by Alessio
            Laiso, with{" "}
            <a href="https:fonts.floriankarsten.com/space-grotesk">
              Space Grotesk
            </a>{" "}
            by Florian Karsten for titles, and{" "}
            <a href="https:fonts.google.com/specimen/Inconsolata">
              Inconsolata
            </a>{" "}
            for code.
          </Ppp>
        </DDiv>
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
    </Container>
  </>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const Ppp = styled.p`
  justify-content: center;
  max-width: 1200px;
  font-size: 1.2rem;
  font-weight: lighter;
`

const DDiv = styled.div`
  font-family: ${styles.bodyFont};
  padding-top: 40px;
  padding-left: 0px;
  text-align: left;
  max-height: 800px;
  h3 {
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  a {
    color: ${styles.colors.mainRed};
    text-decoration: none;
  }
  a:hover {
    color: ${styles.colors.mainPink};
  }
`

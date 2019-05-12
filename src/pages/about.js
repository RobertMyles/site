import React from "react"
import { graphql, Link } from "gatsby"
import { styles } from "../utils"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Navbar from "../components/navbar/Navbar"
import Helmet from "react-helmet"

const Ddiv = styled.div`
  font-family: ${styles.bodyFont};
  font-size: 1.1rem;
  a {
    color: ${styles.colors.mainRed};
    text-decoration: none;
  }
  a:hover {
    color: ${styles.colors.mainPink};
  }
`

export default () => (
  <>
    <Helmet title="About | Robert Myles McDonnell">
      <meta charSet="utf-8" />
      <title>Robert Myles McDonnell</title>
      <link rel="canonical" href="http://robertmylesmcdonnell.com" />
    </Helmet>
    <Navbar
      color={styles.colors.mainRed}
      linkcolor={styles.colors.mainWhite}
      linkbackground={styles.colors.mainRed}
      linkhover={styles.colors.mainGreen}
      iconcolor={styles.colors.mainWhite}
      iconhover={styles.colors.mainGreen}
    />
    <Grid
      container
      direction="column"
      justify="center"
      style={{ margin: 40, maxWidth: 1200 }}
    >
      <Ddiv>
        <h2 style={{ fontFamily: styles.titleFont }}>
          I'm Robert McDonnell, welcome to my site.
        </h2>

        <p>
          I blog (infrequently) about stuff I've learned in R, Python or JS, or
          so on. I like to share it because I learned this way -- from people
          taking time to post tutorials, snippets of code or to write blog
          posts. I built this website using{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>, from -- you guessed it
          -- their tutorials. I used Gatsby because I like React. I like React
          because it makes it easy to include other things as components, such
          as D3, and I wanted a way to put D3 into webpages while still enjoying
          writing webpages. Since I don't enjoy writing HTML, I use markdown, or
          specifically MDX, which allows you to write simple markdown while
          including React (and hence D3); RMarkdown, which allows you to include
          R code (as well as that for other languages) into your markdown, and
          styled components. I built this website as a way to learn how to build
          websites (mostly) from scratch. The design is my own and that was one
          of most challenging parts of it.
        </p>

        <p>
          I studied Fine Art in <a href="http://www.ncad.ie">NCAD</a> in Dublin,
          Ireland, International Relations & Political Science in{" "}
          <a href="http://www.dcu.ie">DCU</a>, and I did my PhD in International
          Relations in the{" "}
          <a href="https://www5.usp.br/">University of São Paulo</a>.
        </p>

        <p>
          My academic work focused on Bayesian item-response models of
          legislative voting, and in my current job, I'm working with huge
          streams of sensitive data in the fraud area.
        </p>

        <p>
          When I'm not at the{" "}
          <span style={{ fontFamily: styles.codeFont }}>$DAY_JOB</span>, I'm
          poking around with some R packages, playing the guitar or spending
          some time with my wife and daughter.
        </p>

        <p>
          You can find my work on{" "}
          <a href="https://github.com/RobertMyles">GitHub</a>, my{" "}
          <a href="https://br.linkedin.com/in/robert-mcdonnell-7475b320">
            LinkedIn
          </a>
          , or just have a look at my <Link to="/cv/">CV</Link>.
        </p>
        <p>
          For this site, I used the lovely{" "}
          <a href="https://alessiolaiso.com/aleo-font">Aleo</a> font by Alessio
          Laiso, with{" "}
          <a href="https://fonts.floriankarsten.com/space-grotesk">
            Space Grotesk
          </a>{" "}
          by Florian Karsten for titles, and{" "}
          <a href="https://fonts.google.com/specimen/Inconsolata">
            Inconsolata
          </a>{" "}
          for code. The color scheme was influenced by{" "}
          <a href="https://beautifulwebtype.com/space-grotesk/">
            Beautiful Web Type .
          </a>
        </p>
      </Ddiv>
    </Grid>
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

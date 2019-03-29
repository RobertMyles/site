import React from "react"
// import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  // <Layout>
  <>
    <h4>I'm Robert McDonnell, welcome to my little site.</h4>

    <p>
      I blog (infrequently) about stuff I've learned in R, or JS, or so on. I
      like to share it 'cos I learned that way -- from people taking time to
      post tutorials etc. I built this website using
      <a href="https://www.gatsbyjs.org/">Gatsby</a>, from -- you guessed it --
      their tutorials. I used Gatsby 'cos I like React.
    </p>

    <p>
      I studied Fine Art in <a href="http://www.ncad.ie">NCAD</a> in Dublin,
      Ireland, International Relations & Political Science in{" "}
      <a href="http://www.dcu.ie">DCU</a>, and I did my PhD in International
      Relations in the University of São Paulo.
    </p>

    <p>
      My academic work focused on Bayesian item-response models of legislative
      voting, and in my current job, I'm working with huge streams of sensitive
      data in the fraud area.
    </p>

    <p>
      When I'm not at the $DAY_JOB, I'm poking around with some R packages,
      playing the guitar or spending some time with my wife and daughter.
    </p>

    <p>
      You can find my work on{" "}
      <a href="https://github.com/RobertMyles">GitHub</a>, my{" "}
      <a href="https://br.linkedin.com/in/robert-mcdonnell-7475b320">
        LinkedIn
      </a>
      , or just have a look at my{" "}
      <a href="http://robertmylesmcdonnell.com/cv/">CV</a>.
    </p>
  </>
  // </Layout>
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

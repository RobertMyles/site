import React from "react"
import { styles } from "../../utils"
import styled from "styled-components"

export default function Bio() {
  return (
    <BioDiv>
      <h1>Robert Myles McDonnell</h1>
      <Ppp>
        <em>Data Scientist</em>
      </Ppp>
      <br />
      <Ppp style={{ fontWeight: "bolder" }}>
        I'm Robert McDonnell, welcome to my site.
      </Ppp>
      <Ppp>
        I am a creative data scientist, currently working as a senior data
        scientist for{" "}
        <a href="https://www.firstdata.com/en_us/home.html">
          First Data/Fiserv
        </a>{" "}
        in their new Research & Development Center in Nenagh, Ireland, where I
        work on problems such as fraud detection, report automation and analysis
        on encrypted data.
      </Ppp>

      <Ppp>
        I received my PhD in International Relations from the University of Sao
        Paulo in Brazil in 2016. I have a Master's in International Relations
        from Dublin City University, Ireland and my undergraduate degree in in
        Fine Art from the National College of Art & Design in Dublin. I've been
        working in data science since 2014, and among the positions I've held,
        I've been the director of the DIPROJ technical unit in the Sao Paulo
        City Council and the lead data scientist for Avanade. I'm also an
        open-source developer and I've produced a number of software packages
        for the statistical programming language{" "}
        <a href="https://cran.r-project.org/">R</a>. I'm particularly interested
        in data visualization and producing something meaningful from data. My
        other interests include the philosophy of economics, Bayesian modelling
        and political science.
      </Ppp>

      <Ppp>
        I blog (infrequently) about stuff I've learned in R, Python or so on. I
        like to share it because I learned this way -- from people taking time
        to post tutorials, snippets of code or to write blog posts. Apart from
        data science, I like to code in JavaScript, particularly React.js. I
        made this website using{" "}
        <a href="https://www.gatsbyjs.org/">Gatsby.js</a>,{" "}
        <a href="https://mdxjs.com/">MDX</a>,{" "}
        <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://www.styled-components.com/">Styled Components</a>. The
        code can be seen on the GitHub repo for the site. The design is my own,
        although inspired by{" "}
        <a href="https:beautifulwebtype.com/space-grotesk/">
          Beautiful Web Type.
        </a>{" "}
        For the fonts, I used the lovely{" "}
        <a href="https:alessiolaiso.com/aleo-font">Aleo</a> font by Alessio
        Laiso, with{" "}
        <a href="https:fonts.floriankarsten.com/space-grotesk">Space Grotesk</a>{" "}
        by Florian Karsten for titles, and{" "}
        <a href="https:fonts.google.com/specimen/Inconsolata">Inconsolata</a>{" "}
        for code.
      </Ppp>
    </BioDiv>
  )
}

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

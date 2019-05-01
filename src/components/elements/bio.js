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
      <Ppp>
        TO DO: fix query on template; code colors if poss; undone pages; check
        sizes on different machines & browsers; copyright on mobile;;; I am a
        creative data scientist, currently working as a senior data scientist
        for <a href="https://www.firstdata.com/en_us/home.html">First Data</a>{" "}
        in their new Research & Development Center in Nenagh, Ireland. I am
        helping to create the global Data Strategy for First Data and working on
        our FraudDetect product. Our team generates insights from the millions
        of transactions that First Data processes every day, helping to create
        new products and to improve existing ones.
      </Ppp>

      <Ppp>
        I received my PhD in International Relations from the University of Sao
        Paulo in Brazil in 2016. I have a Master's in International Relations
        from Dublin City University, Ireland and my undergraduate degree in in
        Fine Art from the National College of Art & Design in Dublin. I've been
        working in data science since 2014, and among the positions I've held,
        I've been the director of the DIPROJ technical unit in the Sao Paulo
        City Council and the lead data scientist for Avanade. I'm a committed
        open-source developer and I've produced a number of software packages
        for the statistical programming language{" "}
        <a href="https://cran.r-project.org/">R</a>. I'm passionate about data
        visualization and producing something meaningful from data. My interests
        include the philosophy of economics, Bayesian modelling and political
        science.
      </Ppp>

      <Ppp>
        Apart from data science, I like to code in JavaScript, particularly
        React.js. I produced this website using{" "}
        <a href="https://www.gatsbyjs.org/">Gatsby.js</a>,{" "}
        <a href="https://mdxjs.com/">MDX</a>,{" "}
        <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://www.styled-components.com/">Styled Components</a>. The
        code can be seen on the GitHub repo for the site. I maintain a blog,
        usually writing on topics relating to data viz, R and{" "}
        <a href="https://cafehayek.com/">political economy</a>.
      </Ppp>
    </BioDiv>
  )
}

const BioDiv = styled.div`
  font-family: ${styles.bodyFont};
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

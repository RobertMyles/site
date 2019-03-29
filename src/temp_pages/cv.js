/* eslint-disable */
import React from "react"
// import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
// import { css } from "@emotion/core"
import {
  FaBirthdayCake,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa"

export default ({ data }) => (
  // <Layout>
  // <div css={css`padding-left: 14px;`}>
  // <p><FaBirthdayCake css={css`color: #42CAFD;`}/>  19/12/1980</p>
  // <p><FaPhone css={css`color: #42CAFD;`}/>  +353 87 667 5328</p>
  // <a css={css`text-decoration: none;`} href="mailto:robertmylesmcdonnell@gmail.com">
  //     <p css={css`color: #373737;`}><FaEnvelope css={css`color: #42CAFD;`}/> robertmylesmcdonnell@gmail.com</p></a>
  // </div>
  <>
    <p>
      I'm a creative data scientist with an interest in the big picture of data
      science -- figuring out how all the pieces go together, from data
      ingestion, exploration and analysis to modelling pipelines and deployment.
      I prefer to use R for exploration & analysis, Python for modelling
      pipelines and deployment, and I'm a big fan of properly-done data
      visualization, which I like to do in ggplot2 or D3 with React for
      something online. I'm still trying to figure out what I like for ingestion
      & deployment, but leaning towards Spark & Scala and Tensorflow Extended.
    </p>

    <br />
    <h3>Data Scientist, First Data Corporation</h3>
    {/* <p css={css`color: #FF6B6B`}>08/2018 — Present</p> */}
    <p>
      Modelling of fraud in high-volume real-time settings; member of
      three-person team responsible for First Data's global data strategy;
      automation of ETL, modelling and deployment of ML pipelines.{" "}
    </p>
    <br />
    <h3>Lead Data Scientist, Avanade, São Paulo</h3>
    {/* <p css={css`color: #FF6B6B`}>08/2017 — 07/2018</p> */}
    <p>
      I brought data science into Avanade Brazil, working on various problems
      for different clients. This work including fraud modelling using deep
      learning & H20, sentiment analysis, audio analysis, BI, data visualization
      and data tidying. I gave a course on{" "}
      <a href="http://vita.had.co.nz/papers/tidy-data.pdf">tidy data</a> and
      several tutorials on the R language to staff across the company.
    </p>
    <br />
    <h3>
      Data Science Team Director, Ministry of Finance, São Paulo City Council
    </h3>
    {/* <p css={css`color: #FF6B6B`}>03/2017 — 07/2017</p> */}
    <p>
      I headed a team responsible for making accurate forecasts of data on
      public spending. A big part of my job was also modernizing the way the
      department does analysis. To do that, I gave an in-house R course and
      built a Shiny application for the department (part of an internal R
      package that I wrote), along with the production of semi-automated
      reports.
    </p>
    <br />
    <h3>
      Course Tutor, Brazilian Institute of Research and Data Analysis (IBPAD)
    </h3>
    {/* <p css={css`color: #FF6B6B`}>08/2016 — 06/2018</p> */}
    <p>
      Responsible for designing and giving courses on Data Science with R and
      Data Visualization with ggplot2, and producing blog posts on data science
      topics for the company. My classes formed the basis for a
      <a href="https://www.ibpad.com.br/o-que-fazemos/publicacoes/introducao-ciencia-de-dados-com-r">
        {" "}
        book{" "}
      </a>
      published by IBPAD.
    </p>
    <br />
    <h3>Freelance Data Scientist</h3>
    {/* <p css={css`color: #FF6B6B`}>01/2014 — 01/2017</p> */}
    <p>
      I've helped people with projects ranging from their academic work to
      scraping information from social media sites, text analysis to statistics,
      in areas ranging from finance to communication and to legislative studies.
    </p>
    <br />
    <h3>
      Master's Degree Materials Writer and Data Scientist, Getúlio Vargas
      Foundation (FGV), São Paulo
    </h3>
    {/* <p css={css`color: #FF6B6B`}>08/2016 — 03/2017</p> */}
    <p>
      Responsible for writing case studies for FGV, which are used as teaching
      materials in their post-graduate courses. Also some data science work
      (web-scraping, organizing & cleaning data and statistical analyses) for
      some researchers involved with the Centre for International Relations.
    </p>
    <br />

    <br />
    <h2>
      <FaGraduationCap /> Academic Background
    </h2>
    <h3>PhD International Relations, University of São Paulo</h3>
    {/* <p css={css`color: #FF6B6B`}>2016</p> */}
    <p>
      Thesis: Explaining the Determinants of Foreign Policy Voting Behaviour in
      the Brazilian Houses of Legislature, with a Focus on the Senate. Available{" "}
      <Link to={"/research"}>here</Link>.
    </p>
    <br />
    <h3>
      Master's International Relations, Dublin City University (First Class
      Honour)
    </h3>
    {/* <p css={css`color: #FF6B6B`}>2010</p> */}
    <p>
      Thesis: Brazil’s Foreign Policy- Domestic Interests, Presidentialism or
      the Autonomy of Itamaraty?
    </p>
    <br />
    <h3>
      Bachelor’s Degree in Fine Art, National College of Art & Design, Dublin
      (Honours)
    </h3>
    {/* <p css={css`color: #FF6B6B`}>2004</p> */}
    <br />
    <br />
    <h2>
      <FaCode /> Programming Skills
    </h2>
    <p>
      <li>Advanced R user</li>
      <li>Good knowledge of Python (Tensorflow, Scikit-learn)</li>
      {/* eslint-disable-next-line */}
      <li>
        JavaScript: Very good knowledge of React, D3, Gatsby (I built this
        website myself using Gatsby)
      </li>
      <li>Experienced user of Stan & JAGS</li>
      <li>Learning Scala, Spark and the tools of the Hadoop Ecosystem</li>
      {/* <p css={css`font-family: "Playfair Display";`}><b>R packages:</b></p> */}
      <ul>
        <li>
          <a href="https://github.com/RobertMyles/tidyRSS">tidyRSS</a>
        </li>
        <li>
          <a href="https://github.com/RobertMyles/congressbr">congressbr</a>
        </li>
        <li>
          <a href="https://github.com/RobertMyles/cepR">cepR</a>
        </li>
        <li>
          <a href="https://github.com/RobertMyles/flagfillr">flagfillr</a>
        </li>
        <li>
          <a href="https://github.com/danilofreire/prisonbrief">prisonBrief</a>
        </li>
        <li>
          <a href="https://github.com/RobertMyles/rugger">rugger</a>
        </li>
        <li>
          <a href="https://github.com/RobertMyles/XKCDdata">XKCDdata</a>
        </li>
        <li>
          <a href="https://github.com/RobertMyles/ibge">ibge</a>
        </li>
        ...and others.
      </ul>
    </p>
    {/* </Layout> */}
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

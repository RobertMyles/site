import React from "react"
import { graphql, Link } from "gatsby"
import { IconContext } from "react-icons"
import Helmet from "react-helmet"
import {
  FaBriefcase,
  FaPython,
  FaRProject,
  FaJsSquare,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaCode,
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
  FaTwitter,
} from "react-icons/fa"
import { IoIosStats } from "react-icons/io"
import { DiScala } from "react-icons/di"
import { styles } from "../utils"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Navbar from "../components/navbar/Navbar"
import { MobileView } from "react-device-detect"

const CVDiv = styled.div`
  font-family: ${styles.bodyFont};
  font-weight: lighter;
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
const Ppp = styled.p`
  justify-content: center;
  max-width: 1200px;
  font-size: 1.2rem;
`

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
    <Container fixed>
      <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
        <CVDiv>
          <h2>
            <IconContext.Provider value={{ color: styles.colors.mainBlue }}>
              <FaBriefcase /> Work Experience
            </IconContext.Provider>
          </h2>
          <h3>Senior Data Scientist, First Data Corporation</h3>
          <Ppp>08/2018 — Present</Ppp>
          <Ppp>
            Modelling of fraud in high-volume real-time settings; machine
            learning, deployment of ML models; automation of client reports with
            R, Rmarkdown, Python & SQL; tech lead & scrum master roles.{" "}
          </Ppp>
          <br />
          <h3>Lead Data Scientist, Avanade, São Paulo</h3>
          <Ppp>08/2017 — 07/2018</Ppp>
          <Ppp>
            Tasked with bringing data science into Avanade Brazil, working on
            various problems for different clients. This work included fraud
            modelling using deep learning & h2o, sentiment analysis, audio
            analysis, BI, data visualization and data tidying. I gave a course
            on{" "}
            <a href="https://vita.had.co.nz/papers/tidy-data.pdf">tidy data</a>{" "}
            and several tutorials on the R language to staff across the company.
          </Ppp>
          <br />
          <h3>
            Director of Data Science, Ministry of Finance, São Paulo City
            Council
          </h3>
          <Ppp>03/2017 — 07/2017</Ppp>
          <Ppp>
            Headed a team responsible for making accurate forecasts of data on
            public spending. A big part of my job was also modernizing the way
            the department does analysis. To do that, I gave an in-house R
            course and built a Shiny application for the department (part of an
            internal R package that I wrote), along with the production of
            semi-automated reports.
          </Ppp>
          <br />
          <h3>
            Course Tutor, Brazilian Institute of Research and Data Analysis
            (IBPAD)
          </h3>
          <Ppp>08/2016 — 06/2018</Ppp>
          <Ppp>
            Responsible for designing and giving courses on Data Science with R
            and Data Visualization with ggplot2, and producing blog posts on
            data science topics for the company. My classes formed the basis for
            a
            <a href="https://www.ibpad.com.br/o-que-fazemos/publicacoes/introducao-ciencia-de-dados-com-r">
              {" "}
              book{" "}
            </a>
            published by IBPAD in 2018.
          </Ppp>
          <br />
          <h3>Freelance Data Scientist</h3>
          <Ppp>01/2014 — 01/2017</Ppp>
          <Ppp>
            I've helped people with projects ranging from their academic work to
            scraping information from social media sites, text analysis to
            statistics, in areas ranging from finance to communication and to
            legislative studies.
          </Ppp>
          <br />
          <h3>
            Master's Degree Materials Writer and Data Scientist, Getúlio Vargas
            Foundation (FGV), São Paulo
          </h3>
          <Ppp>08/2016 — 03/2017</Ppp>
          <Ppp>
            Responsible for writing case studies for FGV, which are used as
            teaching materials in their post-graduate courses. Also some data
            science work (web-scraping, organizing & cleaning data and
            statistical analyses) for some researchers involved with the Centre
            for International Relations.
          </Ppp>
          <br />
          <br />
          <hr />
          <h2>
            <FaGraduationCap /> Academic Background
          </h2>
          <h3>PhD International Relations, University of São Paulo</h3>
          <Ppp>2016</Ppp>
          <Ppp>
            Thesis: Explaining the Determinants of Foreign Policy Voting
            Behaviour in the Brazilian Houses of Legislature, with a Focus on
            the Senate. Available <Link to={"/research"}>here</Link>. My work
            focused on Bayesian Item Response Modelling of legislative voting
            patterns.
          </Ppp>
          <br />
          <h3>
            Master's International Relations, Dublin City University (First
            Class Honour)
          </h3>
          <Ppp>2010</Ppp>
          <Ppp>
            Thesis: Brazil’s Foreign Policy- Domestic Interests, Presidentialism
            or the Autonomy of Itamaraty?
          </Ppp>
          <br />
          <h3>
            Bachelor’s Degree in Fine Art, National College of Art & Design,
            Dublin (Honours)
          </h3>
          <Ppp>2004</Ppp>
          <br />
          <br />
          <hr />
          <h2>
            <IconContext.Provider value={{ color: styles.colors.mainRed }}>
              <FaCode /> Programming Skills
            </IconContext.Provider>
          </h2>
          <Ppp>
            <li>
              <IconContext.Provider value={{ color: styles.colors.mainBlue }}>
                <FaRProject /> Advanced R user
              </IconContext.Provider>
            </li>
            <li>
              <IconContext.Provider value={{ color: styles.colors.mainBlue }}>
                <FaPython /> Very good knowledge of Python (Tensorflow,
                Scikit-learn, Pandas)
              </IconContext.Provider>
            </li>

            <li>
              <IconContext.Provider value={{ color: styles.colors.mainYellow }}>
                <FaJsSquare /> {/* eslint-disable-next-line */} JavaScript: Very
                good knowledge of React & D3
              </IconContext.Provider>
            </li>
            <li>
              <IoIosStats />
              Experienced user of Stan & JAGS
            </li>
            <li>
              <IconContext.Provider value={{ color: styles.colors.mainRed }}>
                <DiScala />
                Beginner with Scala, Spark and the tools of the Hadoop Ecosystem
              </IconContext.Provider>
            </li>
            <Ppp>
              <h3>R packages:</h3>
            </Ppp>
            <Ppp>
              I've authored or collaborated on various R packages, some of which
              have had over 20K downloads (tidyRSS) and others which are just
              for fun.
            </Ppp>
            <ul>
              <li>
                <a href="https://github.com/RobertMyles/tidyRSS">tidyRSS</a> -
                <i>downloads and tidies RSS feeds</i>
              </li>
              <li>
                <a href="https://github.com/duarteguilherme/congressbr">
                  congressbr
                </a>{" "}
                -<i>fetches Brazilian legislative data</i>
              </li>
              <li>
                <a href="https://github.com/RobertMyles/cepR">cepR</a> -
                <i>Brazilian postal code data</i>
              </li>
              <li>
                <a href="https://github.com/RobertMyles/flagfillr">flagfillr</a>{" "}
                -<i>use flags as 'fill's with ggplot2</i>
              </li>
              <li>
                <a href="https://github.com/danilofreire/prisonbrief">
                  prisonBrief
                </a>{" "}
                -<i>World Prison Brief data</i>
              </li>
              <li>
                <a href="https://github.com/RobertMyles/rugger">rugger</a> -
                <i>an R package for rugby fans</i>
              </li>
              <li>
                <a href="https://github.com/RobertMyles/XKCDdata">XKCDdata</a> -
                <i>data from the XKCD api</i>
              </li>
              <li>
                <a href="https://github.com/RobertMyles/ibge">ibge</a>
              </li>
              <br />
              ...and{" "}
              <a href="https://github.com/RobertMyles?tab=repositories">
                others
              </a>
              .
            </ul>
          </Ppp>
          <br />
          <hr />
          <h2>Contact</h2>
          <Ppp>
            <div style={{ display: "block" }}>
              <ul>
                <li>
                  <FaPhone /> +353 87 667 5328{" "}
                </li>
                <li>
                  <a href="mailto:robertmylesmcdonnell@gmail.com">
                    <FaEnvelope /> robertmylesmcdonnell@protonmail.com
                  </a>
                </li>
                <li>
                  <IconContext.Provider
                    value={{ color: styles.colors.mainBlue, size: `1.2em` }}
                  >
                    <a href="https://www.linkedin.com/in/robert-mcdonnell-7475b320/">
                      <FaLinkedin />
                    </a>
                  </IconContext.Provider>
                </li>
                <li>
                  <IconContext.Provider
                    value={{ color: styles.colors.mainYellow, size: `1.2em` }}
                  >
                    <a href="https://stackoverflow.com/users/4296028/robertmyles">
                      <FaStackOverflow />
                    </a>
                  </IconContext.Provider>
                </li>
                <li>
                  <IconContext.Provider
                    value={{ color: styles.colors.mainBlack, size: `1.2em` }}
                  >
                    <a href="https://github.com/RobertMyles">
                      <FaGithub />
                    </a>
                  </IconContext.Provider>
                </li>
                <li>
                  <IconContext.Provider
                    value={{ color: styles.colors.mainBlue, size: `1.2em` }}
                  >
                    <a href="https://twitter.com/RobertMylesMc">
                      <FaTwitter />
                    </a>
                  </IconContext.Provider>
                </li>
              </ul>
            </div>
          </Ppp>
          <br />
          <br />
          <br />
          <br />
        </CVDiv>
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

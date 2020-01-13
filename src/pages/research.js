import React from "react"
import { styles } from "../utils"
import { graphql, withPrefix } from "gatsby"
import styled from "styled-components"
import {
  FaFileAlt,
  FaFile,
  FaBook,
  FaFilePdf,
  FaRegFile,
  FaUniversity,
} from "react-icons/fa"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Navbar from "../components/navbar/Navbar"
import { IconContext } from "react-icons"

const RDiv = styled.div`
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
const Ppp = styled.p`
  justify-content: center;
  max-width: 1200px;
  font-size: 1.2rem;
`
export default () => (
  <>
    <Navbar
      color={styles.colors.mainBlue}
      linkcolor={styles.colors.mainWhite}
      linkbackground={styles.colors.mainBlue}
      linkhover={styles.colors.mainRed}
      iconcolor={styles.colors.mainWhite}
      iconhover={styles.colors.mainRed}
    />
    <Container maxWidth="md">
      <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
        <RDiv>
          <h2>
            <FaRegFile /> Papers
          </h2>
          <Ppp>
            <a href="https://larrlasa.org/articles/10.25222/larr.447/">
              <FaFileAlt /> congressbr: An R Package for Analyzing Data from
              Brazil’s Chamber of Deputies and Federal Senate
            </a>
            <br />
            <i>
              {" "}
              <p style={{ fontWeight: `lighter` }}>
                - with Danilo Freire and Guilherme J. Duarte; Latin American
                Research Review, 2019.
              </p>
            </i>
          </Ppp>

          <Ppp>
            <IconContext.Provider value={{ color: styles.colors.mainBlue }}>
              <a href="https://www.theoj.org/joss-papers/joss.00361/10.21105.joss.00361.pdf">
                <FaFileAlt /> prisonbrief: An R package that returns tidy data
                from the World Prison Brief website
              </a>
            </IconContext.Provider>
            <br />
            <i>
              <p style={{ fontWeight: `lighter` }}>
                - with Danilo Freire; The Journal of Open Source Software,
                February 2018.
              </p>
            </i>
          </Ppp>

          <Ppp>
            <IconContext.Provider value={{ color: styles.colors.mainYellow }}>
              <a href="https://www.scielo.br/pdf/bpsr/v11n1/1981-3821-bpsr-1981-3821201700010007.pdf">
                <FaFilePdf /> Formally Comparing Legislative Institutions
              </a>
            </IconContext.Provider>
            <br />
            <p style={{ fontWeight: `lighter` }}>
              <i>Brazilian Political Science Review, Issue 1, 2017.</i>
            </p>
          </Ppp>

          <Ppp>
            <FaFile /> Measuring the effect of group-based voting in the United
            Nations General Assembly
            <br />
            <p style={{ fontWeight: `lighter` }}>
              <i>- with Danilo Freire, working paper.</i>
            </p>
          </Ppp>
          <br />
          <hr />
          <h2>
            <FaBook /> Books
          </h2>
          <Ppp>
            <IconContext.Provider value={{ color: styles.colors.mainGreen }}>
              <a href="https://www.ibpad.com.br/o-que-fazemos/publicacoes/introducao-ciencia-de-dados-com-r">
                <FaBook /> Introduction to Data Science with R
              </a>
            </IconContext.Provider>
            <br />
            <i>
              <p style={{ fontWeight: `lighter` }}>
                - with Paulo de Oliveira and Saulo Guerra; published by IBPAD,
                June 2018. (In Portuguese.)
              </p>
            </i>
          </Ppp>
          <br />
          <hr />
          <h2>
            <FaUniversity /> Thesis
          </h2>
          <Ppp>
            <IconContext.Provider value={{ color: styles.colors.mainBlue }}>
              <a
                rel="noopener noreferrer"
                href={withPrefix("/Robert_Myles_McDonnell_thesis.pdf")}
                target="blank"
              >
                <FaBook /> Explaining the Determinants of Foreign Policy Voting
                Behaviour in the Brazilian Houses of Legislature, with a Focus
                on the Senate
              </a>
            </IconContext.Provider>
            <br />
            <i>
              <p style={{ fontWeight: `lighter` }}>
                My PhD thesis, defended at the University of São Paulo in June
                2016.
              </p>
            </i>
            <br />
            <br />
          </Ppp>
        </RDiv>
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

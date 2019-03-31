/* eslint-disable */
import React from "react"
// import Layout from "../components/layout"
import { graphql } from "gatsby"
// import { css } from "@emotion/core"
import { FaFile, FaBook, FaFilePdf } from "react-icons/fa"

export default ({ data }) => (
  //   <Layout>
  <>
    <p>
      {/* <FaFilePdf /><span css={css`padding-left: 6px;`}> */}
      {/* congressbr: An R Package for Analyzing Data fromBrazil’s Chamber of Deputies and Federal Senate</span> */}
      {/* <p css={css`padding-left: 32px;`}><i>With Danilo Freire and Guilherme J. Duarte; Forthcoming in the Latin American Research Review, 2019.</i></p> */}
    </p>

    <p>
      <a href="https://www.ibpad.com.br/o-que-fazemos/publicacoes/introducao-ciencia-de-dados-com-r">
        {/* <FaBook /><span css={css`padding-left: 6px;`}> */}
        {/* Introduction to Data Science with R</span> */}
      </a>
      {/* <p css={css`padding-left: 32px;`}> */}
      {/* <i>With Paulo de Oliveira and Saulo Guerra; published by IBPAD, June 2018.</i> */}
      {/* </p>  */}
    </p>

    <p>
      <a href="https://www.theoj.org/joss-papers/joss.00361/10.21105.joss.00361.pdf">
        <FaFile />
        {/* <span css={css`padding-left: 6px;`}> */}
        prisonbrief: An R package that returns tidy data from the World Prison
        Brief website
        {/* </span> */}
      </a>
      {/* <p css={css`padding-left: 32px;`}><i>With Danilo Freire; The Journal of Open Source Software, February 2018.</i></p> */}
    </p>

    <p>
      <a href="http://www.scielo.br/pdf/bpsr/v11n1/1981-3821-bpsr-1981-3821201700010007.pdf">
        <FaFilePdf />
        {/* <span css={css`padding-left: 6px;`}> */}
        Formally Comparing Legislative Institutions
        {/* </span> */}
      </a>
      {/* <p css={css`padding-left: 32px;`}><i>Brazilian Political Science Review, Issue 1, 2017.</i></p> */}
    </p>

    <p>
      <a href="/static/Robert_Myles_McDonnell_thesis-788424f16f2a8e442b5a3875973a23a5.pdf">
        {/* <FaBook /><span css={css`padding-left: 6px;`}> */}
        Explaining the Determinants of Foreign Policy Voting Behaviour in the
        Brazilian Houses of Legislature, with a Focus on the Senate
        {/* </span> */}
      </a>
      {/* <p css={css`padding-left: 32px;`}><i>My PhD thesis, defended at the University of São Paulo in June 2016.</i></p> */}
    </p>

    <p>
      <a href="/static/Robert_Myles_McDonnell_thesis-788424f16f2a8e442b5a3875973a23a5.pdf">
        {/* <FaFile /><span css={css`padding-left: 6px;`}>Measuring the effect of group-based voting in the United Nations General Assembly</span> */}
      </a>
      {/* <p css={css`padding-left: 32px;`}><i>With Danilo Freire, working paper.</i></p> */}
    </p>

    <p>
      <a href="/static/Robert_Myles_McDonnell_thesis-788424f16f2a8e442b5a3875973a23a5.pdf">
        <FaFile />
        {/* <span
          css={css`
            padding-left: 6px;
          `}
        > */}
        The Brazilian Congress and Foreign Policy: delegation & abdication
        {/* </span> */}
      </a>
      {/* <p css={css`padding-left: 32px;`}><i>Working paper.</i></p> */}
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

import React from "react"
import { styles } from "../../utils"
import styled from "styled-components"

export default function Copyright() {
  return (
    <>
      <br />
      <br />
      <Pp>
        Designed by Robert Myles McDonnell, inspired by&nbsp;
        <Aa href="https://beAautifulwebtype.com/space-grotesk/">
          Beautiful Web Type
        </Aa>
        . Built with&nbsp;<Aa href="https://reactjs.org/">React</Aa>&nbsp;
        and&nbsp;
        <Aa href="https://www.gatsbyjs.org/">Gatsby.js</Aa>.
      </Pp>
    </>
  )
}

const Aa = styled.a`
  text-decoration: none;
  color: ${styles.colors.mainPink};
  transition: all 0.2s ease-in-out;
  &:focus,
  &:hover {
    text-decoration: none;
    color: ${styles.colors.mainRed};
  }
`
const Pp = styled.p`
  color: ${styles.colors.mainWhite};
  font-family: ${styles.bodyFont};
  font-weight: 100;
  align-text: center;
  display: flex;
  margin: auto;
  justify-content: center;
`

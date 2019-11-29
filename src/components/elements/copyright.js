import React from "react"
import { styles } from "../../utils"
import styled from "styled-components"

export default function Copyright() {
  return (
    <>
      <Pp>
        Designed by Robert Myles McDonnell, inspired by&nbsp;
        <Aa href="https://beAautifulwebtype.com/space-grotesk/">
          Beautiful Web Type
        </Aa>
        .
      </Pp>
      <Pp style={{ paddingLeft: 100 }}>
        Built with&nbsp;<Aa href="https://reactjs.org/">React</Aa>&nbsp;
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
  color: ${styles.colors.mainBlue};
  font-family: ${styles.bodyFont};
  font-weight: 200;
  display: flex;
  margin: auto;
  left: 0;
  bottom: 0;
  right: 0;
`

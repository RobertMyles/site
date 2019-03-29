import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import landing from "../../images/web_landing.png"
import IconWrapper from "../elements/IconWrapper"
import LandingDivs from "../landings/LandingDivs"
import Copyright from "../elements/copyright"

export default function LandingLayout() {
  return (
    <Fulldiv>
      <Image src={landing} alt="website landing page" height={380} />
      <br />
      <LandingDivs />
      <br />
      <br />
      <br />
      <IconWrapper />
      <Copyright />
    </Fulldiv>
  )
}

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const Fulldiv = styled.div`
  background: ${styles.colors.mainBlack};
  min-height: 100vh;
`

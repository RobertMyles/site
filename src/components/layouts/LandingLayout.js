import React from "react"
import styled from "styled-components"
import circle from "../../images/circle_border.jpeg"
import IconWrapper from "../elements/IconWrapper"
import LandingDivs from "../elements/LandingDivs"
import Copyright from "../elements/copyright"
import Grid from "@material-ui/core/Grid"
import TitleDivs from "../elements/TitleDivs"

export default function LandingLayout() {
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Image src={circle} height={450} />
      <TitleDivs />
      <br />
      <br />
      <LandingDivs />
      <br />
      <IconWrapper />
      <Copyright />
    </Grid>
  )
}

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`
// const Fulldiv = styled.div`
//   background: ${styles.colors.mainBlack};
//   min-height: 100vh;
// `
// <Fulldiv>

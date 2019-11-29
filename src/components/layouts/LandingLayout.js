import React from "react"
import styled from "styled-components"
import circle from "../../images/circle_border.jpeg"
import IconWrapper from "../elements/IconWrapper"
import LandingDivs from "../elements/LandingDivs"
import Copyright from "../elements/copyright"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import TitleDivs from "../elements/TitleDivs"
import Bio from "../elements/bio.js"
import Navbar from "../navbar/Navbar"
import { styles } from "../../utils"

export default function LandingLayout() {
  return (
    <>
      <Navbar
        color={styles.colors.mainBlue}
        linkcolor={styles.colors.mainWhite}
        linkbackground={styles.colors.mainBlue}
        linkhover={styles.colors.mainRed}
        iconcolor={styles.colors.mainWhite}
        iconhover={styles.colors.mainRed}
      />
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4} sm={8} md={6} lg={6} xl={4}>
          <Image src={circle} height={350} />
          <TitleDivs />
          <br />
          <br />
          <LandingDivs />
          <br />
          <IconWrapper />
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid item md={4} lg={6} xl={8}>
            <Bio />
          </Grid>
        </Hidden>
      </Grid>
      <Copyright />
    </>
  )
}

const Image = styled.img`
  display: block;
  margin-left: 45px;
  margin-right: auto;
`

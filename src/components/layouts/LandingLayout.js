import React from "react"
// import styled from "styled-components"
// import circle from "../../images/circle_border.jpeg"
// import IconWrapper from "../elements/IconWrapper"
// import LandingDivs from "../elements/LandingDivs"
// import Copyright from "../elements/copyright"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
// import Hidden from "@material-ui/core/Hidden"
// import TitleDivs from "../elements/TitleDivs"
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
      <Container maxWidth="md">
        <Grid container direction="row" alignContent="center" justify="center">
          {/* <Grid item xs={4} sm={8} md={6} lg={6} xl={4}> */}
          {/* <Hidden only={["xs", "sm"]}> */}
          {/* <Grid item md={4} lg={6} xl={8}> */}
          {/* <Image src={circle} height={200} /> */}
          <Bio />
          {/* </Grid> */}
          {/* </Hidden> */}
          {/* </Grid> */}

          {/* <TitleDivs /> */}
          {/* <br />
        <br /> */}
          {/* <LandingDivs /> */}
          {/* <br /> */}
          {/* <IconWrapper /> */}
        </Grid>

        {/* <Copyright /> */}
      </Container>
    </>
  )
}

// const Image = styled.img`
//   display: block;
//   margin-left: 45px;
//   margin-right: auto;
// `

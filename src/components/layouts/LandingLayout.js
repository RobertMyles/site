import React from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
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
          <Bio />
        </Grid>
      </Container>
    </>
  )
}

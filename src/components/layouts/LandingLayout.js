import React from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { Link } from "gatsby"
import Bio from "../elements/bio.js"
import Navbar from "../navbar/Navbar"
import { styles } from "../../utils"
import { BrowserView, MobileView } from "react-device-detect"

export default function LandingLayout() {
  return (
    <>
      <BrowserView>
        <Navbar
          color={styles.colors.mainBlue}
          linkcolor={styles.colors.mainWhite}
          linkbackground={styles.colors.mainBlue}
          linkhover={styles.colors.mainRed}
          iconcolor={styles.colors.mainWhite}
          iconhover={styles.colors.mainRed}
        />
      </BrowserView>

      <Container maxWidth="md">
        <Grid container direction="row" alignContent="center" justify="center">
          <Bio />
        </Grid>
      </Container>
      <MobileView>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/cv">CV</Link>
        <Link to="/research">Research</Link>
        <Link to="/other">Other</Link>
      </MobileView>
    </>
  )
}

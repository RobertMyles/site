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
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            alignContent="center"
            justify="center"
          >
            <Bio />
          </Grid>
        </Container>
      </BrowserView>
      <br />
      <br />
      <br />
      <MobileView>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            alignContent="center"
            justify="center"
          >
            <Bio />
          </Grid>
        </Container>
        <Container maxWidth="md">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/research">Research</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </Container>
      </MobileView>
    </>
  )
}

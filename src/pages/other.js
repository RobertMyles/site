import React from "react"
import { styles } from "../utils"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Navbar from "../components/navbar/Navbar"
import Helmet from "react-helmet"
import { MobileView } from "react-device-detect"

const RDiv = styled.div`
  font-family: ${styles.bodyFont};
  padding-top: 40px;
  padding-left: 0px;
  text-align: left;
  max-height: 800px;
  h3 {
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  a {
    color: ${styles.colors.mainRed};
    text-decoration: none;
  }
  a:hover {
    color: ${styles.colors.mainPink};
  }
`
const Ppp = styled.p`
  justify-content: center;
  max-width: 1200px;
  font-size: 1.2rem;
`
const StyledLink = styled(GatsbyLink)`
  color: ${styles.colors.mainRed};
  :hover {
      color: ${styles.colors.mainBlue};
    }
  }
`

export default () => (
  <>
    <Helmet title="Other| Robert Myles McDonnell">
      <meta charSet="utf-8" />
      <title>Robert Myles McDonnell</title>
      <link rel="canonical" href="https://robertmylesmcdonnell.com" />
    </Helmet>
    <Navbar
      color={styles.colors.mainBlue}
      linkcolor={styles.colors.mainWhite}
      linkbackground={styles.colors.mainBlue}
      linkhover={styles.colors.mainRed}
      iconcolor={styles.colors.mainWhite}
      iconhover={styles.colors.mainRed}
    />
    <Grid container direction="row" justify="center">
      <Grid item xs={12} sm={12} md={10} lg={8} xl={8} />
      <RDiv>
        <Ppp>Here's some other stuff I like to do.</Ppp>
        <h2 style={{ fontFamily: styles.titleFont }}>ONE HAND ON THE BOTTLE</h2>
        <Ppp>
          One Hand on the Bottle was a band I had some years ago, with some
          talented musician friends. Phil Coyle played bass, Holly Pereira
          played guitar and sang, Tom Mulrooney played bass, John Mac Naeidhe
          played keyboards, Sean McDonnell played drums and Rudy played
          percussion. We recorded an album in Fastlane Studios in Donabate,
          Dublin, in 2008. I wrote the music and lyrics, and I sang, played
          guitar, mandolin, banjo, and some bass. Here it is:
        </Ppp>
        <iframe
          src="https://archive.org/embed/the_gallows_laugh&playlist=1"
          width="800"
          height="400"
          title="OHOTB"
          frameBorder="0"
          webkitAllowFullScreen="true"
          mozAllowFullScreen="true"
          allowFullScreen
          style={{ justifyContent: "center" }}
        />
      </RDiv>
      <MobileView>
        <li>
          <StyledLink to="/blog">Blog</StyledLink>
        </li>
        <li>
          <StyledLink to="/cv">CV</StyledLink>
        </li>
        <li>
          <StyledLink to="/research">Research</StyledLink>
        </li>
        <li>
          <StyledLink to="/other">Other</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </MobileView>
    </Grid>
  </>
)

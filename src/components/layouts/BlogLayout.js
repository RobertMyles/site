import React from "react"
import Navbar from "../navbar/Navbar"
import { styles } from "../../utils"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import "katex/dist/katex.min.css"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "../../utils/prism-override.css"

export default function BlogLayout({ children }) {
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
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
          <Postdiv>{children}</Postdiv>
        </Grid>
      </Grid>
    </>
  )
}

const Postdiv = styled.div`
  font-family: ${styles.bodyFont};
  font-size: 1.1rem;
  h3,
  h2 {
    color: ${styles.colors.mainRed};
  }
  a {
    color: ${styles.colors.mainRed};
    text-decoration: none;
  }
  a:hover {
    color: ${styles.colors.mainPink};
  }
`

import React from "react"
import Navbar from "../navbar/Navbar"
import { styles } from "../../utils"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar
        color={styles.colors.mainGreen}
        linkcolor={styles.colors.mainWhite}
        linkbackground={styles.colors.mainGreen}
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
`

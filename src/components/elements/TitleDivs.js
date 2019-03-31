import React from "react"
import { styles } from "../../utils"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

export default function TitleDivs() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid container direction="row" justify="center">
        <Adiv color={styles.colors.mainRed} borderRight={`0px`} width={`280px`}>
          ROBERT
        </Adiv>
        <Adiv color={styles.colors.mainYellow} width={`250px`}>
          MYLES
        </Adiv>
      </Grid>
      <Adiv color={styles.colors.mainBlue} borderTop={`0px`} width={`400px`}>
        MCDONNELL
      </Adiv>
    </Grid>
  )
}

const Adiv = styled.div`
  background: ${props => props.color};
  font-size: 4rem;
  font-family: ${styles.titleFont};
  border: 5px solid black;
  padding: 3px;
  text-align: center;
  border-top: ${props => props.borderTop};
  border-right: ${props => props.borderRight};
  width: ${props => props.width};
`

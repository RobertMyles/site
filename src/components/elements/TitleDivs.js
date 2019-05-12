import React from "react"
import { styles } from "../../utils"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

export default function TitleDivs() {
  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <Adiv color={styles.colors.mainRed} width={`280px`} marginLeft={`75px`}>
        ROBERT
      </Adiv>
      <Adiv
        color={styles.colors.mainYellow}
        width={`250px`}
        marginLeft={`90px`}
        marginTop={`-5px`}
      >
        MYLES
      </Adiv>
      <Adiv
        color={styles.colors.mainBlue}
        width={`400px`}
        marginLeft={`20px`}
        marginTop={`-5px`}
      >
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
  margin-left: ${props => props.marginLeft};
  margin-top: ${props => props.marginTop};
  text-align: center;
  width: ${props => props.width};
`

import React from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"
import styled from "styled-components"

export default function Navbar(props) {
  const {
    color,
    linkcolor,
    linkbackground,
    linkhover,
    iconcolor,
    iconhover,
  } = props

  return (
    <NavWrapper color={color}>
      <NavbarHeader />
      <NavbarLinks
        linkcolor={linkcolor}
        linkbackground={linkbackground}
        linkhover={linkhover}
      />
      <NavbarIcons iconcolor={iconcolor} iconhover={iconhover} />
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background: ${props => props.color};
  height: 60px;
  justify-content: space-between;
  align-content: center;
  overflow: hidden;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

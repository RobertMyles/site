import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"
import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }

  render() {
    const { color } = this.props
    return (
      <NavWrapper color={color}>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: ${props => props.color};
  height: 60px;
  justify-content: space-between;
  overflow: hidden;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

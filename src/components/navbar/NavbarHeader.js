import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../images/websitelogo.png"

export default function NavbarHeader() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Image src={logo} alt="website logo" height={32} />
      </Link>
    </HeaderWrapper>
  )
}

const Image = styled.img`
  justify-content: space-between;
  filter: alpha(opacity=50);
`
const HeaderWrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 1rem;
  }
`

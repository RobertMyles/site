import React, { Component } from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../utils"
import logo from "../../images/websitelogo.png"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Image src={logo} alt="website logo" height={32} />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}

const Image = styled.img`
  margin-top: 1.5rem;
  justify-content: space-between;
  filter: alpha(opacity=50);
`
const HeaderWrapper = styled.div`
  padding: 0.1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
    &:hover {
      color: ${styles.colors.mainBlue};
    }
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`

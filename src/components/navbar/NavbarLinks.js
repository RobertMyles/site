import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default function NavbarLink(props) {
  const { linkcolor, linkbackground, linkhover } = props

  const links = [
    {
      id: 0,
      path: "/",
      name: "home",
    },
    {
      id: 1,
      path: "/blog/",
      name: "blog",
    },
    {
      id: 2,
      path: "/cv/",
      name: "CV",
    },
    {
      id: 3,
      path: "/research/",
      name: "research",
    },
    {
      id: 4,
      path: "/other/",
      name: "other",
    },
    {
      id: 5,
      path: "/about/",
      name: "about",
    },
  ]

  return (
    <LinkWrapper
      linkbackground={linkbackground}
      linkhover={linkhover}
      linkcolor={linkcolor}
    >
      {links.map(item => {
        return (
          <li key={item.id}>
            <Link to={item.path} className="nav-link">
              {item.name}
            </Link>
          </li>
        )
      })}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
    margin-top: 0.75rem;
  }
  .nav-link {
    display: block;
    font-family: ${styles.bodyFont};
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    padding: 1rem;
    padding-bottom: 1.5rem;
    color: ${props => props.linkcolor};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      background: ${props => props.linkbackground};
      color: ${props => props.linkhover};
    }
  }
  height: "345px";
  overflow: hidden;
  ${styles.transObject({})};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      color: ${props => props.linkhover};
      background: ${props => props.linkbackground};
    }
  }
`

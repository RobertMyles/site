import React from "react"
import { Link } from "gatsby"
import { styles } from "../../utils"
import styled from "styled-components"

export default function LandingDivs() {
  const items = [
    {
      name: "BLOG",
      path: "/blog/",
      id: 0,
      color: styles.colors.mainYellow,
      width: 60,
    },
    {
      name: "RESEARCH",
      path: "/research/",
      id: 1,
      color: styles.colors.mainPink,
      width: 120,
    },
    {
      name: "OTHER",
      path: "/Other/",
      id: 2,
      color: styles.colors.mainGreen,
      width: 80,
    },
  ]

  return (
    <div
      style={{ display: "flex", justifyContent: "left", paddingLeft: "10px" }}
    >
      {items.map(item => {
        return (
          <DivWrapper
            key={item.id}
            style={{
              backgroundColor: item.color,
              width: item.width,
              display: "inline-block",
              fontFamily: styles.titleFont,
              textAlign: "center",
              borderStyle: "solid",
              borderColor: "black",
            }}
          >
            <StyledLink to={item.path}>{item.name}</StyledLink>
          </DivWrapper>
        )
      })}
    </div>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:focus,
  &:hover {
    text-decoration: none;
    color: #f0e7d8;
  }
`

const DivWrapper = styled.div`
  font-family: ${styles.titleFont};
  padding-left: 17px;
  padding-right: 17px;
  cursor: pointer;
`

import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

export default function NavbarIcons(props) {
  const { iconcolor, iconhover } = props
  return (
    <>
      <IconWrapper iconcolor={iconcolor} iconhover={iconhover}>
        <a
          className="ikons"
          style={{ color: iconcolor }}
          href="https://github.com/RobertMyles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="ikons" />
        </a>
        <a
          style={{ color: iconcolor }}
          href="https://www.linkedin.com/in/robert-mcdonnell-7475b320/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="ikons" />
        </a>
        <a
          style={{ color: iconcolor }}
          href="https://twitter.com/RobertMylesMc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="ikons" />
        </a>
      </IconWrapper>
    </>
  )
}

const IconWrapper = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  ${styles.transObject({})};
  padding: 0.5rem 1.5rem;
  padding-top: 1rem;
  color: ${props => props.icon};
  .ikons:hover {
    color: ${props => props.iconhover};
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`
// .git {
//   color: ${props => props.icon};
// }
// .link {
//   color: ${props => props.icon};
// }
// .twit {
//   color: ${props => props.icon};
// }

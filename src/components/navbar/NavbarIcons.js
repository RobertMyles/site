import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

export default function NavbarIcons() {
  return (
    <>
      <IconWrapper>
        <a
          href="https://github.com/RobertMyles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon git" />
        </a>
        <a
          href="https://www.linkedin.com/in/robert-mcdonnell-7475b320/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon link" />
        </a>
        <a
          href="https://twitter.com/RobertMylesMc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="icon twit" />
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
  .git {
    color: ${styles.colors.mainBlue};
  }
  .link {
    color: ${styles.colors.mainBlue};
  }
  .twit {
    color: ${styles.colors.mainBlue};
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

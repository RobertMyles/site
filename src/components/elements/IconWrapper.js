import React from "react"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { styles } from "../../utils"
import styled from "styled-components"

export default function IconWrapper() {
  return (
    <DDiv>
      <A
        href="https://github.com/RobertMyles"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon git" />
      </A>
      <A
        href="https://www.linkedin.com/in/robert-mcdonnell-7475b320/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon link" />
      </A>
      <a
        href="https://twitter.com/RobertMylesMc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="icon twit" />
      </a>
    </DDiv>
  )
}

const A = styled.a`
  padding-right: 12px;
`
const DDiv = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  margin: auto;
  justify-content: center;
  ${styles.transObject({})};
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
`

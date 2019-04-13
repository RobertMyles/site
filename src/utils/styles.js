import "typeface-aleo"
import "typeface-spacegrotesk"
import "typeface-inconsolata"

export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#000000`,
  mainGreen: `#829980`,
  mainPink: `#CAB1B8`,
  mainYellow: `#B87F0F`,
  mainRed: `#C63D3C`,
  mainBlue: `#4A567E`,
}

export const bodyFont = "aleo"
export const titleFont = "space grotesk"
export const codeFont = "inconsolata"

export const transDefault = "transition:all 0.5s ease-in-out"
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`
}

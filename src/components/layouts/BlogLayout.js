import React from "react"
import Navbar from "../navbar/Navbar"
import { styles } from "../../utils"

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar color={styles.colors.mainGreen} />
      <div style={{ color: `white` }}>{children}</div>
    </>
  )
}

import React from "react"
import LandingLayout from "../components/layouts/LandingLayout"
import SEO from "../components/elements/seo"

document.body.style.backgroundColor = "black"

const IndexPage = () => (
  <LandingLayout>
    <SEO title="Home" />
  </LandingLayout>
)

export default IndexPage

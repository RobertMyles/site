import React from "react"

const src = "https://utteranc.es/client.js"

class Utterances extends React.Component {
  constructor(props) {
    super(props)
    this.rootElm = React.createRef()
    this.state = { status: "loading" }
  }

  render() {
    return (
      <div ref={this.rootElm} className={`utterances ${this.state.status}`} />
    )
  }

  componentDidMount() {
    this.loadScript()
  }

  loadScript() {
    const script = this.createScript()
    this.rootElm.current.appendChild(script)
  }

  createScript() {
    const script = document.createElement("script")
    script.setAttribute("src", src)
    script.setAttribute("repo", this.props.repository)
    script.setAttribute("async", true)
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("label", "blog-comment")
    script.setAttribute("crossOrigin", "anonymous")
    script.setAttribute("theme", "github-light")
    script.setAttribute("src", `${src}?v=${new Date().getTime()}`)
    script.addEventListener("load", () => this.scriptLoaded(true), {
      once: true,
    })
    script.addEventListener("error", () => this.scriptLoaded(false), {
      once: true,
    })
    return script
  }
  scriptLoaded(success) {
    this.setState({ status: success ? "success" : "fail" })
  }
}

export default Utterances

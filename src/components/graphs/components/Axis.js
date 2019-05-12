import React, { useEffect } from "react"
import * as d3 from "d3"

export default (Axis = ({ x, y, type, position, domain, range }) => {
  let gRef = React.createRef()
  const [domain0, domain1] = domain
  const [range0, range1] = range

  useEffect(() => {
    d3render()
  })

  const d3render = () => {
    const scale = d3[`scale${type}`]()
      .domain([domain0, domain1])
      .range([range0, range1])

    const axis = d3[`axis${position}`](scale)

    d3.select(gRef.current).call(axis)
  }

  return (
    <>
      <g transform={`translate(${x}, ${y})`} ref={gRef} />
    </>
  )
})

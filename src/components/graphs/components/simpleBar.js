import React, { useEffect } from "react"
import * as d3 from "d3"
import { margin } from "../../../utils"

export default (simpleBar = props => {
  const ref = useRef(null)
  const data = props.data
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top])

  const x = d3
    .scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width - margin.right])
    .padding(0.1)

  yAxis = g =>
    g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select(".domain").remove())

  xAxis = g =>
    g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))

  useEffect(() => {
    const data = createPie(props.data)
    const group = d3.select(ref.current)
    const groupWithData = group.selectAll("g.rect").data(data)

    groupWithData.exit().remove()

    const groupWithUpdate = groupWithData
      .enter()
      .append("g")
      .attr("class", "rect")

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", d => `translate(${createArc.centroid(d)})`)
      .style("fill", "white")
      .style("font-size", 10)
      .text(d => format(d.value))
  }, [props.data])

  const [domain0, domain1] = domain
  const [range0, range1] = range

  //   const data = (await d3.csv("https://gist.githubusercontent.com/mbostock/81aa27912ad9b1ed577016797a780b2c/raw/3a807eb0cbb0f5904053ac2f9edf765e2f87a2f5/alphabet.csv", ({letter, frequency}) => ({name: letter, value: +frequency}))).sort((a, b) => b.value - a.value)

  const svg = d3.select(DOM.svg(width, height))

  svg
    .append("g")
    .attr("fill", "steelblue")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("width", x.bandwidth())

  svg.append("g").call(xAxis)

  svg.append("g").call(yAxis)

  return (
    <>
      <g transform={`translate(${x}, ${y})`} ref={gRef} />
    </>
  )
})

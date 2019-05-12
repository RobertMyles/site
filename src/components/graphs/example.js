import React, { useRef, useEffect } from "react"
import * as d3 from "d3"

/* Component */
const D3example = props => {
  /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
  const d3Container = useRef(null)
  const data = props.data
  const margin = { top: 20, right: 0, bottom: 30, left: 40 }
  const height = props.height
  const width = props.width

  /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
  useEffect(
    () => {
      if (data && d3Container.current) {
        const svg = d3.select(d3Container.current)
        const x = d3
          .scaleBand()
          .domain(data.map(d => d.name))
          .range([margin.left, width - margin.right])
          .padding(0.1)

        const y = d3
          .scaleLinear()
          .domain([0, d3.max(data, d => d.value)])
          .nice()
          .range([height - margin.bottom, margin.top])

        const xAxis = g =>
          g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0))

        const yAxis = g =>
          g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
            .call(g => g.select(".domain").remove())

        // Bind D3 data
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
      }
    },

    /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
    [data, d3Container.current]
  )

  return (
    <svg
      className="d3-component"
      width={width}
      height={height}
      ref={d3Container}
    />
  )
}

export default D3example

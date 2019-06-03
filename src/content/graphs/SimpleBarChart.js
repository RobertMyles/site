import React, { createRef, useEffect, useContext } from "react"
import * as d3 from "d3"
import styled from "styled-components"
import { useTooltip, tooltipContext } from "./useTooltip"
import Tooltip from "./ToolTip"

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
`

const Rect = styled.rect`
  &:hover {
    fill: #002642;
  }
`

const BareBarChart = props => {
  const propz = props.props
  const height = propz.height
  const width = propz.width
  const data = propz.data.sort((a, b) => b.Turnout - a.Turnout)
  const margin = { top: 20, right: 10, bottom: 30, left: 10 }
  var xRef = createRef()
  var yRef = createRef()
  const { tooltip, setTooltip } = useContext(tooltipContext)

  const axisBandRender = () => {
    const y_scale = d3
      .scaleBand()
      .domain(data.map(d => d.Constituency))
      .range([margin.top, height - margin.bottom])
      .padding(0.1)

    const y_axis = d3.axisLeft(y_scale)

    d3.select(yRef.current).call(y_axis)
  }

  const axisLinearRender = () => {
    const x_scale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.Turnout)])
      .nice()
      .range([margin.left, width - margin.right])

    const x_axis = d3.axisTop(x_scale)

    d3.select(xRef.current).call(x_axis)
  }

  useEffect(() => {
    axisBandRender()
    axisLinearRender()
  })

  const yScale = d3
    .scaleBand()
    .domain(data.map(d => d.Constituency))
    .range([margin.top, height - margin.bottom])
    .padding(0.1)

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.Turnout)])
    .nice()
    .range([margin.left, width - margin.right])

  const colorScale = d3
    .scaleSequential()
    .domain([0, d3.max(data, d => d.Turnout)])
    .interpolator(d3.interpolatePuRd)

  return (
    <>
      <Title>Turnout in the Irish Divorce Referendum, May 24th 2019</Title>
      <br />
      <svg width={width} height={height}>
        <g transform={`translate(95, 0)`}>
          <br />
          {data.map(d => (
            <Rect
              key={d.Constituency}
              y={yScale(d.Constituency)}
              x={xScale(0)}
              height={yScale.bandwidth()}
              width={xScale(d.Turnout)}
              fill={colorScale(d.Turnout)}
              onMouseOver={() => setTooltip(d)}
              onMouseOut={() => setTooltip(false)}
            />
          ))}
          {tooltip && (
            <Tooltip
              x={50}
              y={yScale(tooltip.Constituency)}
              info={tooltip}
              w={200}
              h={50}
            />
          )}
          <g transform={`translate(${margin.left}, 0)`} ref={yRef} />
          <g transform={`translate(0, ${margin.top})`} ref={xRef} />
        </g>
      </svg>
    </>
  )
}

const SimpleBarChart = props => {
  const state = useTooltip()
  return (
    <tooltipContext.Provider value={state}>
      <BareBarChart props={props} />
    </tooltipContext.Provider>
  )
}

export default SimpleBarChart

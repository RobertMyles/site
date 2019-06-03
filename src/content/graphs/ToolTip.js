import React from "react"
import styled from "styled-components"

const ForeignObject = styled.foreignObject`
  background: white;
  text-align: center;
`

const Tooltip = ({ x, y, info, w, h }) => (
  <ForeignObject x={x + 10} y={y + 10} width={w} height={h}>
    <div style={{ fontSize: `1.2rem` }}>
      <span>
        <strong>{info.Constituency}</strong>
      </span>
      <br />
      <span>{`Turnout: ${info.Turnout}%`}</span>
    </div>
  </ForeignObject>
)

export default Tooltip

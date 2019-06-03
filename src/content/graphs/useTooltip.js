import { useState, createContext } from "react"

const tooltipContext = createContext()

function useTooltip() {
  const [tooltip, setTooltip] = useState(null)

  return { tooltip, setTooltip }
}

export { useTooltip, tooltipContext }

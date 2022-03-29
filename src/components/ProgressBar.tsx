import React from "react"
import NextNprogress from "nextjs-progressbar"
import { useTheme } from "@mui/material"

const ProgressBar = () => {
  const {
    palette: {
      secondary: { main },
    },
  } = useTheme()

  return (
    <NextNprogress
      color={main}
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
  )
}

export default ProgressBar

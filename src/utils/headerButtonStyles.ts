import { Theme } from "@mui/material"
import { dependsOnToolbar } from "@the-chat/utils"

const headerButtonStyles = (theme: Theme, right?: true) => ({
  position: "absolute" as const,
  ...dependsOnToolbar((toolbarHeight) => {
    // learn: what is "margin" here
    // todo?: same as in index
    const margin = parseInt(theme.spacing(1))
    const radius = toolbarHeight / 2 - margin

    return {
      top: margin,
      [right ? "right" : "left"]: margin,
      width: radius * 2,
      height: radius * 2,
    }
  }),
})
export default headerButtonStyles

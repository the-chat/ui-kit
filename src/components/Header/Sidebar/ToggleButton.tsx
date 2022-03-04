import { makeStyles } from "@mui/styles"
import { IconButton, Theme } from "@mui/material"
import { dependsOnToolbar } from "@the-chat/utils"
import { useSidebarOpen } from "../../../utils/contexts"
import { Close, Menu } from "@mui/icons-material"
import React from "react"
import headerButtonStyles from "../../../utils/headerButtonStyles"

const useStyles = makeStyles<Theme>((theme) => ({
  button: {
    background: theme.palette.background.default,
    color: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.background.default,
    },
    ...headerButtonStyles(theme),
  },
}))

const ToggleButton = () => {
  const [open, setOpen] = useSidebarOpen()
  const { button } = useStyles()

  return (
    <IconButton className={button} onClick={() => setOpen((p) => !p)}>
      {open ? <Close /> : <Menu />}
    </IconButton>
  )
}

export default ToggleButton

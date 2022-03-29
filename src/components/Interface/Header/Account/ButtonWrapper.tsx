import React, { FC } from "react"
import { IconButton, IconButtonProps, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import TooltipWithOnClick from "../../../TooltipWithOnClick"
import headerButtonStyles from "../../../../utils/headerButtonStyles"

const useStyles = makeStyles<Theme>((theme) => ({
  open: headerButtonStyles(theme, true),
}))

const ButtonWrapper: FC<
  Pick<IconButtonProps, "onClick"> & {
    title: string
  }
> = ({ children, onClick, title }) => {
  const { open } = useStyles()

  return (
    <TooltipWithOnClick
      title={title}
      tooltipProps={{
        className: open,
      }}
      ComponentTag={IconButton}
      componentProps={{
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "centet",
        },
        ...(onClick && { onClick }),
      }}
    >
      {children}
    </TooltipWithOnClick>
  )
}

export default ButtonWrapper

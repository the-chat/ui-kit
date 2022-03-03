import { ClickAwayListener, Tooltip, TooltipProps } from "@mui/material"
import React, { useState, ReactNode, ComponentProps, ElementType } from "react"

// learn: why this not works
// <TooltipWithOnClick
//   Component={(props) => (
//     <Typography
//       {...props}
//       className={authorClassName}
//       variant="body2"
//       color="textSecondary"
//     />
//   )}
//   title={authorLabel}
// >
//   {authorLabel}
// </TooltipWithOnClick>

// todo: too many eventHandlers calls

// todo: remake
const TooltipWithOnClick = <T extends ElementType>({
  title,
  ComponentTag = "span",
  componentProps,
  tooltipProps,
  children,
}: {
  title: string
  // todo: types
  ComponentTag?: T | string
  componentProps?: ComponentProps<T>
  tooltipProps?: Partial<TooltipProps>
  children: ReactNode
}) => {
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => setOpen(false)
  const handleTooltipOpen = () => setOpen(true)

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        // learn
        PopperProps={{
          disablePortal: true,
        }}
        // style={{ background: "#f00" }}
        onOpen={handleTooltipOpen}
        onClose={handleTooltipClose}
        open={open}
        // disableFocusListener
        // disableHoverListener
        // disableTouchListener
        title={title}
        onClick={(ev) => console.log(ev.target)}
        {...tooltipProps}
      >
        <ComponentTag {...componentProps} onClick={handleTooltipOpen}>
          {children}
        </ComponentTag>
      </Tooltip>
    </ClickAwayListener>
  )
}

export default TooltipWithOnClick

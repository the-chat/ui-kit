import {
  useState,
  MouseEvent,
  ReactNode,
  ComponentProps,
  ElementType,
  forwardRef,
  Ref,
} from "react"
import { ClickAwayListener, Tooltip, TooltipProps } from "@mui/material"

// todo: too many eventHandlers calls

type TooltipWithOnClickProps<T extends ElementType> = {
  title: string
  // todo: types
  ComponentTag?: T | string
  componentProps?: ComponentProps<T>
  tooltipProps?: Partial<TooltipProps>
  children: ReactNode
}

// todo: remake
const TooltipWithOnClick = forwardRef(
  <T extends ElementType>(
    {
      title,
      ComponentTag = "span",
      componentProps,
      tooltipProps,
      children,
    }: TooltipWithOnClickProps<T>,
    ref: Ref<unknown>
  ) => {
    const [open, setOpen] = useState(false)

    const handleTooltipClose = () => setOpen(false)
    const handleTooltipOpen = () => setOpen(true)

    return (
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          ref={ref}
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
          <ComponentTag
            {...componentProps}
            onClick={(
              ev: typeof componentProps extends undefined
                ? undefined
                : MouseEvent<T, MouseEvent>
            ) => {
              componentProps &&
                componentProps.onClick &&
                componentProps.onClick(ev)
              handleTooltipOpen()
            }}
          >
            {children}
          </ComponentTag>
        </Tooltip>
      </ClickAwayListener>
    )
  }
)

TooltipWithOnClick.displayName = "TooltipWithOnClick"

export default TooltipWithOnClick

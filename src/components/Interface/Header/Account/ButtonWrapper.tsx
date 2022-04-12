import { forwardRef, PropsWithChildren } from "react"
import { IconButton, IconButtonProps, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import TooltipWithOnClick from "../../../TooltipWithOnClick"
import headerButtonStyles from "../../../../utils/headerButtonStyles"

const useStyles = makeStyles<Theme>((theme) => ({
  open: headerButtonStyles(theme, true),
}))

type ButtonWrapperProps = PropsWithChildren<
  Pick<IconButtonProps, "onClick"> & {
    title: string
  }
>

const ButtonWrapper = forwardRef<unknown, ButtonWrapperProps>(
  ({ children, onClick, title }, ref) => {
    const { open } = useStyles()

    return (
      <TooltipWithOnClick
        title={title}
        tooltipProps={{
          className: open,
        }}
        ref={ref}
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
)

export default ButtonWrapper

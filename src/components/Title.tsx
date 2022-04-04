import { forwardRef, ReactNode } from "react"
import { Typography, TypographyProps } from "@mui/material"

interface TitleProps extends TypographyProps {
  text: ReactNode
}

const TitleBase = forwardRef(
  (props: TypographyProps, ref: TypographyProps["ref"]) => (
    <Typography ref={ref} align="center" sx={{ mb: 1 }} {...props} />
  )
)

const Title = forwardRef(
  ({ text, ...props }: TitleProps, ref: TypographyProps["ref"]) => (
    <TitleBase ref={ref} variant="h4" {...props}>
      {text}
    </TitleBase>
  )
)

const SubTitle = forwardRef(
  ({ text, ...props }: TitleProps, ref: TypographyProps["ref"]) => (
    <TitleBase ref={ref} variant="h6" {...props}>
      {text}
    </TitleBase>
  )
)

export { SubTitle }
export default Title

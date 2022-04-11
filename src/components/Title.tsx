import { ComponentRef, forwardRef, ReactNode } from "react"
import { Typography, TypographyProps } from "@mui/material"

interface TitleProps extends TypographyProps {
  text: ReactNode
}

type Ref = ComponentRef<typeof Typography>

const TitleBase = forwardRef<Ref, TypographyProps>((props, ref) => (
  <Typography ref={ref} align="center" sx={{ mb: 1 }} {...props} />
))

const Title = forwardRef<Ref, TitleProps>(({ text, ...props }, ref) => (
  <TitleBase ref={ref} variant="h4" {...props}>
    {text}
  </TitleBase>
))

const SubTitle = forwardRef<Ref, TitleProps>(({ text, ...props }, ref) => (
  <TitleBase ref={ref} variant="h6" {...props}>
    {text}
  </TitleBase>
))

TitleBase.displayName = "TitleBase"
Title.displayName = "Title"
SubTitle.displayName = "SubTitle"

export { SubTitle }
export default Title

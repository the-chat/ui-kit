import { ReactNode } from "react"
import { Typography, TypographyProps } from "@mui/material"

interface TitleProps extends TypographyProps {
  text: ReactNode
}

const TitleBase = (props: TypographyProps) => (
  <Typography align="center" sx={{ mb: 1 }} {...props} />
)

const Title = ({ text, ...props }: TitleProps) => (
  <TitleBase variant="h4" {...props}>
    {text}
  </TitleBase>
)

const SubTitle = ({ text, ...props }: TitleProps) => (
  <TitleBase variant="h6" {...props}>
    {text}
  </TitleBase>
)

export { SubTitle }
export default Title

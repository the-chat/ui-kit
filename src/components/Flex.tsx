import { Box, BoxProps } from "@mui/material"
import flex, { FlexProps } from "../utils/flex"

const Flex = ({ col, aic, sx = {}, ...props }: BoxProps & FlexProps) => (
  <Box
    sx={{
      ...flex({ col, aic }),
      ...sx,
    }}
    {...props}
  />
)

export default Flex

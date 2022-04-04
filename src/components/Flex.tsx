import { Box, BoxProps } from "@mui/material"
import { forwardRef } from "react"
import flex, { FlexProps } from "../utils/flex"

const Flex = forwardRef(
  (
    { col, aic, sx = {}, ...props }: BoxProps & FlexProps,
    ref: BoxProps["ref"]
  ) => (
    <Box
      ref={ref}
      sx={{
        ...flex({ col, aic }),
        ...sx,
      }}
      {...props}
    />
  )
)

export default Flex

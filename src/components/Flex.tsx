import { Box, BoxProps } from "@mui/material"
import { ComponentRef, forwardRef } from "react"
import flex, { FlexProps } from "../utils/flex"

const Flex = forwardRef<ComponentRef<typeof Box>, BoxProps & FlexProps>(
  ({ col, aic, sx = {}, ...props }, ref) => (
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

Flex.displayName = "Flex"

export default Flex

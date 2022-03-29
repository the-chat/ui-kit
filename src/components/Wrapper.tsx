import React, { FC } from "react"
import { CssBaseline, StyledEngineProvider } from "@mui/material"
import { useSSO } from "../utils/contexts"
import Providers, { ProvidersProps } from "./Providers"

const Logic = () => {
  useSSO()

  return null
}

const Wrapper: FC<ProvidersProps> = ({ children, ...providersProps }) => (
  <StyledEngineProvider injectFirst>
    <Providers {...providersProps}>
      <CssBaseline />
      <Logic />
      {children}
    </Providers>
  </StyledEngineProvider>
)

export default Wrapper

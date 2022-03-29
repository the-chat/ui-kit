import React, { FC } from "react"
import { CssBaseline, StyledEngineProvider } from "@mui/material"
import { useSSO } from "../../utils/contexts"
import Providers, { ProvidersProps } from "./Providers"
import ProgressBar from "./ProgressBar"
import AppHead, { AppHeadProps } from "./AppHead"
import useCurrectLocale from "../../utils/useCurrectLocale"

const Logic = () => {
  useSSO()
  useCurrectLocale()

  return null
}

export type WrapperProps = ProvidersProps & AppHeadProps

const Wrapper: FC<WrapperProps> = ({ children, name, ...providersProps }) => (
  <StyledEngineProvider injectFirst>
    <Providers {...providersProps}>
      <AppHead name={name} />
      <ProgressBar />
      <CssBaseline />
      <Logic />
      {children}
    </Providers>
  </StyledEngineProvider>
)

export default Wrapper

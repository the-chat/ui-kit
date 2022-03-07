import React, { FC } from "react"
import { CssBaseline } from "@mui/material"
import { useSSO } from "../utils/contexts"
import Providers, { ProvidersProps } from "./Providers"

const Logic = () => {
  useSSO()
  return null
}

const Wrapper: FC<ProvidersProps> = ({ children, ...providersProps }) => (
  <Providers {...providersProps}>
    <CssBaseline />
    <Logic />
    {children}
  </Providers>
)

export default Wrapper

import { FC } from "react"
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

export type WrapperProps = { Head: FC } & ProvidersProps & AppHeadProps

const Wrapper: FC<WrapperProps> = ({
  children,
  Head,
  name,
  ...providersProps
}) => (
  <StyledEngineProvider injectFirst>
    <Providers {...providersProps}>
      <Head>
        <AppHead name={name} />
      </Head>
      <ProgressBar />
      <CssBaseline />
      <Logic />
      {children}
    </Providers>
  </StyledEngineProvider>
)

export default Wrapper

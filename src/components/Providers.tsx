import React, { FC } from "react"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import { AlertProvider } from "@the-chat/alert"
import { Props, UserProvider } from "@the-chat/use-user"
import { ConfigProvider, Value } from "../utils/contexts"

type Wrapper1Props = {
  configProviderValue: Value
  muiThemeConfig?: ThemeOptions
}

const Wrapper1: FC<Wrapper1Props> = ({
  children,
  configProviderValue,
  muiThemeConfig,
}) => (
  <ConfigProvider value={configProviderValue}>
    <ThemeProvider theme={createTheme(muiThemeConfig)}>
      {children}
    </ThemeProvider>
  </ConfigProvider>
)

export type ProvidersProps = Wrapper1Props & {
  userProviderParams: Omit<Props, "auth">
}

const Providers: FC<ProvidersProps> = ({
  userProviderParams,
  configProviderValue,
  muiThemeConfig,
  children,
}) => (
  <AlertProvider>
    <UserProvider auth={configProviderValue.auth} {...userProviderParams}>
      <Wrapper1 {...{ configProviderValue, muiThemeConfig }}>
        {children}
      </Wrapper1>
    </UserProvider>
  </AlertProvider>
)

export default Providers

import { FC } from "react"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import { AlertProvider } from "@the-chat/alert"
import { Props, UserProvider } from "@the-chat/use-user"
import { ConfigProvider, Value } from "../../utils/contexts"

export type ProvidersProps = {
  configProviderValue: Value
  muiThemeConfig?: ThemeOptions
  userProviderParams: Omit<Props, "auth">
}

const Providers: FC<ProvidersProps> = ({
  userProviderParams,
  configProviderValue,
  muiThemeConfig,
  children,
}) => (
  <ConfigProvider value={configProviderValue}>
    <ThemeProvider theme={createTheme(muiThemeConfig)}>
      <AlertProvider>
        <UserProvider auth={configProviderValue.auth} {...userProviderParams}>
          {children}
        </UserProvider>
      </AlertProvider>
    </ThemeProvider>
  </ConfigProvider>
)

export default Providers

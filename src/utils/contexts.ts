import genContext from "@the-chat/gen-context"
import { State } from "@the-chat/types"
import usePkgSSO, { getSSOLink } from "@the-chat/use-sso"
import { useSignOut } from "@the-chat/use-user"
import { SSO, INFO } from "@the-chat/config"
import { SidebarButtonConfig } from "./useSidebarButtons"
import { Auth } from "@firebase/auth"
import { ContainerProps } from "@mui/material"
// todo: old-comment: use-user: type default value

// todo???????: to types pkg???
type ReWrite<O, P extends keyof O, NP extends string | number | symbol> = Omit<
  O,
  P
> &
  Record<NP, O[P]>

export type Value = {
  sidebarOpen: State<boolean>
  signOutArgs: Parameters<typeof useSignOut>
  newUser: boolean
  containerMaxWidth: ContainerProps["maxWidth"]
  auth: Auth
  InfoConfig: ReWrite<typeof INFO, "DEFAULT_INFO_HOST", "HOST">
  SSOConfig: ReWrite<typeof SSO, "DEFAULT_SSO_HOST", "HOST">
  useSidebarButtons: () => SidebarButtonConfig[]
}

export const [useConfig, ConfigProvider] = genContext<Value>()

export const useSidebarButtons = () => useConfig().useSidebarButtons()

export const useSSO = () => {
  const { auth, SSOConfig, newUser } = useConfig()

  usePkgSSO(auth, SSOConfig.HOST, newUser)
}
export const useGetSSOLink = (path = "") => {
  const { HOST } = useConfig().SSOConfig

  return getSSOLink(HOST + path)
}

import genContext from "@the-chat/gen-context"
import { State } from "@the-chat/types"
import usePkgSSO, { getSSOLink } from "@the-chat/use-sso"
import { useSignOut } from "@the-chat/use-user"
import { SidebarButtonConfig } from "./useSidebarButtons"
import { Auth } from "@firebase/auth"
import { ContainerProps } from "@mui/material"
import ReactMarkdown from "react-markdown"
import { SSO } from "@the-chat/config"

export type Value = {
  sidebarOpen: State<boolean>
  signOutArgs: Parameters<typeof useSignOut>
  newUser: boolean
  containerMaxWidth: ContainerProps["maxWidth"]
  auth: Auth
  useSidebarButtons: () => SidebarButtonConfig[]
  ReactMarkdown: typeof ReactMarkdown
}

export const [useConfig, ConfigProvider] = genContext<Value>()

export const useSidebarButtons = () => useConfig().useSidebarButtons()

export const useSSO = () => {
  const { auth, newUser } = useConfig()

  usePkgSSO(auth, SSO.HOST, newUser)
}
export const useGetSSOLink = (path = "") => {
  return getSSOLink(SSO.HOST + path)
}

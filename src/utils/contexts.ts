import genContext, { SimpleProviderWrapper } from "@the-chat/gen-context"
import { BaseUserData, State } from "@the-chat/types"
import { AllUserData } from "@the-chat/use-user"

const [useConfig, ConfigProvider] = genContext<{
  sidebarOpen: State<boolean>
  // todo: use-user: type default value
  user: AllUserData<BaseUserData>
}>(SimpleProviderWrapper, {
  sidebarOpen: [false, () => {}],
  user: null,
})

export const useSidebarOpen = () => useConfig().sidebarOpen
export const useUser = () => useConfig().user
export { ConfigProvider }

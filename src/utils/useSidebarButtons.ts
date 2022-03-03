import {
  about,
  chat,
  // groups,
  legalInfo,
  settings,
  SidebarButtonConfig,
  signIn,
  signOut,
  signUp,
} from "../config/buttons"
import {useUser} from "./contexts"
import {sort} from "./sort"

const useSidebarButtons = (): SidebarButtonConfig[] => {
  const [, user] = useUser()

  // if without account
  // groups
  // sign in
  // sign up
  // about
  // legal info

  // if account
  // chat
  // groups
  // settings
  // sign in
  // sign up
  // sign out
  // about
  // legal info

  return sort(
    Object.values(
      Object.assign(
        {
          signIn,
          signUp,
          about,
          legalInfo,
        },
        user && {chat, settings, signOut}
      )
    ),
    ({index}) => index
  )
}

export default useSidebarButtons

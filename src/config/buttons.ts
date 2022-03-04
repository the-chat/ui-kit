import {
  QuestionAnswer,
  Info,
  Settings,
  Help,
  PersonAdd,
  SwitchAccountSharp,
  MeetingRoom,
  // Groups,
  SvgIconComponent,
} from "@mui/icons-material"

export interface SidebarButtonConfig {
  divider?: boolean
  index: number
  Icon: SvgIconComponent
  href: string
}

// todo?: without index
let i = 0
const genButtonConfig = (
  data: Omit<SidebarButtonConfig, "index">
): SidebarButtonConfig => ({ index: i++, ...data })

// todo?: vars to obj
export const chat = genButtonConfig({
  divider: true,
  Icon: QuestionAnswer,
  href: "/",
})
// export const groups = genButtonConfig({ Icon: Groups, href: "/groups" })
export const settings = genButtonConfig({
  divider: true,
  Icon: Settings,
  href: "/settings",
})
export const signIn = genButtonConfig({
  Icon: SwitchAccountSharp,
  href: "/sign/in",
})
export const signUp = genButtonConfig({
  Icon: PersonAdd,
  href: "/sign/up",
})
export const signOut = genButtonConfig({
  divider: true,
  Icon: MeetingRoom,
  href: "/sign/out",
})
export const about = genButtonConfig({ Icon: Help, href: "/about" })
export const legalInfo = genButtonConfig({ Icon: Info, href: "/legal" })

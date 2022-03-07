import { sort } from "@the-chat/utils"
import { Info, Help, SvgIconComponent } from "@mui/icons-material"
import { useInfoConfig } from "./contexts"

export interface SidebarButtonConfig {
  divider?: boolean
  index: number
  Icon: SvgIconComponent
  href: string
}

export const useSidebarDefaultButtons = () => {
  const { HOST, aboutUrl, legalUrl } = useInfoConfig()

  return [
    { index: 0, Icon: Help, href: HOST + aboutUrl },
    { index: 1, Icon: Info, href: HOST + legalUrl },
  ]
}

export const useSidebarButtonsDefaultSortFn = (
  buttons: Record<string, SidebarButtonConfig>
): SidebarButtonConfig[] =>
  sort(
    Object.values(Object.assign(buttons, useSidebarDefaultButtons())),
    ({ index }) => index
  )

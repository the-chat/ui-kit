import { sort } from "@the-chat/utils"
import { Info, Help, SvgIconComponent } from "@mui/icons-material"
import { INFO } from "@the-chat/config"

export interface SidebarButtonConfig {
  divider?: boolean
  index: number
  Icon: SvgIconComponent
  href: string
}

export const useSidebarDefaultButtons = (indexOffset: number) => {
  const { HOST, aboutUrl, legalUrl } = INFO

  return [
    { index: indexOffset, Icon: Help, href: HOST + aboutUrl },
    { index: indexOffset + 1, Icon: Info, href: HOST + legalUrl },
  ]
}

export const useSidebarButtonsDefaultSortFn = (
  buttons: Record<string, SidebarButtonConfig>
): SidebarButtonConfig[] =>
  sort(
    Object.values(
      Object.assign(
        buttons,
        useSidebarDefaultButtons(Object.keys(buttons).length)
      )
    ),
    ({ index }) => index
  )

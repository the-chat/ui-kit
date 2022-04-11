import { Menu } from "@mui/material"
import { NoChildrenComponent } from "@the-chat/types"
import {
  PropsWithChildren,
  forwardRef,
  MouseEvent,
  useState,
  ComponentRef,
} from "react"

type MenuCoverProps = PropsWithChildren<{
  Open: NoChildrenComponent<{
    onClick: (event: MouseEvent) => void
  }>
}>

const MenuCover = forwardRef<ComponentRef<typeof Menu>, MenuCoverProps>(
  ({ Open, children }, ref) => {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null)
    const open = !!anchorEl

    const onClick = (event: MouseEvent) => setAnchorEl(event.currentTarget)

    const handleClose = () => setAnchorEl(null)

    return (
      <>
        <Open onClick={onClick} />
        <Menu ref={ref} anchorEl={anchorEl} open={open} onClose={handleClose}>
          {children}
        </Menu>
      </>
    )
  }
)

MenuCover.displayName = "MenuCover"

export default MenuCover

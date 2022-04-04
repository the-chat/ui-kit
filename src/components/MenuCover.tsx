import { Menu, MenuProps } from "@mui/material"
import { NoChildrenComponent } from "@the-chat/types"
import { PropsWithChildren, forwardRef, MouseEvent, useState } from "react"

type MenuCoverProps = PropsWithChildren<{
  Open: NoChildrenComponent<{
    onClick: (event: MouseEvent) => void
  }>
}>

const MenuCover = forwardRef(
  ({ Open, children }: MenuCoverProps, ref: MenuProps["ref"]) => {
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

export default MenuCover

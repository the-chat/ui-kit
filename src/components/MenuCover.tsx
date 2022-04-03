import { Menu } from "@mui/material"
import { NoChildrenComponent } from "@the-chat/types"
import { FC, MouseEvent, useState } from "react"

const MenuCover: FC<{
  Open: NoChildrenComponent<{
    onClick: (event: MouseEvent) => void
  }>
}> = ({ Open, children }) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const open = !!anchorEl

  const onClick = (event: MouseEvent) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Open onClick={onClick} />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {children}
      </Menu>
    </>
  )
}

export default MenuCover

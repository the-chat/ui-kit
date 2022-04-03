import { IconButtonProps } from "@mui/material"
import MenuItems from "./MenuItems"
import MenuWrapper from "./MenuWrapper"
import Open from "./Open"

const User = () => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)

  const handleClick = (
    event: Parameters<Required<IconButtonProps>["onClick"]>[0]
  ) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Open onClick={handleClick} />
      <MenuWrapper anchorEl={anchorEl} onClose={handleClose}>
        <MenuItems />
      </MenuWrapper>
    </>
  )
}

export default User

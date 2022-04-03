import Buttons from "./Buttons"
import { Drawer } from "@mui/material"
import { useConfig } from "../../../../utils/contexts"
import HeaderContent from "../HeaderContent"

const Sidebar = () => {
  const [open, setOpen] = useConfig().sidebarOpen

  const toggleDrawer = (open: boolean) => () => setOpen(open)

  // const iOS =
  //   typeof navigator !== "undefined" &&
  //   /iPad|iPhone|iPod/.test(navigator.userAgent)

  return (
    <Drawer
      // disableBackdropTransition={!iOS}
      // disableDiscovery={iOS}
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      // onOpen={toggleDrawer(true)}
    >
      <HeaderContent />
      <Buttons />
    </Drawer>
  )
}

export default Sidebar

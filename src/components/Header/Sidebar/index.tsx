import Buttons from "./Buttons"
import { Drawer } from "@mui/material"
import { useSidebarOpen } from "../../../utils/contexts"
import HeaderContent from "../HeaderContent"
import React from "react"

const Sidebar = () => {
  const [open, setOpen] = useSidebarOpen()

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

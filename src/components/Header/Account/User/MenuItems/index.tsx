import React from "react"
import { Divider } from "@mui/material"
import ChangeLink from "./ChangeLink"
import EditLink from "./EditLink"
import LogoutButton from "./LogoutButton"

const MenuItems = () => (
  <>
    <ChangeLink />
    <EditLink />
    <Divider />
    <LogoutButton />
  </>
)

export default MenuItems

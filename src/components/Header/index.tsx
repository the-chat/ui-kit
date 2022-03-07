import { AppBar } from "@mui/material"
import HeaderContent from "./HeaderContent"
import Sidebar from "./Sidebar"
import React from "react"
import Account from "./Account"

// TOOD: NAMING IN ALL DiR
// TODO: FOLDER STRUCTURE, IMPORTS

const Header = () => (
  <AppBar position="sticky">
    <HeaderContent />
    <Sidebar />
    <Account />
  </AppBar>
)

export default Header

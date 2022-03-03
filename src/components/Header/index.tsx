import {AppBar} from "@mui/material"
import HeaderContent from "./HeaderContent"
import Sidebar from "./Sidebar"
import React from "react"

// TOOD: NAMING IN ALL DiR
// TODO: FOLDER STRUCTURE, IMPORTS

export const Header = () => (
  <AppBar position="sticky">
    <HeaderContent />
    <Sidebar />
  </AppBar>
)

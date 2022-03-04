import { Toolbar } from "@mui/material"
import Title from "./Title"
import ToggleButton from "../Sidebar/ToggleButton"
import React from "react"
import Logo from "./Logo"

const HeaderContent = () => (
  <Toolbar disableGutters>
    <ToggleButton />
    <Title />
    <Logo />
  </Toolbar>
)

export default HeaderContent

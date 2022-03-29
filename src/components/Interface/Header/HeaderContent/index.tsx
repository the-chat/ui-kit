import { Toolbar } from "@mui/material"
import Title from "./Title"
import ToggleButton from "../Sidebar/ToggleButton"
import React from "react"

const HeaderContent = () => (
  <Toolbar disableGutters>
    <ToggleButton />
    <Title />
  </Toolbar>
)

export default HeaderContent

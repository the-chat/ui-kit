import { Toolbar } from "@mui/material"
import Title from "./Title"
import ToggleButton from "../Sidebar/ToggleButton"

const HeaderContent = () => (
  <Toolbar disableGutters>
    <ToggleButton />
    <Title />
  </Toolbar>
)

export default HeaderContent

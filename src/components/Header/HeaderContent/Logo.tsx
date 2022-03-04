import { Logout } from "@mui/icons-material"
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Theme,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Box } from "@mui/system"
import { useTranslation } from "next-i18next"
import React from "react"
import { useUser } from "../../../utils/contexts"
import getFullname from "../../../utils/getFullname"
import headerButtonStyles from "../../../utils/headerButtonStyles"
import Link from "../../Link"
import TooltipWithOnClick from "../../TooltipWithOnClick"

const useStyles = makeStyles<Theme>((theme) => ({
  open: headerButtonStyles(theme, true),
}))

const Open = ({ onClick }) => {
  const { open } = useStyles()

  return (
    <Box sx={{ background: "#999" }} className={open}>
      <TooltipWithOnClick
        title={getFullname(useUser()[0], useTranslation("vocabulary").t)}
      >
        <IconButton onClick={onClick}>
          <Avatar />
        </IconButton>
      </TooltipWithOnClick>
    </Box>
  )
}

const MenuWrapper = ({ children, open, handleClose, anchorEl }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
    </Menu>
  )
}

const MenuItems = () => {
  return (
    // todo: translate
    <>
      <MenuItem href="the-chat-sso.vercel.app/edit" LinkComponent={Link}>
        <Avatar src={useUser()[0].photoURL} /> Edit my account
      </MenuItem>
      <Divider />
      <MenuItem onClick={() => console.log("SIGN OUT (TODO)")}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  )
}

const Logo = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = !!anchorEl

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Open onClick={handleClick} />
      <MenuWrapper open={open} handleClose={handleClose} anchorEl={anchorEl}>
        <MenuItems />
      </MenuWrapper>
    </>
  )
}

export default Logo

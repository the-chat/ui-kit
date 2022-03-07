import { ListItemIcon, MenuItem } from "@mui/material"
import { Logout } from "@mui/icons-material"
import { useSignOut } from "@the-chat/use-user"
import { useSignOutArgs } from "../../../../../utils/contexts"
import { useTranslation } from "next-i18next"
import React from "react"

const LogoutButton = () => {
  const { t } = useTranslation("ui-kit-header")
  const { signOut, waiting } = useSignOut(...useSignOutArgs())

  return (
    <MenuItem disabled={waiting} onClick={signOut}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      {t("logout")}
    </MenuItem>
  )
}

export default LogoutButton

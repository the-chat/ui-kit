import { ListItemIcon, MenuItem } from "@mui/material"
import { Logout } from "@mui/icons-material"
import { useSignOut } from "@the-chat/use-user"
import { useConfig } from "../../../../../../utils/contexts"
import { useTranslation } from "next-i18next"

const LogoutButton = () => {
  const { t } = useTranslation("ui-kit-header")
  const { signOut, waiting } = useSignOut(...useConfig().signOutArgs)

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

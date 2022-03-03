import {ListItemText, ListItemIcon, ListItemButton} from "@mui/material"
import Link from "../../Link"
import TooltipWithOnClick from "../../TooltipWithOnClick"
import {useTranslation} from "next-i18next"
import {SvgIconComponent} from "@mui/icons-material"
import {useSidebarOpen} from "../../../utils/contexts"
import React from "react"

interface ButtonProps {
  currentHref: boolean
  divider?: boolean
  Icon: SvgIconComponent
  href: string
}

const Button = ({currentHref, divider, Icon, href}: ButtonProps) => {
  const {t} = useTranslation("pages")
  const [, setOpen] = useSidebarOpen()

  return (
    <TooltipWithOnClick title={currentHref ? t("alreadyOnThisPage") : ""}>
      <ListItemButton
        disabled={currentHref}
        underline="none"
        color="textPrimary"
        component={Link}
        {...(!currentHref
          ? {onClick: () => setOpen(false)}
          : {
              sx: {
                pointerEvents: "none",
              },
            })}
        href={href}
        divider={divider}
      >
        <ListItemIcon sx={{color: "primary.main", minWidth: "initial"}}>
          <Icon />
        </ListItemIcon>
        <ListItemText sx={{p: 1, m: 0}} primary={t(href)} />
      </ListItemButton>
    </TooltipWithOnClick>
  )
}

export default Button

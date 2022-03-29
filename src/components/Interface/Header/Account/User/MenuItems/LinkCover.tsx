import React, { FC } from "react"
import { Avatar, MenuItem } from "@mui/material"
import { useUser } from "@the-chat/use-user"
import Link, { LinkProps } from "../../../../../Link"

const LinkCover: FC<Pick<LinkProps, "href">> = ({ href, children }) => {
  const [dbData] = useUser()

  return (
    <Link color="textPrimary" href={href}>
      <MenuItem>
        <Avatar {...(dbData.photoURL && { src: dbData.photoURL })} />
        {children}
      </MenuItem>
    </Link>
  )
}

export default LinkCover

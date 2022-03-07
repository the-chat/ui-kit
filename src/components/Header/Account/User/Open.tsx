import React from "react"
import { Avatar, IconButtonProps } from "@mui/material"
import { useUser } from "@the-chat/use-user"
import getFullname from "../../../../utils/getFullname"
import ButtonWrapper from "../ButtonWrapper"
import { useTranslation } from "next-i18next"

const Open = ({ onClick }: Pick<IconButtonProps, "onClick">) => {
  const [{ photoURL }] = useUser()

  return (
    <ButtonWrapper
      onClick={onClick}
      title={getFullname(useUser()[0], useTranslation("vocabulary").t)}
    >
      <Avatar {...(photoURL && { src: photoURL })} />{" "}
    </ButtonWrapper>
  )
}

export default Open

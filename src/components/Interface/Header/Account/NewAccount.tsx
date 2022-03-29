import React from "react"
import { Avatar } from "@mui/material"
import Link from "next/link"
import ButtonWrapper from "./ButtonWrapper"
import { AddReaction } from "@mui/icons-material"
import { useTranslation } from "next-i18next"
import { useGetSSOLink } from "../../../../utils/contexts"

const NewAccount = () => {
  const { t } = useTranslation("ui-kit-header")

  return (
    <Link href={useGetSSOLink()}>
      <ButtonWrapper title={t("new-acc-tooltip-title")}>
        <Avatar>
          <AddReaction />
        </Avatar>
      </ButtonWrapper>
    </Link>
  )
}

export default NewAccount

import React from "react"
import { useTranslation } from "next-i18next"
import LinkCover from "./LinkCover"
import { useConfig, useGetSSOLink } from "../../../../../utils/contexts"
import { SSO } from "@the-chat/config"

const ChangeLink = () => {
  const { t } = useTranslation("ui-kit-header")
  const { HOST, changeUrl } = SSO

  return (
    <LinkCover href={useGetSSOLink(HOST) + changeUrl}>
      {t("change-acc")}
    </LinkCover>
  )
}

export default ChangeLink

import React from "react"
import { useTranslation } from "next-i18next"
import { useConfig, useGetSSOLink } from "../../../../../utils/contexts"
import LinkCover from "./LinkCover"

const EditLink = () => {
  const { t } = useTranslation("ui-kit-header")
  const { HOST, editUrl } = useConfig().SSOConfig

  return (
    <LinkCover href={useGetSSOLink(HOST) + editUrl}>{t("edit-acc")}</LinkCover>
  )
}

export default EditLink

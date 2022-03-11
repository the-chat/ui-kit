import React from "react"
import { useTranslation } from "next-i18next"
import LinkCover from "./LinkCover"
import { useConfig } from "../../../../../utils/contexts"

const ChangeLink = () => {
  const { t } = useTranslation("ui-kit-header")
  const { HOST, changeUrl } = useConfig().SSOConfig

  return <LinkCover href={HOST + changeUrl}>{t("change-acc")}</LinkCover>
}

export default ChangeLink

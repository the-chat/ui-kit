import React from "react"
import { useTranslation } from "next-i18next"
import LinkCover from "./LinkCover"
import { useSSOConfig } from "../../../../../utils/contexts"

const ChangeLink = () => {
  const { t } = useTranslation("ui-kit-header")
  const { HOST, changeUrl } = useSSOConfig()

  return <LinkCover href={HOST + changeUrl}>{t("change-acc")}</LinkCover>
}

export default ChangeLink

import { useTranslation } from "next-i18next"
import LinkCover from "./LinkCover"
import { SSO } from "@the-chat/config"
import { setArgsForSSO } from "@the-chat/use-sso"

const ChangeLink = () => {
  const { t } = useTranslation("ui-kit-header")
  const { HOST, changeUrl } = SSO

  return (
    <LinkCover href={setArgsForSSO(HOST + changeUrl)}>
      {t("change-acc")}
    </LinkCover>
  )
}

export default ChangeLink

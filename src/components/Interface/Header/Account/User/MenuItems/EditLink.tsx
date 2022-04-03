import { useTranslation } from "next-i18next"
import LinkCover from "./LinkCover"
import { SSO } from "@the-chat/config"
import { setArgsForSSO } from "@the-chat/use-sso"

const EditLink = () => {
  const { t } = useTranslation("ui-kit-header")
  const { HOST, editUrl } = SSO

  return (
    <LinkCover href={setArgsForSSO(HOST + editUrl)}>{t("edit-acc")}</LinkCover>
  )
}

export default EditLink

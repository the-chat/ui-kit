import { Avatar } from "@mui/material"
import Link from "next/link"
import ButtonWrapper from "./ButtonWrapper"
import { AddReaction } from "@mui/icons-material"
import { useTranslation } from "next-i18next"
import { setArgsForSSO } from "@the-chat/use-sso"
import { SSO } from "@the-chat/config"

const NewAccount = () => {
  const { t } = useTranslation("ui-kit-header")

  return (
    <Link href={setArgsForSSO(SSO.HOST)}>
      <ButtonWrapper title={t("new-acc-tooltip-title")}>
        <Avatar>
          <AddReaction />
        </Avatar>
      </ButtonWrapper>
    </Link>
  )
}

export default NewAccount

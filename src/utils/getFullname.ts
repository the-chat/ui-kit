import { TFunction } from "next-i18next"
import { BaseUserData } from "@the-chat/use-user"

const getFullname = (
  { displayName, email, phoneNumber }: BaseUserData,
  voc: TFunction
) => {
  const emailStr = email ? ` <${email}>` : ""
  const phoneStr = phoneNumber ? ` [${phoneNumber}]` : ""

  const fullname = displayName + emailStr + phoneStr
  const withoutDisplayName = emailStr.trim() + phoneStr

  // old comment: name can not exist, if you signed in with google
  return displayName ? fullname : withoutDisplayName || voc("haveNotAccount")
}

export default getFullname

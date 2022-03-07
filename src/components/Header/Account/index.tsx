import React from "react"
import { NoSsr } from "@mui/material"
import { useUser } from "@the-chat/use-user"
import { useConfig } from "../../../utils/contexts"
import NewAccount from "./NewAccount"
import User from "./User"

const Account = () => {
  const [, user, { loading, error }] = useUser()

  if (!useConfig().noUser)
    return user && !loading && !error ? <User /> : <NewAccount />
  return null
}

const AccountNoSsr = () => (
  <NoSsr>
    <Account />
  </NoSsr>
)

export default AccountNoSsr

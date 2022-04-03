import { NoSsr } from "@mui/material"
import { useUser } from "@the-chat/use-user"
import NewAccount from "./NewAccount"
import User from "./User"

const Account = () => {
  const [, user, { loading, error }] = useUser()

  return user && !loading && !error ? <User /> : <NewAccount />
}

const AccountNoSsr = () => (
  <NoSsr>
    <Account />
  </NoSsr>
)

export default AccountNoSsr

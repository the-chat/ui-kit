import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { useUser } from "@the-chat/use-user"
import ErrorMessage, { Log } from "./ErrorMessage"
import Loading from "./Loading"
import { ComponentType, FC } from "react"
import { MESSAGE_PAGE_PATHS } from "@the-chat/config"

type Options = { log: Log } & Partial<
  Record<
    "withDb" | "withoutVerification" | "withoutPush" | "withoutFallbacks",
    boolean
  >
>

// todo?: infinite loading?????
const SignedInOnly: FC<Options> = ({
  children,
  withoutVerification,
  withoutPush,
  withoutFallbacks,
  withDb,
  log = console.dir,
}) => {
  const { t } = useTranslation("signed-in-only")
  const [dbData, user, { loading, error }, { dbLoading, dbError }] = useUser()
  const router = useRouter()
  const push = withoutPush ? () => {} : router.push

  if (!withoutFallbacks) {
    if (error) {
      console.dir(error)
      return <ErrorMessage log={log} error={error} />
    }

    if (loading) return <Loading text={t("yourAccount")} />

    if (withDb) {
      if (dbError) {
        console.dir(dbError)
        return <ErrorMessage log={log} error={dbError} />
      }

      if (dbLoading) return <Loading text={t("yourProfile")} />
    }
  }

  if (user) {
    if (user.emailVerified) {
      return <>{children}</>
    } else if (withoutVerification) {
      return <>{children}</>
    } else {
      if (
        router.pathname != MESSAGE_PAGE_PATHS.signedInOnly.verificationCaution
      ) {
        // dbData can be not loaded
        push(
          MESSAGE_PAGE_PATHS.signedInOnly.verificationCaution +
            "?email=" +
            (dbData.email || user.email || t("verification-caution-no-email"))
        )
        return null
      } else {
        // for types
        return <>{children}</>
      }
    }
  }

  push("/sign/in")
  return null
}

const SignedInOnlyHOC = (
  Component: ComponentType,
  options: Options = { log: console.dir }
) => {
  const WrappedComponentWithSignedInOnly = () => (
    <SignedInOnly {...options}>
      <Component />
    </SignedInOnly>
  )

  return WrappedComponentWithSignedInOnly
}

export { SignedInOnlyHOC }
export default SignedInOnly

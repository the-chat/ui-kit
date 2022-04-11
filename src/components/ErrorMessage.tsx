import { Typography } from "@mui/material"
import { useTranslation } from "next-i18next"
import { ComponentRef, forwardRef } from "react"

export type Log = (msg: unknown) => void

type ErrorMessageProps = {
  log: Log
  error: Error
}

const ErrorMessage = forwardRef<
  ComponentRef<typeof Typography>,
  ErrorMessageProps
>(({ log = console.dir, error }, ref) => {
  // todo????: ns to config
  const { t } = useTranslation("fallbacks")

  log(error)

  return (
    <Typography ref={ref} variant="body1">
      {t("error", {
        errorMessage: error,
      })}
    </Typography>
  )
})

ErrorMessage.displayName = "ErrorMessage"

export default ErrorMessage

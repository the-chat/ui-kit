import { Typography } from "@mui/material"
import { useTranslation } from "next-i18next"

export type Log = (msg: unknown) => void

const ErrorMessage = ({
  log = console.dir,
  error,
}: {
  log: Log
  error: Error
}) => {
  // todo????: ns to config
  const { t } = useTranslation("fallbacks")

  log(error)

  return (
    <Typography variant="body1">
      {t("error", {
        errorMessage: error,
      })}
    </Typography>
  )
}

export default ErrorMessage

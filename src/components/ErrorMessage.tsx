import { Typography, TypographyProps } from "@mui/material"
import { useTranslation } from "next-i18next"
import { forwardRef } from "react"

export type Log = (msg: unknown) => void

const ErrorMessage = forwardRef(
  (
    {
      log = console.dir,
      error,
    }: {
      log: Log
      error: Error
    },
    ref: TypographyProps["ref"]
  ) => {
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
  }
)

export default ErrorMessage

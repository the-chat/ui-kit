import { CircularProgress, Typography, TypographyProps } from "@mui/material"
import { Box } from "@mui/system"
import { useTranslation } from "next-i18next"
import { forwardRef } from "react"

const Loading = forwardRef(
  ({ text }: { text?: string }, ref: TypographyProps["ref"]) => {
    const { t } = useTranslation("fallbacks")

    return (
      <Typography ref={ref} sx={{ display: "flex" }} variant="h4">
        <Box sx={{ pr: 1, display: "flex", alignItems: "center" }}>
          <CircularProgress size="1em" />
        </Box>
        {text ? t("xIsLoading", { x: text }) : t("loading")}
      </Typography>
    )
  }
)

export default Loading

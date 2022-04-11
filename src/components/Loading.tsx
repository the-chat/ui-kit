import { CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useTranslation } from "next-i18next"
import { ComponentRef, forwardRef } from "react"

type LoadingProps = { text?: string }

const Loading = forwardRef<ComponentRef<typeof Typography>, LoadingProps>(
  ({ text }, ref) => {
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

Loading.displayName = "Loading"

export default Loading

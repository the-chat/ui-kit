import { CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useTranslation } from "next-i18next"

const Loading = ({ text }: { text?: string }) => {
  const { t } = useTranslation("fallbacks")

  return (
    <Typography sx={{ display: "flex" }} variant="h4">
      <Box sx={{ pr: 1, display: "flex", alignItems: "center" }}>
        <CircularProgress size="1em" />
      </Box>
      {text ? t("xIsLoading", { x: text }) : t("loading")}
    </Typography>
  )
}

export default Loading

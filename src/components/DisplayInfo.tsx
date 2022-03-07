import React from "react"
import { Namespace, useTranslation } from "react-i18next"
import Markdown from "./Markdown"

const DisplayInfo = ({ tKey }: { tKey: Namespace }) => {
  const { t } = useTranslation("info")
  return <Markdown>{t(tKey)}</Markdown>
}

export default DisplayInfo

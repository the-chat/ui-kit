import React from "react"
import { TFuncKey, useTranslation } from "react-i18next"
import Markdown from "./Markdown"

const DisplayInfo = ({ tKey }: { tKey: TFuncKey }) => {
  // todo???: namespace to params
  const { t } = useTranslation("info")

  return <Markdown>{t(tKey)}</Markdown>
}

export default DisplayInfo

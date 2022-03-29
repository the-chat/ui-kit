import React from "react"
import { TFuncKey, useTranslation } from "react-i18next"
import Markdown from "./Markdown"
import { Options } from "react-markdown"

type DisplayInfoProps = Partial<Omit<Options, "children">> & { tKey: TFuncKey }
const DisplayInfo = ({ tKey, ...props }: DisplayInfoProps) => {
  // todo?: namespace to params
  const { t } = useTranslation("info")

  return <Markdown {...props}>{t(tKey)}</Markdown>
}

export default DisplayInfo

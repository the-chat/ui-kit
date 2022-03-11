import React from "react"
import { Namespace, useTranslation } from "react-i18next"
import getMarkdown, { Args, Options } from "./Markdown"

const getDisplayInfo: (
  ...args: Args
) => (props: Partial<Options> & { tKey: Namespace }) => JSX.Element = (
  ReactMarkdown,
  remarkGfm
) => {
  const Markdown = getMarkdown(ReactMarkdown, remarkGfm)

  const DisplayInfo = ({ tKey, ...props }) => {
    const { t } = useTranslation("info")

    return <Markdown {...props}>{t(tKey)}</Markdown>
  }

  return DisplayInfo
}

export default getDisplayInfo

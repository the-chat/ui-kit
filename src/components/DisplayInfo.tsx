import React from "react"
import { Namespace, useTranslation } from "react-i18next"
import getMarkdown, { Args, Options } from "./Markdown"

const getDisplayInfo: (
  ...args: Args
) => (props: Options & { tKey: Namespace }) => JSX.Element = (
  ReactMarkdown,
  remarkGfm
) => {
  const Markdown = getMarkdown(ReactMarkdown, remarkGfm)

  return ({ tKey, ...props }) => {
    const { t } = useTranslation("info")

    return <Markdown {...props}>{t(tKey)}</Markdown>
  }
}

export default getDisplayInfo

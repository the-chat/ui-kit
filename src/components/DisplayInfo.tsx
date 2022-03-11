import React from "react"
import { Namespace, useTranslation } from "react-i18next"
import getMarkdown, { Args, Options } from "./Markdown"

type DisplayInfoProps = Partial<Omit<Options, "children">> & { tKey: Namespace }

const getDisplayInfo: (
  ...args: Args
) => (props: DisplayInfoProps) => JSX.Element = (ReactMarkdown, remarkGfm) => {
  const Markdown = getMarkdown(ReactMarkdown, remarkGfm)

  const DisplayInfo = ({ tKey, ...props }: DisplayInfoProps) => {
    const { t } = useTranslation("info")

    return <Markdown {...props}>{t(tKey)}</Markdown>
  }

  return DisplayInfo
}

export default getDisplayInfo

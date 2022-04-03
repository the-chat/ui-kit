import { Namespace, TFuncKey, useTranslation } from "react-i18next"
import Markdown from "./Markdown"

const DisplayInfo = ({ ns, tKey }: { ns: Namespace; tKey: TFuncKey }) => {
  const { t } = useTranslation(ns)

  return <Markdown>{t(tKey)}</Markdown>
}

export default DisplayInfo

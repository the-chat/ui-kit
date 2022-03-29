// import { ProviderProps } from "@the-chat/gen-context" // todo?: this export is useless???
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import React from "react"

export type AppHeadProps = {
  name: string
}

const AppHead = ({ name }: AppHeadProps) => {
  const { t } = useTranslation("pages")
  const router = useRouter()

  const title = t(router.pathname || "404")

  return (
    <>
      <title>
        {name} | {title}
      </title>
    </>
  )
}

export default AppHead

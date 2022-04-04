// import { ProviderProps } from "@the-chat/gen-context" // todo?: this export is useless???
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { FC } from "react"

export type AppHeadProps = {
  name: string
  Head: FC
}

const AppHead = ({ Head, name }: AppHeadProps) => {
  const { t } = useTranslation("pages")
  const router = useRouter()

  const title = t(router.pathname || "404")

  return (
    <Head>
      <title>
        {name} | {title}
      </title>
    </Head>
  )
}

export default AppHead

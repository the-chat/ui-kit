import { useRouter } from "next/router"
import { useUser } from "@the-chat/use-user"

const useCurrectLocale = () => {
  // todo: test
  const { replace, locale, asPath, pathname } = useRouter()
  const [dbData, , , { dbError, dbLoading }] = useUser()

  const dbLoaded = !dbError && !dbLoading
  if (dbLoaded && dbData.lang != locale)
    replace(pathname, asPath, { locale: dbData.lang })
}

export default useCurrectLocale

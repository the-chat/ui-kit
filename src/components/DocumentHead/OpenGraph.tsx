import { Props } from "./types"

const OpenGraph = ({ og, url, iconUrl, title, description }: Props) => (
  <>
    <meta property="og:type" content={og.type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={title} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={iconUrl} />
  </>
)

export default OpenGraph

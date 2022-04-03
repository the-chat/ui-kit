import { TwitterProps } from "./types"

const Twitter = ({
  url,
  iconUrl,
  title,
  description,
  twitter,
}: TwitterProps) => (
  <>
    <meta name="twitter:card" content={twitter.card} />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={iconUrl} />
    <meta name="twitter:creator" content={twitter.creator} />
  </>
)

export default Twitter

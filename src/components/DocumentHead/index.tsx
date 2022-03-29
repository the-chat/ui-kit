import React from "react"
import MUILinks from "./MUILinks"
import Pwa from "./Pwa"
import Twitter from "./Twitter"
import OpenGraph from "./OpenGraph"
import { Props } from "./types"

const DocumentHead = (props: Props) => (
  <>
    {/* learn */}
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
    />
    <MUILinks iconUrl={props.iconUrl} />
    <Pwa {...props} />
    <Twitter {...props} />
    <OpenGraph {...props} />
  </>
)

export const defaultProps: (
  config: Omit<Props, "og" | "twitter"> &
    Record<"twitter", Pick<Props["twitter"], "creator">>
) => Props = (config) => ({
  ...config,
  og: { type: "website" },
  twitter: { card: "summary", ...config.twitter },
})

export default DocumentHead

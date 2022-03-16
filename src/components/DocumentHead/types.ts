type Strs = "title" | "description" | "url" | "iconUrl"

export type Props = {
  og: { type: string }
  twitter: { card: string; creator: string }
} & Record<Strs, string>

export type MUILinksProps = Pick<Props, "iconUrl">
export type TwitterProps = Pick<Props, Strs | "twitter">

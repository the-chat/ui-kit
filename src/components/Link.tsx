import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material"
import { ComponentRef, forwardRef } from "react"

export type LinkProps = {
  href: NextLinkProps["href"]
  next?: Omit<NextLinkProps, "href">
} & MUILinkProps

const Link = forwardRef<ComponentRef<typeof MUILink>, LinkProps>(
  ({ href, next, ...props }, ref) => (
    <NextLink {...next} href={href} passHref>
      <MUILink ref={ref} {...props} />
    </NextLink>
  )
)

Link.displayName = "Link"

export default Link

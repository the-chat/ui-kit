import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material"
import { ForwardedRef, forwardRef } from "react"

export type LinkProps = {
  href: NextLinkProps["href"]
  next?: Omit<NextLinkProps, "href">
} & MUILinkProps

const LinkForwardRefRender = (
  { href, next, ...props }: LinkProps,
  ref: MUILinkProps["ref"]
) => (
  <NextLink {...next} href={href} passHref>
    <MUILink ref={ref} {...props} />
  </NextLink>
)

const Link = forwardRef(LinkForwardRefRender)

export default Link

import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { Link as MUILink, LinkProps as MUILinkProps } from "@mui/material"
import React, { ForwardedRef, forwardRef } from "react"

export type LinkProps = {
  href: NextLinkProps["href"]
  next?: Omit<NextLinkProps, "href">
} & MUILinkProps

// todo?: naming
const LinkForwardRefRender = (
  { href, next, ...props }: LinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) => (
  <NextLink {...next} href={href} passHref>
    <MUILink ref={ref} {...props} variant="body2" />
  </NextLink>
)

const Link = forwardRef(LinkForwardRefRender)

export default Link

import { forwardRef, PropsWithChildren, ReactNode, ComponentRef } from "react"
import { Container } from "@mui/material"
import { useConfig } from "../../utils/contexts"
import Header from "./Header"
import Wrapper, { WrapperProps } from "./Wrapper"

const PageLayout = forwardRef<
  ComponentRef<typeof Container>,
  { children: ReactNode }
>(({ children }, ref) => (
  <>
    <Header />
    <Container ref={ref} maxWidth={useConfig().containerMaxWidth}>
      {children}
    </Container>
  </>
))

const Interface = forwardRef<
  ComponentRef<typeof Container>,
  PropsWithChildren<WrapperProps>
>(({ children, ...props }, ref) => (
  <Wrapper {...props}>
    <PageLayout ref={ref}>{children}</PageLayout>
  </Wrapper>
))

PageLayout.displayName = "PageLayout"
Interface.displayName = "Interface"

export default Interface

import { FC, forwardRef, PropsWithChildren, ReactChild, ReactNode } from "react"
import { Container, ContainerProps } from "@mui/material"
import { useConfig } from "../../utils/contexts"
import Header from "./Header"
import Wrapper, { WrapperProps } from "./Wrapper"

const PageLayout = forwardRef(
  ({ children }: { children: ReactNode }, ref: ContainerProps["ref"]) => {
    return (
      <>
        <Header />
        <Container ref={ref} maxWidth={useConfig().containerMaxWidth}>
          {children}
        </Container>
      </>
    )
  }
)

const Interface = forwardRef(
  (
    { children, ...props }: PropsWithChildren<WrapperProps>,
    ref: ContainerProps["ref"]
  ) => (
    <Wrapper {...props}>
      <PageLayout ref={ref}>{children}</PageLayout>
    </Wrapper>
  )
)

export default Interface

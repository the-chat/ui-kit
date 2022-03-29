import React, { FC } from "react"
import { Container } from "@mui/material"
import { useConfig } from "../../utils/contexts"
import Header from "./Header"
import Wrapper, { WrapperProps } from "./Wrapper"

const PageLayout: FC = ({ children }) => (
  <>
    <Header />
    <Container maxWidth={useConfig().containerMaxWidth}>{children}</Container>
  </>
)

const Interface: FC<WrapperProps> = ({ children, ...props }) => (
  <Wrapper {...props}>
    <PageLayout>{children}</PageLayout>
  </Wrapper>
)

export default Interface

// TODO?: components props

import { ComponentProps } from "react"
// import Link from "./Link"
import Title, { SubTitle } from "../Title"
import {
  Typography,
  TypographyProps,
  Paper,
  Table,
  TableContainer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import { useConfig } from "../../utils/contexts"
import ReactMarkdown, { Components } from "react-markdown"

const MarkdownHeading: Components["h1"] = ({ level, children }) => {
  let variant: Required<TypographyProps>["variant"]

  switch (level) {
    case 1:
      return <Title text={children} />
    case 2:
      return <SubTitle text={children} />
    case 3:
      variant = "subtitle1"
      break
    case 4:
      variant = "subtitle2"
      break
    case 5:
      variant = "body1"
      break
    case 6:
    default:
      variant = "body2"
      break
  }

  return (
    <Typography gutterBottom variant={variant}>
      {children}
    </Typography>
  )
}

const MarkdownListItem: Components["li"] = ({ children }) => (
  <ListItem divider dense>
    <ListItemText primary={children} />
  </ListItem>
)

const MarkdownList: Components["ul"] = (props) => (
  <List sx={{ padding: 0 }} {...props} />
)

const MarkdownTable: Components["table"] = ({ children }) => (
  <TableContainer component={Paper}>
    {/* todo */}
    <Table size="small" aria-label="a dense table">
      {children}
    </Table>
  </TableContainer>
)

const components: Components = {
  h1: MarkdownHeading,
  h2: MarkdownHeading,
  h3: MarkdownHeading,
  h4: MarkdownHeading,
  h5: MarkdownHeading,
  h6: MarkdownHeading,
  // p: MarkdownHeading,
  ul: MarkdownList,
  // a: Link, // TODO
  li: MarkdownListItem,
  table: MarkdownTable,
}

const Markdown = ({
  children,
}: Pick<ComponentProps<typeof ReactMarkdown>, "children">) => {
  const { Component, props } = useConfig().markdown || {}

  if (Component)
    return (
      <Component
        {...props}
        components={Object.assign(components, props?.components)}
      >
        {children}
      </Component>
    )

  return null
}

export default Markdown

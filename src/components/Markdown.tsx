import React from "react"
import Typography, { TypographyProps } from "@mui/material/Typography"
import Link from "./Link"
import Title from "./Title"
import Table from "@mui/material/Table"
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import { ListItem, ListItemText, List } from "@mui/material"
import ReactMarkdown, { Options, Components } from "react-markdown"
import remarkGfm from "remark-gfm"

const MarkdownHeading: Components["h1"] = ({ level, children }) => {
  let variant: Required<TypographyProps>["variant"]
  switch (level) {
    case 1:
      return <Title text={children} />
    case 2:
      return (
        <Typography color="primary" gutterBottom variant="caption">
          {children}
        </Typography>
      )
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

const components = {
  h1: MarkdownHeading,
  h2: MarkdownHeading,
  h3: MarkdownHeading,
  h4: MarkdownHeading,
  h5: MarkdownHeading,
  h6: MarkdownHeading,
  p: MarkdownHeading,
  ul: MarkdownList,
  a: Link,
  li: MarkdownListItem,
  table: MarkdownTable,
}

const Markdown = (props: Options) => (
  <ReactMarkdown
    remarkPlugins={[
      remarkGfm,
      ...(props.remarkPlugins ? props.remarkPlugins : []),
    ]}
    components={Object.assign(components, props.components)}
    {...props}
  />
)

export default Markdown

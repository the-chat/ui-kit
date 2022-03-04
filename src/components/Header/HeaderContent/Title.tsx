import {dependsOnToolbar} from "@the-chat/utils"
import {Typography, Breadcrumbs, Theme} from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import {useUser} from "../../../utils/contexts"
import getFullname from "../../../utils/getFullname"
import {useTranslation} from "next-i18next"
import TooltipWithOnClick from "../../TooltipWithOnClick"
import React from "react"

const useStyles = makeStyles<Theme>((theme) => ({
  ol: {
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
  },
  li: {
    "&:nth-child(3) p": {
      maxWidth: 100,
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  },
  // todo long time: left margin is little bit bigger then right becouse of there is not text, there is icon
  root: {
    maxWidth: 150,
    color: "inherit",
    top: 0,
    left: 0,
    ...dependsOnToolbar((toolbarHeight) => ({
      // this is possible becouse open button + "margin" is equals to toolbar's height
      // marginLeft: toolbarHeight,
      transform: "translate(" + toolbarHeight + "px)",
    })),
  },
  separator: {margin: theme.spacing(0, 1)},
}))

const Title = () => {
  const [voc] = useTranslation("vocabulary")
  const [dbData] = useUser()
  const classes = useStyles()

  const fullname = getFullname(dbData, voc)

  return (
    // right little extra padding hoverable
    <Breadcrumbs
      {...{
        separator: "/",
        classes,
      }}
    >
      <Typography>the Chat</Typography>
      <TooltipWithOnClick ComponentTag={Typography} title={fullname}>
        {dbData && fullname}
      </TooltipWithOnClick>
    </Breadcrumbs>
  )
}

export default Title

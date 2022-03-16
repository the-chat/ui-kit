import React from "react"
import { MUILinksProps } from "./types"

const MUILinks = ({ iconUrl }: MUILinksProps) => (
  <>
    {/* Favicon */}
    <link href={iconUrl} rel="shortcut icon" type="image/x-icon" />
    {/* Material Icons */}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    {/* Roboto */}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </>
)

export default MUILinks

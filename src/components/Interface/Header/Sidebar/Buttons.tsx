import Button from "./Button"
import { List } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import { dependsOnToolbar } from "@the-chat/utils"
import { useRouter } from "next/router"
import { useSidebarButtons } from "../../../../utils/contexts"

const useStyles = makeStyles({
  buttonsClassName: {
    minWidth: 220,
    padding: 0,
    overflow: "auto",
    ...dependsOnToolbar((whiteSpace) => ({
      maxHeight: `calc(100vh - ${whiteSpace}px)`,
    })),
  },
})

const Buttons = () => {
  const router = useRouter()
  const buttons = useSidebarButtons()
  const { buttonsClassName } = useStyles()

  return (
    <List className={buttonsClassName}>
      {buttons.map(({ divider, href, Icon }) => (
        <Button
          key={href}
          currentHref={router.pathname === href}
          {...{ divider, href, Icon }}
        />
      ))}
    </List>
  )
}

export default Buttons

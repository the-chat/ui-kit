import { makeStyles } from "@mui/styles"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"
import { TextField, TextFieldProps } from "@mui/material"
import { NoChildrenComponent } from "@the-chat/types"
import { ComponentRef, ForwardedRef, forwardRef, ReactNode } from "react"

const useStyles = makeStyles({
  hiddenFileInput: {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    clipPath: "inset(50%)",
    border: 0,
  },
})

type DT = {
  component: string
  disabled: boolean
  children: ReactNode
}

type InputFileProps<T extends DT> = {
  Tag: NoChildrenComponent<T>
  componentProps: Omit<T, keyof DT>
} & TextFieldProps

const InputFile = forwardRef(
  <T extends DT>(
    {
      Tag,
      children = <AddPhotoAlternateIcon />,
      disabled = false,
      componentProps,
      ...props
    }: InputFileProps<T>,
    ref: ForwardedRef<ComponentRef<typeof TextField>>
  ) => {
    const { hiddenFileInput } = useStyles()

    return (
      <Tag {...(componentProps as T)} component="label" disabled={disabled}>
        {/* learn: in html "<input type="file" ... value>" should i fix than and is this is a bug? */}
        <TextField
          ref={ref}
          // props not overriding component behavior
          {...props}
          disabled={disabled}
          className={[props.className, hiddenFileInput].join(" ")}
          type="file"
        />
        {children}
      </Tag>
    )
  }
)

InputFile.displayName = "InputFile"

export default InputFile

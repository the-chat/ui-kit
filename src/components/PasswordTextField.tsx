import {
  InputAdornment,
  IconButton,
  TextField,
  TextFieldProps,
} from "@mui/material"
import { ComponentRef, forwardRef, MouseEvent, useState } from "react"
import { VisibilityOff, Visibility } from "@mui/icons-material"

const PasswordTextField = forwardRef<
  ComponentRef<typeof TextField>,
  TextFieldProps
>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((p) => !p)

  // todo: is this handler neccessary
  const handleMouseDownPassword = (event: MouseEvent) => event.preventDefault()

  return (
    <TextField
      {...props}
      ref={ref}
      type={showPassword ? "text" : "password"}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
})

PasswordTextField.displayName = "PasswordTextField"

export default PasswordTextField

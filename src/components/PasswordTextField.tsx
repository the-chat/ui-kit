import {
  InputAdornment,
  IconButton,
  TextField,
  TextFieldProps,
} from "@mui/material"
import { MouseEvent, useState } from "react"
import { VisibilityOff, Visibility } from "@mui/icons-material"

const PasswordTextField = (props: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((p) => !p)

  // todo: is this handler neccessary
  const handleMouseDownPassword = (event: MouseEvent) => event.preventDefault()

  return (
    <TextField
      {...props}
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
}

export default PasswordTextField

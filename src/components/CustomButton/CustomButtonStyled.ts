import Button, { ButtonProps } from "@mui/material/Button"
import {styled} from "@mui/material/styles"


const CustomButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: "pink",
  },
}))

export default CustomButtonStyled
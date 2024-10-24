import {MaterialButton, MaterialContainer, MaterialImg} from "./Material.styled";
import {Box} from "@mui/system";
import { ReactComponent as Arrow } from './arrow.svg'

export const Material = () => {
  return <MaterialContainer>
    <MaterialImg />
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    }}>
      <MaterialButton>Перейти <Arrow /> </MaterialButton>
    </Box>
  </MaterialContainer>
}

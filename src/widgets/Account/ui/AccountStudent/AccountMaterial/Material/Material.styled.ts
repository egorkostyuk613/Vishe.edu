import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const MaterialContainer = styled(Box)({
  height: 150,
  background: 'white',
  borderRadius: 8,
  display: 'grid',
  gridTemplateColumns: '98px 1fr',
  padding: 8,
  gap: 15,
})

export const MaterialImg = styled(Box)({
  background: '#D9D9D9',
  borderRadius: 8,
  height: "100%"
})

export const MaterialButton = styled(Box)({
  cursor: 'pointer',
  padding: "4px 10px",
  display: 'flex',
  alignItems: 'center',
  border: "1px solid black",
  borderRadius: 20,
  width: 'fit-content',
  fontSize: 10,
  marginTop: 'auto',
  ['svg']: {
    marginLeft: 5,
  }
})

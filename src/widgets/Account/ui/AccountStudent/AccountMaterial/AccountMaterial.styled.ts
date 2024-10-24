import {styled} from "shared/lib";
import {Box} from "@mui/system";

export const AccountMaterialRoot = styled(Box)({

})

export const AccountMaterialHeadText = styled(Box)({
  fontSize: "24px",
  fontWeight: 600,
  marginBottom: 15,
})

export const MaterialsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 15,
})

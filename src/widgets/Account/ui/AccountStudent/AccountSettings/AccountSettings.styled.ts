import {styled} from "shared/lib";
import {Box, Stack} from "@mui/system";

export const AccountSettingsRoot = styled(Box)({})

export const AccountSettingsHeadText = styled(Box)({
  fontSize: "24px",
  fontWeight: 600,
  marginBottom: 15,
})

export const AccountSettingsContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '240px 1fr',
  gap: 50,
})

export const AccountSettingsContainerRows = styled(Stack)({})

interface AccountSettingsRowProps {
  $select: boolean
}

export const AccountSettingsRow = styled(Box)<AccountSettingsRowProps>(({$select}) => ({
  height: 35,
  background: $select ? '#756EDE' :  'white',
  borderRadius: 10,
  fontSize: 16,
  fontWeight: 500,
  color: $select ? 'white' : 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const AccountSettingsContent = styled(Box)({})

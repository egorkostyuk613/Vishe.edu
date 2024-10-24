import {AccountMaterialHeadText, AccountMaterialRoot, MaterialsContainer} from "./AccountMaterial.styled";
import {Material} from "./Material";

export const AccountMaterial = () => {
  return <AccountMaterialRoot>
    <AccountMaterialHeadText>Учебные материалы</AccountMaterialHeadText>
    <MaterialsContainer>
      <Material />
      <Material />
      <Material />
      <Material />
      <Material />
      <Material />
      <Material />
      <Material />
      <Material />
    </MaterialsContainer>
  </AccountMaterialRoot>
}

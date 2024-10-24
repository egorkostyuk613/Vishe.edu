import {ListContainer, ListText, TarifRoot, TarifTitle, VioletText} from "./TarifRegister.styled";
import {Button} from "shared/ui";
import {registerModel} from "../../model/Register.model";

type TarifProps = {
  name: string,
  list: string[],
  price: string
}

export const TarifRegister = ({ name, list, price }:TarifProps) => {

  return <TarifRoot>
    <TarifTitle>{name}</TarifTitle>
    <ListContainer>
      {list.map((text) => (<ListText>{text}</ListText>))}
    </ListContainer>
      <VioletText>{price}₽</VioletText>
      <Button margin="auto" onClick={registerModel.setPage}>Записаться</Button>
  </TarifRoot>
}

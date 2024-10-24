import {ListContainer, ListText, TarifRoot, TarifTitle, VioletText} from "./Tarif.styled";
import {Button} from "shared/ui";

type TarifProps = {
  name: string,
  list: string[],
  price: string
}

export const Tarif = ({ name, list, price }:TarifProps) => {

  return <TarifRoot>
    <TarifTitle>{name}</TarifTitle>
    <ListContainer>
      {list.map((text) => (<ListText>{text}</ListText>))}
    </ListContainer>
      <VioletText>{price}₽</VioletText>
      <Button margin="auto">Записаться</Button>
  </TarifRoot>
}

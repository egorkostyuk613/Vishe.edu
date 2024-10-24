import {ButtonImage, MainText, NewContainer} from "./New.styled";
import arrow from './arrow.png'
import {Dialog} from "shared/ui/Dialog/Dialog";
import { useState} from "react";
import {DialogNew} from "widgets/News/New/DialogNew/DialogNew";

type NewProps = {
  text: string,
  color: string
}

export const New = ({text, color}: NewProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open)
  }
  return <NewContainer $back={color} onClick={handleClose}>
    <MainText>{text}</MainText>
    <ButtonImage src={arrow}/>
    <DialogNew open={open} onClose={handleClose}/>
  </NewContainer>
}

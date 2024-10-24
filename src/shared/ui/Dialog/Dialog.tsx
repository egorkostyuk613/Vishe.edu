import {Content, DialogRoot} from "shared/ui/Dialog/Dialog.styled";
import { ReactElement } from "react";

type DialogProps = {
  open: boolean;
  onClose: any;
  children?: ReactElement;
};

export const Dialog = ({open, onClose, children}: DialogProps) => {
  return <DialogRoot open={open} onClose={onClose}>
    <Content onClick={(e) => e.stopPropagation()}>
      { children }
    </Content>
  </DialogRoot>
}

import {Dialog} from "shared/ui/Dialog/Dialog";
import {
  DialogButtons,
  DialogNewContent,
  DialogNewContentText,
  DialogNewMainText
} from "widgets/News/New/DialogNew/DialogNew.styled";
import {Stack} from "@mui/system";
import {Button} from "shared/ui";

export const DialogNew = ({open ,onClose}: any) => {
  return <Dialog open={open} onClose={(e: any) => {
    e.stopPropagation();
    onClose()
  }}>
      <DialogNewContent>
        <Stack spacing={35 / 8}>
          <DialogNewContentText>Вебинар: Культурные Особенности Взаимодействия в Китае</DialogNewContentText>
          <DialogNewMainText>Присоединяйтесь к нашему бесплатному вебинару, посвященному культурным особенностям взаимодействия в Китае. Узнайте, как культурные различия влияют на общение и как правильно вести себя в различных ситуациях, чтобы наладить успешные деловые и личные связи. Ведущий вебинара – эксперт по китайской культуре с многолетним опытом работы в Китае.</DialogNewMainText>
        </Stack>
        <DialogButtons>
          <Button onClick={onClose} variant="outlinedv3">
            назад
          </Button>
        </DialogButtons>
      </DialogNewContent>
  </Dialog>
}

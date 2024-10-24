import {
  BottomContainer,
  DarkText,
  FooterRoot,
  LeftContainer,
  MainText,
  UnderlineText
} from "widgets/Footer/Footer.styled";
import {Stack} from "@mui/system";
import {Button} from "shared/ui";

export const Footer = () => {
  return <FooterRoot>
    <LeftContainer>
      <Stack spacing={10 / 8}>
        <MainText>ИП Фадеева Ирина Евгеньевна </MainText>
        <MainText>ИНН: 753402600491</MainText>
        <MainText>г.Москва</MainText>
      </Stack>
      <DarkText>© 2024</DarkText>
    </LeftContainer>
    <BottomContainer>
      <UnderlineText><a href='https://drive.google.com/file/d/1JvPIMdxvpEL_Tgv8NTYPFeXSKJbb-G82/view?usp=drivesdk' target="_blank">Политика конфидециальности</a></UnderlineText>
      <UnderlineText><a href='https://drive.google.com/file/d/1rwpdptoKHD8ZwVag6kVaeXMpWr1oQix4' target="_blank">Договор оферты</a></UnderlineText>
      <Button variant="outlined">Вернуться в начало сайта</Button>
    </BottomContainer>
  </FooterRoot>
}

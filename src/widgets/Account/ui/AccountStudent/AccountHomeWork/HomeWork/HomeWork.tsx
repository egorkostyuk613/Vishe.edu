import {
  BlackButton, HomeWorkContent, HomeWorkContentLeft, HomeWorkRow, HomeWorkTable,
  HomeWorkText,
  HomeWorkWrapper,
  PurpleButton,
  SilverButton,
  SoloHomeWork
} from "./HomeWork.styled";
import { AccountHwTitle } from "../AccountHomeWork.styled";
import { Box } from "@mui/system";
import {SendHomeWork} from "./SendHomeWork";
import {Link} from "react-router-dom";

export const HomeWork = () => {
  return <HomeWorkWrapper>
    <AccountHwTitle>Домашние задания</AccountHwTitle>
    <SoloHomeWork>
      <HomeWorkText>Домашняя работа</HomeWorkText>
      <Box display="flex">
        <PurpleButton>Открыть</PurpleButton>
        <SilverButton>Скачать</SilverButton>
      </Box>
    </SoloHomeWork>
    <Link to="/account/homeWork/bla/blaaa">
      <BlackButton>Добавить ответ на задание</BlackButton>
    </Link>

    <AccountHwTitle>Состояние ответа</AccountHwTitle>
    <HomeWorkTable>
      <HomeWorkRow>
        <HomeWorkContentLeft>Номер попытки</HomeWorkContentLeft>
        <HomeWorkContent>Попытка 1</HomeWorkContent>
      </HomeWorkRow>
      <HomeWorkRow>
        <HomeWorkContentLeft>Состояние ответа на задание</HomeWorkContentLeft>
        <HomeWorkContent>Ответы на задание еще не представлены</HomeWorkContent>
      </HomeWorkRow>
      <HomeWorkRow>
        <HomeWorkContentLeft>Состояние оценивания</HomeWorkContentLeft>
        <HomeWorkContent>Не оценено</HomeWorkContent>
      </HomeWorkRow>
      <HomeWorkRow>
        <HomeWorkContentLeft>Оставшееся время</HomeWorkContentLeft>
        <HomeWorkContent>2 дн. 6 час. осталось</HomeWorkContent>
      </HomeWorkRow>
    </HomeWorkTable>
  </HomeWorkWrapper>
}

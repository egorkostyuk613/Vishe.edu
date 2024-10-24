import {
  AccountDayText,
  AccountMainInputs,
  AccountMainRoot, AccountMainWrraper,
  AccountTable,
  AccountTableColumn,
  AccountTableMain, AccountTableRow, AccountTableStackStyled, AccountTableText, AccountTime,
  InputStyled, LessonsWrapper
} from "./AccountMain.styled";
import {AccountHeadText, InputAccountContainer} from "../../Account.styled";
import {Stack} from "@mui/system";
import {getDays} from "./helpers";
import {Lesson} from "./Lesson";

export const AccountMain = () => {
  return <AccountMainRoot>
    <AccountMainWrraper>
    <AccountMainInputs>
      <AccountHeadText>Изменить информацию</AccountHeadText>
      <Stack spacing={10 / 8} mt={25 / 8}>
        <InputAccountContainer slots={{
          input: InputStyled
        }} placeholder="Имя"/>
        <InputAccountContainer slots={{
          input: InputStyled
        }} placeholder="Фамилия"/>
        <InputAccountContainer slots={{
          input: InputStyled
        }} placeholder="Телефон"/>
        <InputAccountContainer slots={{
          input: InputStyled
        }} placeholder="Электронная почта"/>
        <InputAccountContainer slots={{
          input: InputStyled
        }} placeholder="Пароль"/>
      </Stack>
    </AccountMainInputs>
    <AccountTableMain>
      <AccountHeadText>Ближайшие занятия</AccountHeadText>
      <AccountTable>
        {getDays().map((days, idx) => (<AccountTableColumn key={idx}>
          <AccountDayText key={days} $select={idx === 1} >{days}</AccountDayText>
          <AccountTableStackStyled mt={12 / 8} spacing={10 / 8}>
            <AccountTableRow>
              <AccountTime>14:00</AccountTime>
              <AccountTableText>Лукьянова Ж</AccountTableText>
            </AccountTableRow>
          </AccountTableStackStyled>
        </AccountTableColumn>))}
      </AccountTable>
    </AccountTableMain>
    </AccountMainWrraper>
    <LessonsWrapper>
      <AccountHeadText>Запланированные</AccountHeadText>
      <Stack mt={20 / 8} spacing={20 / 8}>
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </Stack>
    </LessonsWrapper>
  </AccountMainRoot>
}

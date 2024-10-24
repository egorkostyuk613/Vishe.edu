import {Link, Outlet, useLocation} from "react-router-dom";

import {AccountStudentContainer, AccountStydentRoot} from "./AccountStudent.styled";
import {AccountContainer, AccountMenu, AccountMenuText} from "../Account.styled";


export const AccountStudent = () => {
  const location: any = useLocation();

  return <AccountStydentRoot>
    <AccountContainer>
      <AccountMenu>
          <Link to="/account/schedule">
            <AccountMenuText $background={location.pathname === '/account/schedule'}>Расписание</AccountMenuText>
          </Link>
          <Link to="/account/homeWork">
          <AccountMenuText $background={location.pathname.startsWith('/account/homeWork')}>Домашние задания</AccountMenuText>
          </Link>
          <Link to="/account/courses">
            <AccountMenuText $background={location.pathname === '/account/courses'}>Курсы</AccountMenuText>
          </Link>
          <Link to="/account/materials">
            <AccountMenuText $background={location.pathname === '/account/materials'}>Учебные материалы</AccountMenuText>
          </Link>
          <Link to="/account/cards">
            <AccountMenuText $background={location.pathname === '/account/cards'}>Карточки</AccountMenuText>
          </Link>
          <Link to="/account/settings">
            <AccountMenuText $background={location.pathname === '/account/settings'}>Настройки</AccountMenuText>
          </Link>
      </AccountMenu>
      <AccountStudentContainer>
        <Outlet />
      </AccountStudentContainer>
    </AccountContainer>
  </AccountStydentRoot>
}

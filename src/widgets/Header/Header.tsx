import {HeaderCenterText, HeaderLinks, HeaderMainImage, HeaderRoot, StyledLink} from "widgets/Header/Header.styled";
import {Button} from "shared/ui";
import logo from "./logo.png"
import {Link, useLocation} from "react-router-dom";
import {loginModel} from "../Login";
import {observer} from "mobx-react";

export const Header = observer(() => {
  const location: any = useLocation();


  return <HeaderRoot>
    <Link to="/">
    <HeaderMainImage src={logo}/>
    </Link>
    <HeaderCenterText>
      <HeaderLinks to="/about" $select={location.pathname === "/about"}>О нас</HeaderLinks>
      <HeaderLinks to="/teacher" $select={location.pathname === "/teacher"}>Преподаватели</HeaderLinks>
      <HeaderLinks to="/tariffs" $select={location.pathname === "/tariffs"}>Тарифы</HeaderLinks>
      <HeaderLinks to="/news" $select={location.pathname === "/news"}>Новости</HeaderLinks>
      <HeaderLinks to="/" $select={location.pathname === "/faq"}>FAQ</HeaderLinks>
    </HeaderCenterText>
    <StyledLink to={loginModel.login ? "/account"  : "/login"}>
      <Button variant='dark' height={50} mt={10 / 8}>Личный кабинет</Button>
    </StyledLink>
  </HeaderRoot>
})

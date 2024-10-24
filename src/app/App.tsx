import "./styles/index.css";
import {AppContainer} from "./styled";
import {AppRouter} from "./providers/router";
import {useLocation} from "react-router-dom";
import {observer} from "mobx-react";
import {useCheckAuth} from "../entities/auth/model";

export const App = observer(() => {
  const location = useLocation();
  const {isLoading} = useCheckAuth();

  console.log(isLoading)

  return (
    <AppContainer className="app" $src={location.pathname === "/"} $background={location.pathname === "/login" || location.pathname === "/register" ? "#FFFFFF" : "#C1C6E0"}>
      {isLoading ? null : <AppRouter />}
      
    </AppContainer>
  );
});

import {Fragment, ReactElement} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {observer} from "mobx-react";
import {authModel} from "entities/auth/model/Auth.model";

export const PrivatRoute = observer(({children}: {children: ReactElement}) => {
  const location = useLocation();

  if (authModel.isLoading) {
    return <div>Загрузка...</div>; // Индикатор загрузки
  }

  if(!authModel.user){
    return <Navigate to="/login" state={{from: location}}/>
  }

  return <Fragment>{children}</Fragment>
})

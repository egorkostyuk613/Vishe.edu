import {Fragment} from "react";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer/Footer";
import {Login} from "widgets/Login";

export const LoginPage = () => {
  return <Fragment>
    <Header />
    <Login />
    <Footer />
  </Fragment>
}

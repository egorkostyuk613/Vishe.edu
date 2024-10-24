import {Fragment} from "react";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer/Footer";
import {Register} from "widgets/Register/Register";

export const RegisterPage = () => {
  return <Fragment>
    <Header />
    <Register />
    <Footer />
  </Fragment>
}

import {Fragment} from "react";
import {Header} from "../../widgets/Header";
import {Footer} from "../../widgets/Footer/Footer";
import {Account} from "../../widgets/Account/ui";

export const AccountPage = () => {
  return <Fragment>
    <Header />
    <Account />
    <Footer />
  </Fragment>
}

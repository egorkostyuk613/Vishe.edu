import {Fragment} from "react";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer/Footer";
import {Tariffs} from "widgets/Tariffs";

export const TariffsPage = () => {
  return <Fragment>
    <Header />
    <Tariffs />
    <Footer />
  </Fragment>
}

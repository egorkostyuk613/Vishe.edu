import {Fragment} from "react";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer/Footer";
import {News} from "widgets/News/News";

export const NewsPage = () => {
  return <Fragment>
    <Header />
    <News />
    <Footer />
  </Fragment>
}

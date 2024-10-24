import {Fragment} from "react";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer/Footer";
import {AboutUs} from "widgets/AboutUs/AboutUs";

export const AboutPage = () => {
  return <Fragment>
    <Header />
    <AboutUs />
    <Footer />
  </Fragment>;
};

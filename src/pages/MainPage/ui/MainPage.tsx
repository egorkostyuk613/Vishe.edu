import {Fragment} from "react";
import {Header} from "widgets/Header";
import {Slide} from "widgets/Slide/Slide";
import {Why} from "widgets/Why";
import {Slider} from "widgets/Slider";
import {StartNow} from "widgets/StartNow/StartNow";
import {Footer} from "widgets/Footer/Footer";

export const MainPage = () => {
  return <Fragment>
    <Header />
    <Slide />
    <Why />
    <Slider />
    <StartNow />
    <Footer />
  </Fragment>;
};

import {Fragment} from "react";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer/Footer";
import {Teachers} from "widgets/Teachers/Teachers";

export const TeacherPage = () => {
  return <Fragment>
    <Header />
    <Teachers />
    <Footer/>
  </Fragment>
}

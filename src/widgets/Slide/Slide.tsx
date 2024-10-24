import {SlideMaintext, SlideRoot, SlideText} from "widgets/Slide/Slide.styled";
import {Button} from "shared/ui";

export const Slide = () => {
  return <SlideRoot>
    <SlideText>Раскройте свои <br/> возможности на<br/> максимум.</SlideText>
    <SlideMaintext>Практикуйте свои знания увлекательно, с помощью<br/> интерактивных упражнений!</SlideMaintext>
    <Button variant="outlinedv2" mt={35 / 8}>Китайский</Button>
  </SlideRoot>
}

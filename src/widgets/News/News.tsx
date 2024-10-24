import {NewsContainer, NewsTitle, NewsWrapper} from "widgets/News/News.styled";
import {New} from "widgets/News/New";
import {DialogNew} from "widgets/News/New/DialogNew/DialogNew";

const NewsArr = [
  {
    text: 'Вебинар: Культурные Особенности Взаимодействия в Китае',
    color: '#415A77'
  },
  {
    text: 'Вебинар: Культурные Особенности Взаимодействия в Китае',
    color: '#889EA9'
  },
  {
    text: 'Вебинар: Культурные Особенности Взаимодействия в Китае',
    color: '#778DA9'
  },
  {
    text: 'Вебинар: Культурные Особенности Взаимодействия в Китае',
    color: '#778DA9'
  },
  {
    text: 'Вебинар: Культурные Особенности Взаимодействия в Китае',
    color: '#5D737E'
  },
  {
    text: 'Вебинар: Культурные Особенности Взаимодействия в Китае',
    color: '#415A77'
  },
]

export const News = () => {
  return <NewsContainer>
    <NewsTitle>Новости</NewsTitle>
    <NewsWrapper>
      {NewsArr.map((value) => (<New text={value.text} color={value.color}/>))}
    </NewsWrapper>
  </NewsContainer>
}

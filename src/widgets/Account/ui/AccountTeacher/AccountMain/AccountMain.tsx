import {
  AccountDayText,
  AccountMainInputs,
  AccountMainRoot, AccountMainWrraper,
  AccountTable,
  AccountTableColumn,
  AccountTableMain, AccountTableRow, AccountTableStackStyled, AccountTableText, AccountTime,
  InputStyled, LessonsWrapper
} from "./AccountMain.styled";
import {AccountHeadText, InputAccountContainer} from "../../Account.styled";
import {Stack} from "@mui/system";
import {getDays} from "./helpers";
import {Lesson} from "./Lesson";
import axios from "axios";

export const AccountMain = () => {
  const payCourse = async () => {
    await axios.post('http://localhost:4000/api/course/pay/670ffdab493b2af435ef50bd', {
      "paySuccess":"CONFIRM",
      "dateTill":"1729111397751"/* ,
      "teacherId":"111" */
    }, {
      withCredentials: true
    })
  }

  const buyCourse = async () => {
    await axios.post('http://localhost:4000/api/course/buy', {
      paymentCode: "ZTgzNWUwNmVhNGRmMzNiNmUwZTIxN2YzYWM2NzE3NGM5ZjEyOGNlN2FkZDZmZGE4MGNjYmQ4NTU4NTNiN2YyYTg0YTcxYjA1ZTI5NzRkMzdjYTY5MTJlMjE4YjRlOTA4OWZjNWUyY2RlNjhkZTkzMTYzMGQzMDU2NDUzYzRhMjU="
    }, {
      withCredentials: true
    })
  }

  const setSc = async () => {
    await axios.post('http://localhost:4000/api/course/setSchedule', {
      "hours" : {
        "mon": [
          {
            "startTime": "T08:00:00.000+00:00",
            "endTime": "T09:00:00.000+00:00"
          },
          {
            "startTime": "T09:00:00.000+00:00",
            "endTime": "T10:00:00.000+00:00"
          },
          {
            "startTime": "T22:00:00.000+00:00",
            "endTime": "T23:00:00.000+00:00"
          }
        ],
        "tue": [
          {
            "startTime": "T08:00:00.000+00:00",
            "endTime": "T09:00:00.000+00:00"
          },
          {
            "startTime": "T09:00:00.000+00:00",
            "endTime": "T10:00:00.000+00:00"
          },
          {
            "startTime": "T22:00:00.000+00:00",
            "endTime": "T23:00:00.000+00:00"
          }
        ],
        "wed": [
          {
            "startTime": "T08:00:00.000+00:00",
            "endTime": "T09:00:00.000+00:00"
          },
          {
            "startTime": "T09:00:00.000+00:00",
            "endTime": "T10:00:00.000+00:00"
          },
          {
            "startTime": "T22:00:00.000+00:00",
            "endTime": "T23:00:00.000+00:00"
          }
        ],
        "thu":[
          {
            "startTime": "T08:00:00.000+00:00",
            "endTime": "T09:00:00.000+00:00"
          },
          {
            "startTime": "T09:00:00.000+00:00",
            "endTime": "T10:00:00.000+00:00"
          },
          {
            "startTime": "T22:00:00.000+00:00",
            "endTime": "T23:00:00.000+00:00"
          }
        ],
        "fri":[
          {
            "startTime": "T08:00:00.000+00:00",
            "endTime": "T09:00:00.000+00:00"
          },
          {
            "startTime": "T09:00:00.000+00:00",
            "endTime": "T10:00:00.000+00:00"
          },
          {
            "startTime": "T22:00:00.000+00:00",
            "endTime": "T23:00:00.000+00:00"
          }
        ],
        "sat":[
          {
            "startTime": "T08:00:00.000+00:00",
            "endTime": "T09:00:00.000+00:00"
          },
          {
            "startTime": "T09:00:00.000+00:00",
            "endTime": "T10:00:00.000+00:00"
          },
          {
            "startTime": "T22:00:00.000+00:00",
            "endTime": "T23:00:00.000+00:00"
          }
        ],
        "sun":[
          {
            "startTime": "T08:00:00.000+00:00",
            "endTime": "T09:00:00.000+00:00"
          },
          {
            "startTime": "T09:00:00.000+00:00",
            "endTime": "T10:00:00.000+00:00"
          },
          {
            "startTime": "T22:00:00.000+00:00",
            "endTime": "T23:00:00.000+00:00"
          }
        ]}
    }, {
      withCredentials: true
    })
  }

  return <AccountMainRoot>
    <AccountMainWrraper>
      <AccountMainInputs>
        <button onClick={payCourse}>1</button>
        <button onClick={buyCourse}>2</button>
        <button onClick={setSc}>3</button>
        <AccountHeadText>Изменить информацию</AccountHeadText>
        <Stack spacing={10 / 8} mt={25 / 8}>
          <InputAccountContainer slots={{
            input: InputStyled
          }} placeholder="Имя"/>
          <InputAccountContainer slots={{
            input: InputStyled
          }} placeholder="Фамилия"/>
          <InputAccountContainer slots={{
            input: InputStyled
          }} placeholder="Телефон"/>
          <InputAccountContainer slots={{
            input: InputStyled
          }} placeholder="Электронная почта"/>
          <InputAccountContainer slots={{
            input: InputStyled
          }} placeholder="Пароль"/>
        </Stack>
      </AccountMainInputs>
      <AccountTableMain>
      <AccountHeadText>Ближайшие занятия</AccountHeadText>
      <AccountTable>
        {getDays().map((days, idx) => (<AccountTableColumn key={idx}>
          <AccountDayText key={days} $select={idx === 1} >{days}</AccountDayText>
          <AccountTableStackStyled mt={12 / 8} spacing={10 / 8}>
            <AccountTableRow>
              <AccountTime>14:00</AccountTime>
              <AccountTableText>Лукьянова Ж</AccountTableText>
            </AccountTableRow>
          </AccountTableStackStyled>
        </AccountTableColumn>))}
      </AccountTable>
    </AccountTableMain>
    </AccountMainWrraper>
    <LessonsWrapper>
      <AccountHeadText>Запланированные</AccountHeadText>
      <Stack mt={20 / 8} spacing={20 / 8}>
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </Stack>
    </LessonsWrapper>
  </AccountMainRoot>
}

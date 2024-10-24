import {AccountButton, AccountHwCount, AccountPageCount, HwContainer, HwPill, HwTitleName} from "./hw.styled";
import {Box} from "@mui/system";
import {Link} from "react-router-dom";

export const Hw = () => {
  return <HwContainer>
    <Box>
      <HwTitleName>Курс: Студенческая Площадка</HwTitleName>
      <HwPill>Ирина Карасева</HwPill>
    </Box>
    <Box display="inherit" justifyContent="end">
      <Box display="flex" marginLeft='auto'>
        <AccountPageCount>27 стр</AccountPageCount>
        <AccountHwCount>Урок 3</AccountHwCount>
      </Box>
      <Link to="/account/homeWork/bla">
        <AccountButton>
          Открыть
        </AccountButton>
      </Link>
    </Box>
  </HwContainer>
}

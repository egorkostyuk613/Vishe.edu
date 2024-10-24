import styled from "styled-components";

export const CenterSliderContainer = styled.div`
    margin-top: 210px;
    .swiper {
        padding: 0px 10px;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
    }
    
    .swiper-pagination {
        display: none;
    }
    
    .swiper-button-next {
        background: #FFFEFD1A;
        width: 53px;
        height: 55px;
        border-radius: 20px;
        border: 1px solid #FFFFFF;
        position: absolute;
        top: 155px;
        right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        cursor: pointer;
    }
    
    .swiper-button-prev {
        background: #FFFEFD1A;
        width: 53px;
        height: 55px;
        border-radius: 20px;
        border: 1px solid #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 155px;
        left: 10px;
        z-index: 10;
        cursor: pointer;
    }
    
    .swiper-button-prev::after {
        content: "<";
        color: white!important;
        font-size: 35px!important;
        height: 52px;
    }

    .swiper-button-next::after {
        content: ">";
        color: white!important;
        font-size: 35px!important;
        height: 52px;
    }
`

export const ImgContainer = styled.img`
    width: 310px;
    height: 370px;
`

export const CenterSliderText = styled.div`
    font-size: 65px;
    line-height: 65px;
    color: black;
    font-weight: 600;
`;

export const CenterSliderWrapper = styled.div`
    margin-bottom: 135px;
`;

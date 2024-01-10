import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../images/banner_logo.png';
import airplane from '../images/banner_airplane.png';
import backimg from '../images/slide2_backimg.png';
import label_sun from '../images/label/sun.svg';
import label_jupiter from '../images/label/jupiter.svg';
import label_comet from '../images/label/comet.svg';
import label_earth from '../images/label/earth.svg';
import label_moon from '../images/label/moon.svg';
import label_saturn from '../images/label/saturn.svg';
import label_whitehole from '../images/label/whitehole.svg';
import label_blackhole from '../images/label/blackhole.svg';
import icon_sun from '../images/3dicon/sun.png';
import icon_jupiter from '../images/3dicon/jupiter.png';
import icon_comet from '../images/3dicon/comet.png';
import icon_earth from '../images/3dicon/earth.png';
import icon_moon from '../images/3dicon/moon.png';
import icon_saturn from '../images/3dicon/saturn.png';
import icon_whitehole from '../images/3dicon/whitehole.png';
import icon_blackhole from '../images/3dicon/blackhole.png';

let category1 = [
    {id: 1, label: label_sun, img: icon_sun, title: '태양형 여행자', detail: '다양한 현지 맛집을 찾아다니는 식도락 여행을 선호하는 여행자'},
    {id: 2, label: label_jupiter, img: icon_jupiter, title: '목성형 여행자', detail: '모든 상황에 대비해 꼼꼼히 짐을 챙기는 여행자'},
    {id: 3, label: label_comet, img: icon_comet, title: '혜성형 여행자', detail: '도보 여행을 선호하며 자유롭게 이곳저곳 관광하는 것을 즐기는 여행자'},
    {id: 4, label: label_earth, img: icon_earth, title: '지구형 여행자', detail: '많은 사람들과의 만남을 즐기고 다양한 경험을 선호하는 여행자'},
];
let category2 = [
    {id: 1, label: label_moon, img: icon_moon, title: '달형 여행자', detail: '안전을 가장 중요시하기 때문에 돌발 상황이 적은 안정적인 여행을 추구하는 여행자'},
    {id: 2, label: label_saturn, img: icon_saturn, title: '토성형 여행자', detail: '바쁜 일상에서 벗어나 경치를 구경하며 예쁜 사진을 찍는 것을 즐기는 여유로운 여행자'},
    {id: 3, label: label_whitehole, img: icon_whitehole, title: '화이트홀형 여행자', detail: '꼼꼼한 계획 세우기와 철저한 정보 수집으로 가이드 역할에 최적화된 여행자'},
    {id: 4, label: label_blackhole, img: icon_blackhole, title: '블랙홀형 여행자', detail: '동행자의 의견과 현지 분위기를 잘 수용해서 누구와도 만족스러운 여행을 즐길 수 있는 만능형 여행자'},
];

const Banner = () => {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnFocus: true,
        pauseOnDotsHover: true,
    };

    return (
    <Wrapper>
        <Slider {...settings}>
            <Slide1>
                <Text>
                    나랑 딱 맞는 여행 정보, 어디서 찾아?<br/>
                    <Answer>정답은 <Logo src={logo}/></Answer>
                </Text>
                <Airplane src={airplane}/>
            </Slide1>
            <Slide2>
                <Backimg src={backimg}/>
                <Title><SmallLogo src={logo}/>여행 유형 알아보기</Title>
                <Container>
                    {category1 && category1.map(category => (
                        <Categorydiv key={category.id}>
                            <Label src={category.label}/>
                            <Icon src={category.img}/>
                            <Name>{category.title}</Name>
                            <Detail>{category.detail}</Detail>
                        </Categorydiv>
                    ))}
                </Container>
            </Slide2>
            <Slide3>
            <Backimg src={backimg}/>
                <Title><SmallLogo src={logo}/>여행 유형 알아보기</Title>
                <Container>
                    {category2 && category2.map(category => (
                        <Categorydiv key={category.id}>
                            <Label src={category.label}/>
                            <Icon src={category.img}/>
                            <Name>{category.title}</Name>
                            <Detail>{category.detail}</Detail>
                        </Categorydiv>
                    ))}
                </Container>
            </Slide3>
        </Slider>
    </Wrapper>
    );
};

export default Banner;

const Wrapper = styled.div`
  max-width: 100%;
  .slick-dots {
    bottom: 50px;
  }
  .slick-slide {
    width: 100%;
    max-width: 100%;
  }
  .slick-slider {
    width: 100%;
    max-width: 100vw;
    overflow: hidden !important;
  }
`;

const Slide1 = styled.div`
  width: 100%;
  height: 55vh;
  flex-shrink: 0;
  background: #CCDDFF;
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding-right: 8vw;
  flex-direction: row;
  margin: 0 auto;
`;
const Text = styled.div`
    color: #262626;
    font-size: 3vw;
    font-weight: 600;
`
const Answer = styled.div`
    display: flex;
    margin-top: 20px;
`
const Logo = styled.img`
    width: 20vw;
    margin-left: 20px;
`
const Airplane = styled.img`
    margin-left: 20vw;
`

const Slide2 = styled.div`
  background: #A8C6FF;
  width: 100%;
  height: 55vh;
  overflow: hidden;
  z-index: -10;
`;
const Backimg = styled.img`
    width: 100%;
    height: 55vh;
`
const Title = styled.div`
    position: relative;
    z-index: 1;
    margin-top: -50vh;
    margin-left: 50px;
    display: flex;
    color: #262626;
    font-size: 1.5vw;
    font-weight: 600;
    line-height: 3vw;
`
const SmallLogo = styled.img`
    width: 13vw;
    height: 3vw;
    margin-right: 10px;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: 22vw 22vw 22vw 22vw;
    justify-content: space-between;
    padding: 0 50px 0 50px;
`
const Categorydiv = styled.div`
    width: 20vw;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const Label = styled.img`
    margin: auto;
`
const Icon = styled.img`
    margin: auto;
    margin-top: 20px;
    height: 7vw;
`
const Name = styled.div`
    color: #272727;
    margin-top: 20px;
    font-size: 1.2vw;
    font-weight: 700;
`
const Detail = styled.div`
    margin-top: 20px;
    color: #272727;
    text-align: center;
    font-size: 1vw;
    font-weight: 500;
`

const Slide3 = styled.div`
  background: #87B0FF;
  position: relative;
  width: 100%;
  height: 55vh;
  z-index: 0;
  width: 100%;
  overflow: hidden;
  max-width: 100%;
`;
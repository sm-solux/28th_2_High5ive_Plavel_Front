import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import MyBar from '../../components/MyBar';
import label_sun from '../../images/label/sun.svg';
import label_jupiter from '../../images/label/jupiter.svg';
import label_comet from '../../images/label/comet.svg';
import label_earth from '../../images/label/earth.svg';
import label_moon from '../../images/label/moon.svg';
import label_saturn from '../../images/label/saturn.svg';
import label_whitehole from '../../images/label/whitehole.svg';
import label_blackhole from '../../images/label/blackhole.svg';
import icon_sun from '../../images/3dicon/sun.png';
import icon_jupiter from '../../images/3dicon/jupiter.png';
import icon_comet from '../../images/3dicon_test/comet_stars.png';
import icon_earth from '../../images/3dicon/earth.png';
import icon_moon from '../../images/3dicon/moon.png';
import icon_saturn from '../../images/3dicon/saturn.png';
import icon_whitehole from '../../images/3dicon/whitehole.png';
import icon_blackhole from '../../images/3dicon/blackhole.png';

const Body = styled.div`
    margin-top: 10vh;
    padding-top: 55px;
    padding-left: 330px;
`

const infoList = [
    {
        id:0,
        label: label_blackhole,
        img: icon_blackhole,
        sub_title: "무엇이든 OK!",
        detail: "동행자의 의견과 현지 분위기를 잘 수용해서 누구와도 만족스러운 여행을 즐길 수 있는 만능형 여행자이시군요!",
        positive: 1,
        negative: 2
    },
    {
        id:1,
        label: label_whitehole,
        img: icon_whitehole,
        sub_title: "계획 자판기",
        detail: "꼼꼼한 계획 세우기와 철저한 정보 수집으로 가이드 역할에 최적화된 여행자이시군요!",
        positive: 6,
        negative: 3
    },
    {
        id: 2,
        label: label_earth,
        img: icon_earth,
        sub_title: "호기심 대마왕",
        detail: "많은 사람들과의 만남을 즐기고 다양한 경험을 선호하는 여행자이시군요!",
        positive: 4,
        negative: 7
    },
    {
        id: 3,
        label: label_saturn,
        img: icon_saturn,
        sub_title: "힐링 최고! 감성적인 사진가",
        detail: "바쁜 일상에서 벗어나 경치를 구경하며 예쁜 사진을 찍는 것을 즐기는 여유로운 여행자이시군요!",
        positive: 5,
        negative: 1
    },
    {
        id: 4,
        label: label_sun,
        img: icon_sun,
        sub_title: "맛집 탐방가",
        detail: "다양한 현지 맛집을 찾아다니는 식도락 여행을 선호하는 여행자이시군요!",
        positive: 2,
        negative: 5
    },
    {
        id: 5,
        label: label_comet,
        img: icon_comet,
        sub_title: "자유분방! 어디로든",
        detail: "도보 여행을 선호하며 자유롭게 이곳저곳 관광하는 것을 즐기는 여행자이시군요!",
        positive: 0,
        negative: 4
    },
    {
        id: 6,
        label: label_jupiter,
        img: icon_jupiter,
        sub_title: "여행계의 보부상",
        detail: "모든 상황에 대비해 꼼꼼히 짐을 챙기는 여행자이시군요!",
        positive: 1,
        negative: 5
    },
    {
        id: 7,
        label: label_moon,
        img: icon_moon,
        sub_title: "안전제일",
        detail: "안전을 가장 중요시하기 때문에 돌발 상황이 적은 안정적인 여행을 추구하는 여행자이시군요!",
        positive: 1,
        negative: 2
    }
];

const List = [
    "블랙홀","화이트홀", "지구", "토성", "태양", "혜성", "목성", "달"
];

const MyResultPage = () => {
    let result = 5;

    /*const handleResult = () => {
        //백에서 결과 전달 받기
        axios.post('http://127.0.0.1:8000/mypage/my_test', 
        {
          result: result
        }, {headers:{'XSRF-Token':Cookies.get('csrftoken')}})
        .then(res => {
          alert('나의 여행 성향은!',result);
        })
        .catch(err => {
          console.error('나의 여행 성향을 받아올 수가 없습니다.', err);
        })
    };
    
    //이용자 이름 받아오기
    const handleName = () => {

    };*/

    const GotoTest = () => {
        window.location.href = '/test';
    };

    return (
        <>
        <TopBar/>
        <MyBar/>
        <Body>
            <Name>@@@님의 여행 성향</Name>
            <Box>
                <Image src={infoList[result].img}/>
                <Containter>
                    <Subtitle>{infoList[result].sub_title}</Subtitle>
                    <LabelContainer>
                        <Title>{List[result]}형 여행자</Title>
                        <LabelImage src={infoList[result].label} alt="레이블" />
                    </LabelContainer>
                    <Description>{infoList[result].detail}</Description>
                </Containter>
                <InfoContainer>
                    <Info>
                        <H5>나와 잘 맞는 여행자</H5>
                        <InfoImage 
                            src={infoList[infoList[result].positive].img} 
                        />
                        <div>{infoList[infoList[result].positive].sub_title}</div>
                        <H6>{List[infoList[result].positive]}형 여행자</H6>
                    </Info>
                    <Info>
                        <H5>나와 안 맞는 여행자</H5>
                        <InfoImage 
                            src={infoList[infoList[result].negative].img} 
                        />
                        <div>{infoList[infoList[result].negative].sub_title}</div>
                        <H6>{List[infoList[result].negative]}형 여행자</H6>
                    </Info>
                </InfoContainer>
            </Box>
            <ButtonContainer>
                <Button onClick={GotoTest}>
                    다시 검사하기
                </Button>
            </ButtonContainer>
        </Body>
        </>
    );
};

export default MyResultPage;

const Name = styled.h2`
    margin: 60px 100px 0px 120px;
`;

const Box = styled.div`
    margin: 50px 100px 0px 100px;
    width: calc(65vw - 100px);
`
const Containter = styled.div`
    padding: 50px;

    background: #F5F5F5;
    border-radius: 30px;
`;

const Title = styled.h1`
    
`

const Subtitle = styled.div`
    font-size: 20px;
    margin-bottom: 0;
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LabelImage = styled.img`
    width: 130px;
    margin-left: 20px;
`;

const Description = styled.div`
    font-size: 20px;
    margin-top: 10px;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    justify-content: center; /* 가로 가운데 정렬 */
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    margin: 8% 13% 0 0;

    width: 17%;
`

const Info = styled.div`
    padding: 10px;
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H5 = styled.div`
    font-size: 20px;
    margin: 10px 0;
`;

const H6 = styled.h3`
    margin: 0;
`;

const InfoImage = styled.img`
    width: 60%;
    margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #6FA0FF;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 15px 35px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #5880cf;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;
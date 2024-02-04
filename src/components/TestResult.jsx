import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';
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
import icon_comet from '../images/3dicon_test/comet_stars.png';
import icon_earth from '../images/3dicon/earth.png';
import icon_moon from '../images/3dicon/moon.png';
import icon_saturn from '../images/3dicon/saturn.png';
import icon_whitehole from '../images/3dicon/whitehole.png';
import icon_blackhole from '../images/3dicon/blackhole.png';
import loading from '../images/3dicon_test/loading.png';
import rocket from '../images/3dicon_test/rocket.png';
import circle from '../images/3dicon_test/circle.png';
import circle2 from '../images/3dicon_test/circle2.png';
import circle3 from '../images/3dicon_test/circle3.png';
import circle4 from '../images/3dicon_test/circle4.png';

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

const TestResult = ({ result }) => {
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowResult(true);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const GotoHome = () => {
        window.location.href = '/home';
    }
    const GetResult = () => {
        return (
            <>
                <Circle src={circle}/>
                <Name>@@@님의 여행 성향</Name>
                <Circle2 src={circle2}/>
                <Circle3 src={circle3}/>
                <Circle4 src={circle4}/>
                <ParentContainer>
                    <FirstContainer>
                        <Image src={infoList[result].img} />
                    </FirstContainer>
                    <SecondContainer>
                        <SecondChild>
                            <SubTitle>{infoList[result].sub_title}</SubTitle>
                            <LabelContainer>
                                <Type>{List[result]}형 여행자</Type>
                                <LabelImage src={infoList[result].label} alt="레이블" />
                            </LabelContainer>
                            <Description>{infoList[result].detail}</Description>
                        </SecondChild>
                        <ThirdChild>
                            <InfoContainer>
                                <InfoType>나와 잘 맞는 여행자</InfoType>
                                <InfoImage src={infoList[infoList[result].positive].img} />
                                <InfoSubtitle>{infoList[infoList[result].positive].sub_title}</InfoSubtitle>
                                <InfoName>{List[infoList[result].positive]}형 여행자</InfoName>
                            </InfoContainer>
                            <InfoContainer>
                                <InfoType>나와 안 맞는 여행자</InfoType>
                                <InfoImage src={infoList[infoList[result].negative].img} />
                                <InfoSubtitle>{infoList[infoList[result].negative].sub_title}</InfoSubtitle>
                                <InfoName>{List[infoList[result].negative]}형 여행자</InfoName>
                            </InfoContainer>
                        </ThirdChild>
                    </SecondContainer>
                </ParentContainer>
                <ButtonContainer>
                    <Button onClick={GotoHome}> 
                        <Rocket src={rocket}/>
                        다양한 여행자를 만나러 가볼까?
                    </Button>
                </ButtonContainer>
            </>
        );
    }

    return (
        <div>
            {!showResult ? (
                <Loading>
                        <LoadImage src={loading}/>
                        <Load> 여행 성향을 분석중입니다.</Load>
                </Loading>
            ) : (
                <>
                    <GetResult />
                </>
            )}
        </div>
    );
};

export default TestResult;

const Loading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Load = styled.h3`
    margin-bottom: 10px;
    display: flex;
    color: white;
    font-size: 25px;
`;

const LoadImage = styled.img`

`;

const Circle = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 600px;
`;

const Circle2 = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;

const Circle3 = styled.img`
    position: absolute;
    bottom: 0;
    right: 1;
    left: 1;
`;

const Circle4 = styled.img`
    position: absolute;
    top: 0;
    right: 0;
`;

const Name = styled.h2`
    color: white;
    font-size: 30px;
    margin-bottom: 50px;
`;
const ParentContainer = styled.div`
    display: flex;
    color: white;

    z-index: 1;
`;

const FirstContainer = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SecondContainer = styled.div`
    flex: 2;
    margin-left: 10px;
`;

const Image = styled.img`
    width: 380px;
    margin-right: 100px;

    z-index: 1;
`;

const Type = styled.h1`
    margin-right: 10px;
    font-size: 40px;
`;

const SubTitle = styled.div`
    font-size: 30px;
    margin-bottom: 0;
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LabelImage = styled.img`
    width: 23%;
    z-index: 1;
`;

const Description = styled.div`
    margin-right: 5px;
    margin-left: 5px;
    font-size: 25px;
`;

const SecondChild = styled.div`
    padding: 30px;
    background: #39426A;
    border-radius: 10px;
`;

const ThirdChild = styled.div`
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    justify-content: center; /* 가로 가운데 정렬 */
`;

const InfoContainer = styled.div`
    padding: 10px;
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InfoType = styled.div`
    font-size: 18px;

    margin: 0;
    margin-bottom: 10px;
    margin-top: 10px;
`;

const InfoImage = styled.img`
    width: 100px;
    height: 100%;
`;

const InfoSubtitle = styled.div`
    font-size: 18px;

    margin: 0;
    margin-Bottom: 5px;
    margin-top: 10px;
`;

const InfoName = styled.div`
    font-weight: bold;
    font-size: 23px;
`;

const Rocket = styled.img`
    width: 20px;
    margin-right: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    border-radius: 30px;
    padding: 15px 20px;
    margin: 40px;
    border: none;
    
    color: white;
    background: #6063A5;
    font-size: 20px;

    display: flex;
    align-items: center;
    z-index: 1;

    &:hover {
        background-color: #4C5190;
    }
`;
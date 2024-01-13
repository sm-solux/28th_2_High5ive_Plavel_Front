import React, { useState } from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import profileimg from '../../images/dummyprofileimg.png';
import label_blackhole from '../../images/label/blackhole.svg';
import dummy1 from '../../images/dummy1.png';
import dummy2 from '../../images/dummy2.png';
import comment from '../../images/comment.svg';
import bookmark from '../../images/bookmark.svg';
import bookmark_on from '../../images/bookmark_on.svg';

const Body = styled.div`
    margin-top: 10vh;
    background-color: #E6EEFC;
    padding: 50px 100px 50px 100px;
    display: flex;
    justify-content: space-between;
    height: calc(90vh - 100px);
`
const DetailContainer = styled.div`
    width: calc(65vw - 100px);
`
const Detail = styled.div`
    background-color: white;
    //height: 140px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    margin-bottom: 20px;
    padding: 50px;
`
const FirstLine = styled.div`
    display: flex;
    align-items: center;
`
const SmallProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`
const ProfileDiv = styled.div`
    
`
const ProfName = styled.div`
    color: #262626;
    font-size: 17px;
    font-weight: 600;
`
const Date = styled.div`
    color: #A6A6A6;
    font-size: 13px;
    font-weight: 600;
`
const Title = styled.div`
    color: #262626;
    font-size: 30px;
    font-weight: 600;
    margin-top: 30px;
`
const Content = styled.div`
    color: #262626;
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;
`
const ImgLine = styled.div`
    display: flex;
    margin-top: 20px;
`
const Img = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 10px;
`
const CommentBMLine = styled.div`
    display: flex;
`
const CommentBMDiv = styled.div`
    display: flex;
    width: 50px;
    height: 20px;
    border-radius: 20px;
    border: 1.5px solid #afaeae;
    background: #FFF;
    padding: 10px 15px;
    margin-right: 10px;
    margin-top: 20px;
    cursor: pointer;

    img {
        width: 20px;
    }
`
const HowMany = styled.div`
    color: #7F7F7F;
    font-size: 18px;
    font-weight: 600;
    margin-left: 15px;
`

const InfoContainer = styled.div`
    width: calc(30vw - 100px);
`
const InfoBox = styled.div`
    position: fixed;
    top: calc(10vh + 50px);
    right: 70px;
    border-radius: 20px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    width: calc(30vw - 100px);
    padding: 30px;
`
const Text = styled.div`
    color: #262626;
    font-size: 20px;
    font-weight: 600;
`
const InfoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`
const ProfileImg = styled.img`
    width: 84px;
    height: 84px;
    border-radius: 50%;
    margin-right: 20px;
`
const MainInfo = styled.div`
`
const Age = styled.div`
    color: #B1B1B1;
    font-size: 15px;
    font-weight: 600;
`
const Name = styled.div`
    color: #262626;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
`
const Label = styled.img`
    
`
const BlueTxt = styled.div`
    color: #6695F1;
    font-size: 15px;
    font-weight: 600;
    padding: 0 20px;
`
const InfoTxt = styled.div`
    color: #262626;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 20px;
`

const DetailPage = () => {
    const [isBM, setIsBM] = useState(false);

    const handleBM = (e) => {
        setIsBM(isBM => !isBM);
        !isBM? alert("북마크에 저장되었습니다.") : alert("북마크가 취소되었습니다.");
    }
    return (
        <>
            <TopBar/>
            <Body>
                <DetailContainer>
                    <Detail>
                        <FirstLine>
                            <SmallProfileImg src={profileimg}/>
                            <ProfileDiv>
                                <ProfName>데미소다</ProfName>
                                <Date>24/01/05 21:43</Date>
                            </ProfileDiv>
                        </FirstLine>
                        <Title>제목이 이곳에</Title>
                        <Content>이번 여름 방학에 다녀왔는데 네덜란드 6-7월 날씨가 무슨 쌀쌀한 가을 같아서 너무 추웠음
                        반팔이랑 나시만 가져갔는데 무조건 걷옷 입어야되는 날씨여서 당황..
                        네덜란드에서 3일동안 있었는데 3일 다 흐리고 바람이 불었습니다 그리고 얘기들어보니까 7월에는 우박 내리고 더 추워서 
                        패딩 입는 사람들도 있었다고 함 갈 때 날씨 잘 찾아보고 가세용<br/><br/>

                        암스테르담도 좋았지만 고즈넉한 네덜란드 분위기와 다양한 상점,카페를 즐기기에는 라이든 쪽이 더 좋았음
                        관광객보다는 현지 사람들이 많이 다니는 동네 같았고 적당히 사람이 붐비는 곳이라 현지 분위기를 느끼고 싶은 사람들에게 추천
                        그리고 라이든에 있는 마우리츠하위스 미술관 추천합니다
                        조용하고, 사람이 많지 않고 천천히 둘러볼 수 있어서 좋았음 (여기가 진주 귀걸이를 한 소녀 있는 곳)<br/><br/>

                        암스테르담에서 제일 좋았던 기억은 운하 보트투어!!!
                        네덜란드에 왔으면 한 번쯤은 무조건 해봤으면 좋겠다 싶을 정도로 네덜란드만의 분위기를 느끼기 좋음
                        하이네켄 박물관이랑 고흐 미술관 같이 다녀왔더니 너무 많이 걸어서 진짜 피곤했음
                        그치만 둘 다 추천함<br/><br/>

                        그리고 스트룹 와플 진짜 맛있으니까 한국 올 때 많이 사오시길.. 나는 조금만 사왔는데 후회했다..
                        마트에서 얼마 안하고 어느 마트를 가든 다 있으니 많이 사오세요 맛있어요</Content>
                        <ImgLine>
                            <Img src={dummy1}/>
                            <Img src={dummy2}/>
                        </ImgLine>
                        <CommentBMLine>
                            <CommentBMDiv>
                                <img src={comment}/>
                                <HowMany>2</HowMany>
                            </CommentBMDiv>
                            <CommentBMDiv onClick={handleBM} style={isBM? {borderColor:"#6695F1", backgroundColor:"#E6EEFC"}: {}}>
                                {isBM? <img src={bookmark_on}/> :<img src={bookmark}/>}
                                <HowMany style={isBM? {color:"#6695F1"} : {}}>20</HowMany>
                            </CommentBMDiv>
                        </CommentBMLine>
                    </Detail>
                </DetailContainer>
                <InfoContainer>
                    <InfoBox>
                        <Text>글쓴이</Text>
                        <InfoDiv>
                            <ProfileImg src={profileimg}/>
                            <MainInfo>
                                <Age>20대 / 여</Age>
                                <Name>데미소다</Name>
                                <Label src={label_blackhole}/>
                            </MainInfo>
                        </InfoDiv>
                        <BlueTxt>여행 성향</BlueTxt>
                        <InfoTxt>무엇이든 OK, 블랙홀형 여행자</InfoTxt>
                        <BlueTxt>자기 소개</BlueTxt>
                        <InfoTxt>안녕하세요, 저는 휴학하고 이곳저곳 여행 다니고있는 20대입니다. 저는 즉흥적인 편이긴하지만, 함께 여행하는 사람의 성향에 따라서 계획을 짜야할 땐 신중하게 잘 짜는 편이에요!</InfoTxt>
                    </InfoBox>
                </InfoContainer>
            </Body>
        </>
    );
};

export default DetailPage;
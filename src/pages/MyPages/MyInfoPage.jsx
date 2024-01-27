import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import MyBar from '../../components/MyBar';
import profileimg from '../../images/dummyprofileimg.png';

const Body = styled.div`
    margin-top: 10vh;
    padding-top: 55px;
    padding-left: 330px;
`
const InfoBox = styled.div`
    margin: 70px 100px;
`
const Line = styled.div`
    display: flex;
    margin-bottom: 50px;
`
const Title = styled.div`
    color: #262626;
    font-size: 20px;
    font-weight: 600;
    width: 200px;
`
const Info = styled.div`
    color: #878787;
    font-size: 20px;
    font-weight: 600;
    width: 800px;
`
const ProfileImg = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

let info = [
    {name: '이예지', nickname: '데미소다', email: 'lee.yeji0327@sookmyung.ac.kr', sex: '여', birth: '2002.03.27',
        introduce: '안녕하세요, 저는 휴학하고 이곳저곳 여행 다니고 있는 20대입니다. 저는 즉흥적인 편이긴하지만, 함께 여행하는 사람의 성향에 따라서 계획을 짜야 할 땐 신중하게 잘 짜는 편이에요!',
        label: '무엇이든 OK, 블랙홀형 여행자', profileimg: profileimg}
];


const MyInfoPage = () => {
    return (
        <>
            <TopBar/>
            <MyBar/>
            <Body>
                <InfoBox>
                    {info && info.map(info => (
                        <>
                    <Line>
                        <Title>이름</Title>
                        <Info>{info.name}</Info>
                    </Line>
                    <Line>
                        <Title>닉네임</Title>
                        <Info>{info.nickname}</Info>
                    </Line>
                    <Line>
                        <Title>이메일</Title>
                        <Info>{info.email}</Info>
                    </Line>
                    <Line>
                        <Title>성별</Title>
                        <Info>{info.sex}</Info>
                    </Line>
                    <Line>
                        <Title>생년월일</Title>
                        <Info>{info.birth}</Info>
                    </Line>
                    <Line>
                        <Title>자기소개</Title>
                        <Info>{info.introduce}</Info>
                    </Line>
                    <Line>
                        <Title>여행 성향</Title>
                        <Info>{info.label}</Info>
                    </Line>
                    <Line>
                        <Title>프로필 사진</Title>
                        <ProfileImg src={info.profileimg}/>
                    </Line>
                    </>
                    ))}
                </InfoBox>
            </Body>
        </>
    );
};

export default MyInfoPage;
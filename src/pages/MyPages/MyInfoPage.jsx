import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import MyBar from '../../components/MyBar';
import profileimg from '../../images/dummyprofileimg.png';
import axios from 'axios';
import Cookies from 'js-cookie'

const Body = styled.div`
    margin-top: 10vh;
    padding-top: 55px;
    padding-left: 330px;
`
const InfoBox = styled.div`
    margin: 70px 100px 0px 100px;
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

const LogoutBtn = styled.button`
    background: #E84E4E;
    color: white;
    font-size: 20px;

    margin: 0px 100px 100px 100px;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;

    &:hover {
        background-color: #9C0A0A;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

let sub_title = {
    'Jupiter': '여행계의 보부상, 목성형 여행자',
    'Sun': "맛집 탐방가, 태양형 여행자",
    'Comet': "자유분방! 어디로든, 혜성형 여행자",
    'Earth': "호기심 대마왕, 지구형 여행자",
    'Moon': "안전제일, 달형 여행자",
    'Saturn': "힐링 최고! 감성적인 사진가, 토성형 여행자",
    'White': "계획 자판기, 화이트홀형 여행자",
    'Black': "무엇이든 OK!, 블랙홀형 여행자"
}

let gender = {
    'M': '남',
    'F': '여'
};


const MyInfoPage = () => {

    const username = localStorage.getItem('username');
    const usernickname = localStorage.getItem('usernickname');
    const useremail = localStorage.getItem('useremail');
    const usergender = localStorage.getItem('usergender');
    const userbirth = localStorage.getItem('userbirth');
    const userbio = localStorage.getItem('userbio');
    const usertype = localStorage.getItem('usertype');
    const userimg = localStorage.getItem('userimg');

    // const getmyinfo = () => {
    //     axios.get('http://127.0.0.1:8000/mypage/my_info',
    //     {
    //         headers:{'XSRF-Token':Cookies.get('csrftoken')}
    // })
    // .then(res => {
    //     console.log(res.data);
    // })
    // .catch(err => {
    //     console.err('get myinfo error', err);
    // })
    // }

    // useEffect(() => {
    //     getmyinfo();
    // },[])
  
    const navigate = useNavigate();

    const handleLogout = () => {
        alert('로그아웃되었습니다.');
        navigate('/');
    };


    return (
        <>
            <TopBar/>
            <MyBar/>
            <Body>
                <InfoBox>
                        <>
                    <Line>
                        <Title>이름</Title>
                        <Info>{username}</Info>
                    </Line>
                    <Line>
                        <Title>닉네임</Title>
                        <Info>{usernickname}</Info>
                    </Line>
                    <Line>
                        <Title>이메일</Title>
                        <Info>{useremail}</Info>
                    </Line>
                    <Line>
                        <Title>성별</Title>
                        <Info>{gender[usergender]}</Info>
                    </Line>
                    <Line>
                        <Title>생년월일</Title>
                        <Info>{userbirth}</Info>
                    </Line>
                    <Line>
                        <Title>자기소개</Title>
                        <Info>{userbio}</Info>
                    </Line>
                    <Line>
                        <Title>여행 성향</Title>
                        <Info>{sub_title[usertype]}</Info>
                    </Line>
                    <Line>
                        <Title>프로필 사진</Title>
                        <ProfileImg src={userimg}/>
                    </Line>
                    </>
                </InfoBox>
                <ButtonContainer>
                    <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
                </ButtonContainer>
            </Body>
        </>
    );
};

export default MyInfoPage;
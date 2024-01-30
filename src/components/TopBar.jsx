import React from 'react';
import styled from 'styled-components';
import logo from '../images/bar_logo.png';
import mylogo from '../images/mypage_icon.png'
import { useLocation, useNavigate } from 'react-router-dom';


const Wrapper = styled.div`
    width: 100%;
    height: 10vh;
    background-color: white;
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    border-bottom: 1px solid rgba(0, 0, 0, 0.10);
`
const LogoTabDiv = styled.div`
    margin-left: 30px;
    height: 10vh;
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    width: 3vw;
    cursor: pointer;
`
const TabDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Tab = styled.div`
    font-weight: 600;
    font-size: 20px;
    margin-left: 70px;
    cursor: pointer;
`
const MyTab = styled.div`
    color: #6695F1;
    font-weight: 600;
    font-size: 16px;
    margin-right: 30px;
    height: 10vh;
    display: flex;
    align-items: center;
    color: #262626;
    cursor: pointer;
`
const MyIcon = styled.img`
    width: 2vw;
    margin-left: 10px;
`

const TopBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Wrapper>
            <LogoTabDiv>
                <Logo src={logo} onClick={() => navigate("/")}/>
                <TabDiv>
                    <Tab onClick={() => navigate("/home")} style={{color: location.pathname === '/home'? '#6695F1' : '#262626'}}>
                        홈</Tab>
                    <Tab onClick={() => navigate("/recent")} style={{color: location.pathname === '/recent'? '#6695F1' : '#262626'}}>
                        최신 글</Tab>
                    <Tab onClick={() => navigate("/hot")} style={{color: location.pathname === '/hot'? '#6695F1' : '#262626'}}>
                        인기 글</Tab>
                </TabDiv>
            </LogoTabDiv>
            <MyTab onClick={() => navigate("/myresult")} style={{color: location.pathname.startsWith('/my')?'#6695F1' : '#262626'}}>
                마이페이지
                <MyIcon src={mylogo}/>
            </MyTab>
        </Wrapper>
    );
};

export default TopBar;
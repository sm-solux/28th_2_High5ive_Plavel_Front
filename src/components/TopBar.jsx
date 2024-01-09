import React from 'react';
import styled from 'styled-components';
import logo from '../images/bar_logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    height: 10vh;
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
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
    font-size: 1.2vw;
    margin-left: 70px;
    cursor: pointer;
`
const MyTab = styled.div`
    color: #6695F1;
    font-weight: 600;
    font-size: 1.1vw;
    margin-right: 30px;
    cursor: pointer;
`

const TopBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Wrapper>
            <LogoTabDiv>
                <Logo src={logo}/>
                <TabDiv>
                    <Tab onClick={() => navigate("/home")}>
                        홈</Tab>
                    <Tab onClick={() => navigate("/recent")}>
                        최신 글</Tab>
                    <Tab onClick={() => navigate("/hot")}>
                        인기 글</Tab>
                </TabDiv>
            </LogoTabDiv>
            <MyTab>마이페이지</MyTab>
        </Wrapper>
    );
};

export default TopBar;
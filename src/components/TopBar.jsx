import React from 'react';
import styled from 'styled-components';
import logo from '../images/bar_logo.png';

const Wrapper = styled.div`
    width: 100%;
    height: 10vh;
    background-color: aliceblue;
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
`
const MyTab = styled.div`
    color: #6695F1;
    font-weight: 600;
    font-size: 1.1vw;
    margin-right: 30px;
`
const Line = styled(motion.hr)`
  border: 0;
  height: 4px;
  background-color: #6695F1;
  margin-top: 27px;
  opacity: 1;
  border-radius: 50px;
  transition: all ease 0.3s;
`;

const TopBar = () => {
    return (
        <Wrapper>
            <LogoTabDiv>
                <Logo src={logo}/>
                <TabDiv>
                    <Tab>홈</Tab>
                    <Tab>최신 글</Tab>
                    <Tab>인기 글</Tab>
                </TabDiv>
            </LogoTabDiv>
            <MyTab>마이페이지</MyTab>
        </Wrapper>
    );
};

export default TopBar;
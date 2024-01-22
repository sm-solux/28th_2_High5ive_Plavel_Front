import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    margin-left: 100px;
    min-height: calc(90vh - 100px);
    display: flex;
    align-items: center;
    width: 230px;
    border-right: 1px solid;
    margin: 50px 0 50px 100px;
`
const TabDiv = styled.div`

`
const Tab = styled.div`
    color: #808080;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 50px;
    cursor: pointer;
    &:hover {
        color: #262626;
        font-size: 25.5px;
        transition: all ease 0.2s;
    }
`

const MyBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Wrapper>
            <TabDiv>
                <Tab onClick={() => {navigate('/myresult')}} style={{color: location.pathname === '/myresult'? '#262626' : ''}}>테스트 결과</Tab>
                <Tab onClick={() => {navigate('/mywrite')}} style={{color: location.pathname === '/mywrtie'? '#262626' : ''}}>내가 쓴 글</Tab>
                <Tab onClick={() => {navigate('/mycomment')}} style={{color: location.pathname === '/mycomment'? '#262626' : ''}}>댓글 단 글</Tab>
                <Tab onClick={() => {navigate('/mybookmark')}} style={{color: location.pathname === '/mybookmark'? '#262626' : ''}}>북마크한 글</Tab>
                <Tab onClick={() => {navigate('/myinfo')}} style={{color: location.pathname === '/myinfo'? '#262626' : ''}}>회원정보</Tab>
            </TabDiv>
        </Wrapper>
    );
};

export default MyBar;
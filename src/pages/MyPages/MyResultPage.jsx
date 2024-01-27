import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import MyBar from '../../components/MyBar';

const Body = styled.div`
    margin-top: 10vh;
`

const MyResultPage = () => {
    return (
        <>
        <TopBar/>
        <MyBar/>
        <Body>
            나의 테스트 결과
        </Body>
        </>
    );
};

export default MyResultPage;
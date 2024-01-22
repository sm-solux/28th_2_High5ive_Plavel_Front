import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import MyBar from '../../components/MyBar';

const Body = styled.div`
    margin-top: 10vh;
`

const MyInfoPage = () => {
    return (
        <>
            <TopBar/>
            <MyBar/>
            <Body>
                나의 정보
            </Body>
        </>
    );
};

export default MyInfoPage;
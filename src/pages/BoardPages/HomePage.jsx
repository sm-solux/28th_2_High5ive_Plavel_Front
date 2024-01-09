import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';

const Body = styled.div`
    margin-top: 10vh;
`

const HomePage = () => {
    return (
        <>
            <TopBar/>
            <Body>
                게시판 홈
            </Body>
        </>
    );
};

export default HomePage;
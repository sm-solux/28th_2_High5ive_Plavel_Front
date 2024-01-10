import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import Banner from '../../components/Banner';

const Body = styled.div`
    margin-top: 10vh;
`

const HomePage = () => {
    return (
        <>
            <TopBar/>
            <Body>
                <Banner/>
                게시판 홈
            </Body>
        </>
    );
};

export default HomePage;
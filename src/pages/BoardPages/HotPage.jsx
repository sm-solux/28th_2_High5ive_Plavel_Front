import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';

const Body = styled.div`
    margin-top: 10vh;
`

const HotPage = () => {
    return (
        <>
            <TopBar/>
            <Body>
                인기페이지
            </Body>
        </>
    );
};

export default HotPage;
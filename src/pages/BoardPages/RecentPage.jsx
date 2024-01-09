import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';

const Body = styled.div`
    margin-top: 10vh;
`

const RecentPage = () => {
    return (
        <>
            <TopBar/>
            <Body>
                최신페이지
            </Body>
        </>
    );
};

export default RecentPage;
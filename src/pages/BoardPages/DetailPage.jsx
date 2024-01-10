import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';

const Body = styled.div`
    margin-top: 10vh;
`

const DetailPage = () => {
    return (
        <>
            <TopBar/>
            <Body>
                세부페이지
            </Body>
        </>
    );
};

export default DetailPage;
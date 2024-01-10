import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';

const Body = styled.div`
    margin-top: 10vh;
`

const WritePage = () => {
    return (
        <>
            <TopBar/>
            <Body>
                작성페이지
            </Body>
        </>
    );
};

export default WritePage;
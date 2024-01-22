import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar';
import MyBar from '../../components/MyBar';

const Body = styled.div`
    margin-top: 10vh;
`

const MyCommentPage = () => {
    return (
        <>
            <TopBar/>
            <MyBar/>
            <Body>
                내가 댓글 쓴 글
            </Body>
        </>
    );
};

export default MyCommentPage;
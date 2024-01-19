import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 35px;
`
const ProfileLine = styled.div`
    display: flex;
    line-height: 40px;
    align-items: center;
    margin-bottom: 10px;
`
const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`
const Name = styled.div`
    color: #262626;
    font-size: 15px;
    font-weight: 600;
    margin-right: 10px;
`
const Label = styled.img`
    height: 20px;
`
const CommentTxt = styled.div`
    color: #262626;
    font-size: 15px;
    font-weight: 500;
`

const Comment = (props) => {
    const {profileimg, name, label, comment_txt} = props;

    return (
        <Wrapper>
            <ProfileLine>
                <Img src={profileimg}/>
                <Name>{name}</Name>
                <Label src={label}/>
            </ProfileLine>
            <CommentTxt>{comment_txt}</CommentTxt>
        </Wrapper>
    );
};

export default Comment;
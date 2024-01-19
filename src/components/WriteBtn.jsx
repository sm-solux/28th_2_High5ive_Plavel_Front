import React from 'react';
import styled from 'styled-components';
import write from '../images/write.svg';
import { color } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
    border: none;
    background-color: #6695F1;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > div {
        display: none;
        opacity: 0;
    }
    &:hover {
        > div {
            display: block;
            color: white;
            opacity: 1;
            color: #FFF;
            font-size: 25px;
            height: 25px;
            overflow-y: hidden;
            font-weight: 600;
            margin-left: 10px;
        }
        width: 177px;
        border-radius: 50px;
        background-color: #5880cf;
        transition: all ease 0.5s;
    }
    &:not(:hover) {
        transition: all ease-out 0.5s;
        width: 85px;
        height: 85px;
        border-radius: 50%;
    }
`
const Icon = styled.img`
    
`

const WriteBtn = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate('/write')}>
            <Icon src={write}/>
            <div>글 쓰기</div>
        </Button>
    );
};

export default WriteBtn;
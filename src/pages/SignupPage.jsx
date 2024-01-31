import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: linear-gradient(#253149, #323691);
    width: calc(100vw - 200px);
    min-height: calc(100vh - 70px);
    padding: 70px 100px 0 100px;
`
const SignUp = styled.div`
    color: #FFF;
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 30px;
`
const InputBox = styled.div`
    overflow: scroll;
    width: 40%;
    height: calc(100vh - 240px);
    //background-color: aliceblue;
`
const Title = styled.div`
    color: #FFF;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
`
const InputLine = styled.div`
    display: flex;
    border-radius: 15px;
    background: rgba(242, 242, 242, 0.23);  
    padding: 10px;
    justify-content: space-between;
    margin-bottom: 20px;
`
const Input = styled.input`
    border: none;
    background: none;  
    padding: 12px;
    padding-left: 20px;
    outline: none;
    width: 85%;
    color: white;
    font-size: 20px;
    font-weight: 600;
    &::placeholder {
        color: rgba(210, 210, 210, 0.52);
    }
`
const SendBtn = styled.button`
    border-radius: 21.5px;
    background: #6695F1;
    border: none;
    width: 93px;
    cursor: pointer;
    &:hover {
        background: #5880cf;
    }
`
const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const SexBtn = styled.div`
    border-radius: 15px;
    background: rgba(242, 242, 242, 0.23);
    color: #FFF;
    font-size: 25px;
    font-weight: 600;
    width: 45%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Introduce = styled.textarea`
    width: 93%;
    height: 120px;
    border-radius: 15px;
    background: rgba(242, 242, 242, 0.23);
    resize: none;
    padding: 12px;
    padding-left: 20px;
    outline: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
    &::placeholder {
        color: rgba(210, 210, 210, 0.52);
    }
`
const Words = styled.div`
    color: rgba(210, 210, 210, 0.52);
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: end;
    margin-bottom: 10px;
`

const SignupPage = () => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [birth, setBirth] = useState('');
    const [introduce, setIntroduce] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePW = (e) => {
        setPassword(e.target.value);
    }
    const onChangePW2 = (e) => {
        setPassword2(e.target.value);
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const handleSex = (e) => {
        setSex(e.target.id);
    }
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }
    const onChangeIntroduce = (e) => {
        setIntroduce(e.target.value);
    }

    return (
        <Wrapper>
            <SignUp>회원가입</SignUp>
            <InputBox>
                <Title>아이디</Title>
                <InputLine>
                    <Input
                        name='id'
                        type='text'
                        placeholder='아이디를 입력해주세요.'
                        onChange={onChangeId}
                        value={id}/>
                </InputLine>
                <Title>이메일</Title>
                <InputLine>
                    <Input
                        name='email'
                        type='text'
                        placeholder='이메일을 입력해주세요.'
                        onChange={onChangeEmail}
                        value={email}/>
                </InputLine>
                <Title>비밀번호</Title>
                <InputLine>
                    <Input
                        name='password'
                        type='text'
                        placeholder='비밀번호를 입력해주세요.'
                        onChange={onChangePW}
                        value={password}/>
                </InputLine>
                <Title>비밀번호 확인</Title>
                <InputLine>
                    <Input
                        name='password2'
                        type='text'
                        placeholder='비밀번호를 다시 한 번 입력해주세요.'
                        onChange={onChangePW2}
                        value={password2}/>
                </InputLine>
                <FlexDiv>
                    <div style={{width: "45%", marginRight: "5%"}}>
                        <Title>이름</Title>
                        <InputLine>
                            <Input
                                name='name'
                                type='text'
                                placeholder='이름을 입력해주세요.'
                                onChange={onChangeName}
                                value={name}/>
                        </InputLine>
                    </div>
                    <div style={{width: "45%"}}>
                        <Title>성별</Title>
                        <FlexDiv>
                            <SexBtn id='male' onClick={handleSex} style={{backgroundColor: sex === 'male'? 'white' : '', color: sex === 'male'? 'black' : ''}}>남</SexBtn>
                            <SexBtn id='female' onClick={handleSex} style={{backgroundColor: sex === 'female'? 'white' : '', color: sex === 'female'? 'black' : ''}}>여</SexBtn>
                        </FlexDiv>
                    </div>
                </FlexDiv>
                <Title>생년월일</Title>
                <InputLine>
                    <Input
                        name='birth'
                        type='text'
                        placeholder='YYYY.MM.DD 형태로 입력해주세요.'
                        onChange={onChangeBirth}
                        value={birth}/>
                </InputLine>
                <FlexDiv>
                    <Title>자기소개</Title>
                    <Words>0/100자</Words>
                </FlexDiv>
                <Introduce
                    name='introduce'
                    value={introduce}
                    placeholder='자기소개를 입력해주세요.'
                    onChange={onChangeIntroduce}/>
            </InputBox>
        </Wrapper>
    );
};

export default SignupPage;
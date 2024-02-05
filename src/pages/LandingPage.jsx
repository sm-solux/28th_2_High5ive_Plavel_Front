import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import earth from '../images/Landingpage/Earth_etc.png';
import backpack from '../images/Landingpage/backpack.png';
import logo from '../images/Landingpage/logo.png';
import passport from '../images/Landingpage/passport.png';
import axios from 'axios';
import Cookies from 'js-cookie'


const Background = styled.div`
  background: linear-gradient(#253149, #323691);
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
    margin-top: 250px;
`;

const Text = styled.div`
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  background-color: #6695F1;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 10px 30px;
  margin: 15px 30px;
  font-size: 25px;

  &:hover {
    background-color: #5880cf;
  }
`;

const SignUpButton = styled.button`
  color: white;
  text-decoration: underline;
  background:none;
  border:none;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const EmailInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: #8E8E8E;
  border: none;
  border-radius: 20px;

  margin: 10px;
  padding: 10px;
  opacity: 0.6;

  font-size: 20px;
`;

const PwInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: #8E8E8E;
  border: none;
  border-radius: 20px;

  margin: 10px;
  padding: 10px;
  opacity: 0.6;

  font-size: 20px;
`;

const Earth = styled.img`

`;

const Passport = styled.img`
    position: absolute;  
    top: 1;
    right:1;
    margin: -20% 50% 0 0;
`

const Backpack = styled.img`
    position: absolute;
    top: 1;
    right:0;
    margin: 30% 5% 0 0;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LogoContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: -50px 0 0 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const H4 = styled.div`
    color: white;
    font-size: 20px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 200px;
`

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    // 로그인 로직 추가
    console.log('로그인 시도:', email, password);
    axios.post('http://127.0.0.1:8000/sign/login', 
    {
      username: email,
      password : password
    })
    .then(res => {
      alert('로그인 성공!');
      navigate('/home');
      localStorage.setItem('token', res.data.token);
      console.log(res);
      console.log(localStorage.getItem('token'));
    })
    .catch(err => {
      console.error('login error', err);
    })
  };

  return (
    <>
      <Background>
        <ImageContainer>
          <LogoContainer>
            <Logo src={logo}/>
            <Text>
              다양한 성향의 여행자들이 모이는 이곳은 Planet Travel
            </Text>
          </LogoContainer>
          <Earth src={earth}/>
        </ImageContainer>
        <Passport src={passport}/>
        <Backpack src={backpack}/>
        <LoginContainer>
          <Text>지금 바로 로그인하기</Text>
          <EmailInput
              value={email}
              onChange={handleEmailChange}
              placeholder='이메일'
          />
          <PwInput
              value={password}
              onChange={handlePasswordChange}
              placeholder='비밀번호'
          />
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
          <Container>
            <H4>계정이 없으신가요? </H4>
            <SignUpButton onClick={handleSignUp}>
                회원가입 및 성향테스트하기
            </SignUpButton>
          </Container>
        </LoginContainer>
      </Background>
    </>
  );
};

export default LandingPage;

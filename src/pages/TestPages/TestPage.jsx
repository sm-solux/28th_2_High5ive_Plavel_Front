

import React, {useState} from 'react';
import styled from 'styled-components';
import Test from '../../components/Test';
import { useMediaQuery } from "react-responsive";

const StartButton = styled.button`
  background-color: #6695F1;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 15px 35px;
  margin-top: 30px;
  font-size: 25px;
  font-weight: 600;

  &:hover {
    background-color: #5880cf;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Background = styled.div`
  background: linear-gradient(#253149, #323691);
  width: 100vw; 
  height: 100vh;
  font-size: 30px;

  display: flex; 
  align-items: center; 
  justify-content: center; 
`;

const Text = styled.div`
  color: white;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
`

const TestPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 750 });

  const [showMain, setShowMain] = useState(true);

  const handleStartTest = () => {
    setShowMain(false);
  };

  return (
    <>
    {isDesktop? 
    <Background>
      <div>
        {showMain ? (
          <section id="main">
            <Text>
              여행 행성 PLAVEL에 도착한 여러분, 환영합니다.
            </Text>
            <Text>
            여러분의 여행 성향 테스트를 시작하겠습니다.
            </Text>
            <ButtonContainer>
              <StartButton onClick={handleStartTest}>
                테스트 시작
              </StartButton>
            </ButtonContainer>
          </section>
        ) : (
          <Test />
        )}
      </div>
    </Background>
    :
    <MBackground>
      <div>
        {showMain ? (
          <section id="main">
            <MText>
              여행 행성 PLAVEL에 도착한 여러분, 환영합니다.
            </MText>
            <MText>
            여러분의 여행 성향 테스트를 시작하겠습니다.
            </MText>
            <MButtonContainer>
              <MStartButton onClick={handleStartTest}>
                테스트 시작
              </MStartButton>
            </MButtonContainer>
          </section>
        ) : (
          <Test />
        )}
      </div>
    </MBackground>
    }
    </>
    );
};

export default TestPage;


const MStartButton = styled.button`
  background-color: #6695F1;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 15px 35px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;

  &:hover {
    background-color: #5880cf;
  }
`;

const MButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
`;

const MBackground = styled.div`
  background: linear-gradient(#253149, #323691);
  width: 100vw; 
  height: 100vh;
  font-size: 30px;

  display: flex; 
  align-items: center; 
  justify-content: center; 
`;

const MText = styled.div`
  color: white;
  margin-bottom: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
`

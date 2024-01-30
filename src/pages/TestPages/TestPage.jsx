import React, {useState} from 'react';
import styled from 'styled-components';
import Test from '../../components/Test';

const TestButton = styled.button`
  background-color: #6695F1;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 10px 30px;
  margin-top: 10px;
  font-size: 20px;

  &:hover {
    background-color: #5880cf;
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
  margin: 30px;
  text-align: center;
`

const TestPage = () => {

  const [showMain, setShowMain] = useState(true);

  const handleStartTest = () => {
    setShowMain(false);
  };

  return (
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
              <TestButton onClick={handleStartTest}>
                테스트 시작
              </TestButton>
            </ButtonContainer>
          </section>
        ) : (
          <Test />
        )}
      </div>
    </Background>
    );
};

export default TestPage;

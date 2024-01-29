import React, { useEffect ,useState} from 'react';
import styled from 'styled-components';
import TestResult from '../../components/TestResult';

const Background = styled.div`
  background: linear-gradient(#253149, #323691);
  width: 100vw; 
  height: 100vh;

  display: flex; 
  align-items: center; 
  justify-content: center; 
`;

const TestResultPage = () => {
    const [resultValue, setResultValue] = useState(null);

    useEffect(() => {
        //쿼리 파라미터
        const urlParams = new URLSearchParams(window.location.search);
        const resultValue = urlParams.get("result");

        console.log("Result value:", resultValue);
        setResultValue(resultValue);
    }, []);

    return (
        <Background>
            <TestResult result={resultValue} />
        </Background>
    );
};

export default TestResultPage;

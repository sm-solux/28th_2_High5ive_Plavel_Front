import React, {useState} from 'react';
import Test from '../../components/Test';


const TestPage = () => {

    const [showMain, setShowMain] = useState(true);

  const handleStartTest = () => {
    setShowMain(false);
  };

  return (
    <div>
      {showMain ? (
        <section id="main">
          <div>
            여행 행성 PLAVEL에 도착한 여러분, 환영합니다.
          </div>
          <button onClick={handleStartTest}>
            테스트 시작
          </button>
        </section>
      ) : (
        <Test />
      )}
    </div>
    );
};

export default TestPage;

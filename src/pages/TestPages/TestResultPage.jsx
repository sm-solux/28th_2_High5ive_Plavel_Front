import React, { useEffect ,useState} from 'react';
import TestResult from '../../components/TestResult';

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
        <div>
            <TestResult result={resultValue} />
        </div>
    );
};

export default TestResultPage;

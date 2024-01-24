import React from 'react';

const infoList = [
    {
        
    },
]


const TestResult = ({ result }) => {
    return (
        <div>
            <h2>테스트 결과 페이지</h2>
            <p>결과: {result}</p>
        </div>
    );
};

export default TestResult;
import React from 'react';

const LandingPage = () => {
    const handleButtonClick = () => {
        window.location.href = "/test";
    };

    return (
        <div>
            랜딩페이지 및 첫페이지
            <div>
            <button onClick={handleButtonClick}>테스트 시작</button>
            </div>
        </div>
    );
};

export default LandingPage;
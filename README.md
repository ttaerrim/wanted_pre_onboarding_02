# wated_pre_onboarding_02

1.  초기 세팅

    1. 설치
       1. npm install
       2. npm install react-redux @reduxjs/toolkit
       3. npm install --save react-router-dom
    2. 절대 경로 설정
       1. 참고문헌: https://create-react-app.dev/docs/importing-a-component/#absolute-imports

2.  파일 구조 설정

            src
            ┃
            ┣ components
            ┃               ┣ BuyerRecommendImg
            ┣ layout      ┣ ProductDelivery
            ┃ ┣ Inputs  ┗  ...
            ┃ ┗ Section
            ┣ pages
            ┃   ┗ Admin
            ┣ store
            ┃ ┗ index.jsx
            ┣ utils
            ┃ ┣ svg
            ┃ ┗ data.json
            ┃
            ┗ App.js, index.css, index.js

3.  과제 구현 사항
    1. 재사용 가능성
       1. 반복되는 값, 함수, 스타일 등을 따로 지정하여 생산성을 높임

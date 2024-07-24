import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   
    html, body, #root {
        height: 100%;
    }

    button, 
    input {
        font-family: inherit;
        user-select: none;
    }


    @font-face {
        font-family: 'Pretendard-Black';
        src: local('Pretendard-Black'), local('Pretendard-Black');
        font-style: normal;
        src: url(./fonts/Pretendard-Black.woff) format('font-woff');
    }
    
    @font-face {
        font-family: 'Pretendard-Bold';
        src: local('Pretendard-Bold'), local('Pretendard-Bold');
        font-style: normal;
        src: url(./fonts/Pretendard-Bold.woff) format('font-woff');
    }
    
    @font-face {
        font-family: 'Pretendard-ExtraBold';
        src: local('Pretendard-ExtraBold'), local('Pretendard-ExtraBold');
        font-style: normal;
        src: url(./fonts/Pretendard-ExtraBold.woff) format('font-woff');
    }
    
    @font-face {
        font-family: 'Pretendard-ExtraLight';
        src: local('Pretendard-ExtraLight'), local('Pretendard-ExtraLight');
        font-style: normal;
        src: url(./fonts/Pretendard-ExtraLight.woff) format('font-woff');
    }
    
    @font-face {
        font-family: 'Pretendard-Light';
        src: local('Pretendard-Light'), local('Pretendard-Light');
        font-style: normal;
        src: url(./fonts/Pretendard-Light.woff) format('font-woff');
    }
    
    @font-face {
        font-family: 'Pretendard-Medium';
        src: local('Pretendard-Medium'), local('Pretendard-Medium');
        font-style: normal;
        src: url(./fonts/Pretendard-Medium.woff) format('font-woff');
    }
    
    @font-face {
        font-family: 'Pretendard-Regular';
        src: local('Pretendard-Regular'), local('Pretendard-Regular');
        font-style: normal;
        src: url(./fonts/Pretendard-Regular.woff) format('font-woff');
    }
    
    @font-face {
        font-family: 'Pretendard-SemiBold';
        src: local('Pretendard-SemiBold'), local('Pretendard-SemiBold');
        font-style: normal;
        src: url(./fonts/Pretendard-SemiBold.woff) format('font-woff');
    }
    
    @font-face {
        font-family: 'Pretendard-Thin';
        src: local('Pretendard-Thin'), local('Pretendard-Thin');
        font-style: normal;
        src: url(./fonts/Pretendard-Thin.woff) format('font-woff');
    }
`;

export default GlobalStyle;

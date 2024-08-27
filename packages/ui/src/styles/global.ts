import { createGlobalStyle } from 'styled-components';
import reset from './reset.style';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body, #root {
        height: 100%;
    }


    html, body {font-family: 'Pretendard'}

    button, 
    input {
        font-family: inherit;
        user-select: none;
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        src: url('./assets/fonts/Pretendard-Light.woff') format('woff'),
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        src: url('./assets/fonts/Pretendard-Light.woff') format('woff'),
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        src: url('./assets/fonts/Pretendard-Medium.woff') format('woff'),
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        src: url('./assets/fonts/Pretendard-Bold.woff') format('woff'),
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        src: url('./assets/fonts/Pretendard-SemiBold.woff') format('woff'),
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        src: url('./assets/fonts/Pretendard-ExtraBold.woff') format('woff'),
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        src: url('./assets/fonts/Pretendard-Black.woff') format('woff'),
    }

`;

export default GlobalStyle;

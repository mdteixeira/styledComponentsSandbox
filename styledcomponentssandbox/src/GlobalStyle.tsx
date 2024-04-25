import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
    }
    
    body {
        font-family: 'Poppins', sans-serif;
        background: #FFF;
        color: hsl(192, 100%, 9%);
        font-size: 1.15em;
        margin: 0;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }

    `;

export default GlobalStyle;

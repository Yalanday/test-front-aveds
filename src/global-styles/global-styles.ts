import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Montserrat', "Open Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-overflow-style: none; 
        scrollbar-width: none;
    }

    .body::-webkit-scrollbar {
        display: none;  
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    main {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
    }

`

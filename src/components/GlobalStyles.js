import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        font-family: Tahoma, Helvetica, Arial, sans-serif;
        transition: all 0.50s linear;

    }

    a {
        color: ${({theme}) => theme.linkColor};
    }

    #open-modal {
    background-color: ${({theme}) => theme.modalBkgr};
    color: ${({theme}) => theme.modalFont};
    }

    ` 
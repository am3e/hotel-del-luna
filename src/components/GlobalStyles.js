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

    .modal {
        background-color: ${({theme}) => theme.modalBkgr};
        color: ${({theme}) => theme.modalFont}; 
    }

    #open-modal {
        background-color: ${({theme}) => theme.buttonColor};
        color: ${({theme}) => theme.buttonFont};
    }
    #open-modal:hover,
    #open-modal:focus {
        background-color: ${({theme}) => theme.hoverModalBkgd};
        color: ${({theme}) => theme.hoverModalFont};
        cursor: pointer;
        transition: all 0.50s linear;

    }

    .overlay {
        background-color: ${({theme}) => theme.overlay};
    }

    .cancel-res-btn {
        background-color: ${({theme}) => theme.cancelButton};
        color: ${({theme}) => theme.cancelButtonFont};
    }
    .submit-res-btn {
        background-color: ${({theme}) => theme.submitButton};
        color: ${({theme}) => theme.submitButtonFont};
    }

    .hotel-title {
        color: ${({theme}) => theme.hotelTitle};
    }
    .hotel-title:hover,
    .hotel-title:focus {
        border-bottom: 3px solid goldenrod;
    }

    ` 
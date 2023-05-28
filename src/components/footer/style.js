import styled from "styled-components";

export const Container = styled.footer`
    footer {
    max-width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, .7);
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    }

    footer a {
        display: flex;
        flex-direction: column;
        color: #fff;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    footer a img {
        width: 30px;
        transition: 300ms;
    }

    footer a img:hover {
        transform: scale(1.1);
    }

    
    @media(max-width: 550px) {
        footer {
            display: flex;
            justify-content: space-around;
        }
    }

`
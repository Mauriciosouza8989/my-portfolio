import styled from "styled-components";

export const Container = styled.header `
    width: 100%;

    header {
    width: 100vw;
    background-color: rgb(24, 22, 22);
    display: flex;
    padding: 10px;
    align-items: center;
    position: fixed;
    justify-content: center;
    box-sizing: border-box;
    z-index: 1000;
    padding: 20px;
    }

    .Mobile {
        width: 40px;
        height: 40px;
        display: none;
        cursor: pointer;
    }

    #menu {
        max-width: 50%;
        list-style: none;
        display: flex;
        align-items: center;
        gap: 30px;
        justify-content: space-around;
        margin-right: 3rem;
    }

    li a {
        display: inline;
        cursor: pointer;
        padding: 10px;
        letter-spacing: 2px;
        text-decoration: none;
        color: aliceblue;
    }

    li a:hover {
        transition-property: background-color, color;
        transition-duration: 0.3s;
        background-color: orange;
        color: rgb(53, 35, 2);
        border-radius: 10px;
    }

    @media(max-width: 550px) {
        header {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        #menu {
            display: none;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0;
            width: 100%;
            gap: 15px;
            animation: menu 500ms backwards;
        }
        #menu li {
            width: 100%;
            text-align: center;
        }
        #menu li a:hover {
            background-color: none;
            border-bottom: 2px solid #0f0;
        }
        .Mobile {
            display: flex;
            width: 100%;
        }
    }
    

`
import styled from "styled-components";

export const Container = styled.div`


    .card {
        width: 220px;
        background-color: rgba(255, 255, 255, .8);
        padding: 40px 15px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        border-radius: 20px;
        border-bottom: 15px solid rgb(210, 136, 0);
    }

    .projetos .cards .card {
        height: 300px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        overflow: hidden;
        padding-bottom: 5px;
        gap: 15px;
    }

    .projetos .cards .card a:hover {
        color: rgb(19, 19, 30);
    }

    .projetos .cards .card img {
        width: 100%;
        height: 40%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url('../images/timer.png');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 20px 20px 0 0;
        cursor: pointer;
    }

    .projetos .cards .card img:hover {
        transform: scale(1.1);
    }

    .cards .card a {
        text-decoration: none;
        color: rgb(197, 129, 3);
    }

    .card p {
        font-size: 25px;
        font-weight: 500;
    }
`
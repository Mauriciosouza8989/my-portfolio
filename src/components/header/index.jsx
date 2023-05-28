import { Container } from "./style"

export function Header(){
    return(
        <Container>
            <header className="top-bar">
                <img className="Mobile" src="../../../src/assets/list.svg" alt="menu hamburger"/>
                <ul id="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </header>
        </Container>
    )
}
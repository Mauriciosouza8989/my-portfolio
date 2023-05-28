import { Container } from "./style"

export function Footer(){
    return(
        <Container>
            <footer id="contato">

                <a href="https://api.whatsapp.com/send/?phone=5533998003184&text&type=phone_number&app_absent=0" >
                    <img src="../src/assets/whatsapp-logo.svg" alt="imagem do whatsapp"/> whatsapp
                </a>
                <a href="https://www.linkedin.com/in/mauricio-sousa-38638417b/" >
                    <img src="../src/assets/linkedin-logo.svg" alt="imagem do lonkedin"/> Linkedin
                </a>

                <a href="mailto:mauriciosouza8989@gmail.com" >
                    <img src="../src/assets/envelope-simple.svg" alt="imagem de um envelope"/> Email
                </a>
                <a href="https://github.com/Mauriciosouza8989" >
                    <img src="../src/assets/github-logo.svg" alt="imagem do github"/> Github
                </a>

            </footer>
        </Container>
    )
}
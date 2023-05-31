import { Container } from "./style"

export function Footer(){
    return(
        <Container>
            <footer id="contato">

                <a href="https://api.whatsapp.com/send/?phone=5533998003184&text&type=phone_number&app_absent=0" >
                    <img src="https://i.ibb.co/M1bpsBC/whatsapp-logo.png" alt="imagem do whatsapp"/> whatsapp
                </a>
                <a href="https://www.linkedin.com/in/mauricio-sousa-38638417b/" >
                    <img src="https://i.ibb.co/myN4FpL/linkedin-logo.png" alt="imagem do lonkedin"/> Linkedin
                </a>

                <a href="mailto:mauriciosouza8989@gmail.com" >
                    <img src="https://i.ibb.co/d75j6yH/envelope-simple.png" alt="imagem de um envelope"/> Email
                </a>
                <a href="https://github.com/Mauriciosouza8989" >
                    <img src="https://i.ibb.co/JzGkt4s/github-logo.png" alt="imagem do github"/> Github
                </a>

            </footer>
        </Container>
    )
}

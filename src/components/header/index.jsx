import { Container } from "./style"
import { useState } from "react"


export function Header(){
    const [menu, setMenu] = useState("https://i.ibb.co/m6BPww3/list.png")
    const [showMenu, setShowMenu] = useState(null)
    const menuMobile = document.getElementById("menu")

    function ChangeMenu(){
        if(!showMenu){
            setMenu("https://i.ibb.co/SKN5mV4/x.png")
            setShowMenu(true)
            menuMobile.style.display = "flex"
            return
        }
        setMenu("https://i.ibb.co/m6BPww3/list.png")
        setShowMenu(false)
        menuMobile.style.display = "none"

        
    }


    return(
        <Container>
            <header className="top-bar">
                <img className="Mobile" src={menu} alt="menu hamburger" onClick={ChangeMenu}/>
                
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
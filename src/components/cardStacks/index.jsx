/* eslint-disable react/prop-types */
import { Container } from "./style"
export function CardStack({id, src, alt, title}){
    return(
        <Container>
            <div className="card">
                <img id={id} src={src} alt={alt}/>
                <p>{title}</p>
            </div>
        </Container>
    )
}
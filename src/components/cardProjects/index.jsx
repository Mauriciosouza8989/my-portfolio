/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


export function CardProject({deploy, github, src, alt, title }){
    return(
        <div className="card">
        <Link to={deploy} target="_blank">
            <img src={src} alt={alt}/>
        </Link>
        <p>{title}</p>
        <Link to={deploy} target="_blank">Ver site</Link>
        <Link to={github} target="_blank">Ver no github</Link>
    </div>
    )
}
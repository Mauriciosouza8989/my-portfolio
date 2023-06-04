/* eslint-disable react/prop-types */


export function CardProject({deploy, github, src, alt, title }){
    return(
        <div className="card">
        <a href={deploy} target="blank">
            <img src={src} alt={alt}/>
        </a>
        <p>{title}</p>
        <a href={deploy} target="blank">Ver site</a>
        <a href={github} target="blank">Ver no github</a>
    </div>
    )
}
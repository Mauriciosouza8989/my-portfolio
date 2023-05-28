/* eslint-disable react/prop-types */


export function CardProject({deploy, github, src, alt, title }){
    return(
        <div className="card">
        <a href={deploy} >
            <img src={src} alt={alt}/>
        </a>
        <p>{title}</p>
        <a href={deploy}>Ver site</a>
        <a href={github} >Ver no github</a>
    </div>
    )
}
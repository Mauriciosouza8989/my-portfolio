/* eslint-disable react/prop-types */
export function CardStack({id, src, alt, title}){
    return(
        
            <div className="card">
                <img id={id} src={src} alt={alt}/>
                <p>{title}</p>
            </div>
        
    )
}
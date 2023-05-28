import { useState, useEffect } from "react";

export function About(){
    function Frase() {
        const [frase, setFrase] = useState("");
        const [i, setI] = useState(0);
        const speed = 55; // velocidade da escrita em milissegundos
      
        useEffect(() => {
          const fraseCompleta = "Olá, me chamo mauricio...";
          if (i < fraseCompleta.length) {
            setTimeout(() => {
              setFrase(frase + fraseCompleta.charAt(i));
              setI(i + 1);
            }, speed);
          }
        }, [frase, i]);
      
        return frase;
      }
    
    
        
    

    
    return(
        <>
            <div id="apresentacao">
                
                <h1 id="sobreMim">{Frase() || "Olá, meu nome é mauricio. sou programador frontEnd"}</h1>
            </div>
            <div id="foto"></div>
            <div className="descricao">
                <p>Sou de Altinópolis-SP. Tenho 25 anos e sou desenvolvedor frontEnd, estudando na ROCKETSEAT, afim de me tornar um desenvolvedor FullStack. Sou apaixonado por tecnologia, e estou sempre em busca de novos conhecimentos afim de me tornar um bom profissional.
                </p>
            </div>
        </>
    )
}
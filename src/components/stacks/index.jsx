import { CardStack } from "../cardStacks"

export function Stacks(){
    return(
        <div id="habilidades" className="habilidades">
        <h2>Minhas Habilidades</h2>
        <div className="cards">

        <CardStack
              id="html"
              src="../../../src/assets/html.png"
              alt="imagem html"
              title="HTML"
            />
            
            <CardStack
              id="css"
              src="../../../src/assets/css3-logo.png"
              alt="imagem css"
              title="CSS"
            />
            
            <CardStack
              id="js"
              src="../../../src/assets/js1.png"
              alt="imagem javascript"
              title="JAVASCRIPT"
            />
          
          <CardStack
              id="github"
              src="../../../src/assets/github-mark/github-mark.svg"
              alt="imagem github"
              title="GITHUB"
            />
            
            <CardStack
              id="linux"
              src="../../../src/assets/linux.png"
              alt="imagem linux"
              title="LINUX"
            />
            
            <CardStack
              id="node"
              src="../../../src/assets/node.png"
              alt="imagem do nodejs"
              title="NODE JS"
            />

            <CardStack
              id="react"
              src="../../../src/assets/react.png"
              alt="imagem da lib react"
              title="REACT JS"
            />
            
            <CardStack
              id="sql"
              src="../../../src/assets/sqlite.png"
              alt="imagem de banco de dados sql"
              title="SQLITE"
            />
           
        </div>
    </div>
    )
}

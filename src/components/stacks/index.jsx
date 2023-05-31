import { CardStack } from "../cardStacks"

export function Stacks(){
    return(
        <div id="habilidades" className="habilidades">
        <h2>Minhas Habilidades</h2>
        <div className="cards">

        <CardStack
              id="html"
              src="https://i.ibb.co/nPxkF7r/html.png"
              alt="imagem html"
              title="HTML"
            />
            
            <CardStack
              id="css"
              src="https://i.ibb.co/0jd6rtm/css3-logo.png"
              alt="imagem css"
              title="CSS"
            />
            
            <CardStack
              id="js"
              src="https://i.ibb.co/wgvPQcv/js1.png"
              alt="imagem javascript"
              title="JAVASCRIPT"
            />
          
          <CardStack
              id="github"
              src="https://i.ibb.co/PxWdgJ9/github-mark.png"
              alt="imagem github"
              title="GITHUB"
            />
            
            <CardStack
              id="linux"
              src="https://i.ibb.co/N2Xk7nR/linux.png"
              alt="imagem linux"
              title="LINUX"
            />
            
            <CardStack
              id="node"
              src="https://i.ibb.co/L6V9g9c/node.png"
              alt="imagem do nodejs"
              title="NODE JS"
            />

            <CardStack
              id="react"
              src="https://i.ibb.co/zSg2Pz9/react.png"
              alt="imagem da lib react"
              title="REACT JS"
            />
            
            <CardStack
              id="sql"
              src="https://i.ibb.co/dtKVXVW/sqlite.png"
              alt="imagem de banco de dados sqlite"
              title="SQLITE"
            />
           
        </div>
    </div>
    )
}

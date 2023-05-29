import  {CardProject}  from"../cardProjects"

export function Projects(){
    return(
        <div id="projetos" className="projetos">
        <h2>Meus Projetos</h2>

        <div className="cards">

            <CardProject
              deploy="https://www.bing.com/ck/a?!&&p=14307d371647ea1dJmltdHM9MTY4NTMxODQwMCZpZ3VpZD0yOTc5MmNkNy1jNjY3LTY1MGEtMGNkZC0zZGE0YzdiZTY0NjMmaW5zaWQ9NTU3OA&ptn=3&hsh=3&fclid=29792cd7-c667-650a-0cdd-3da4c7be6463&u=a1L2ltYWdlcy9zZWFyY2g_cT10aW1lciBpbWFnZSZGT1JNPUlRRlJCQSZpZD0xRUI2OTVEMjZFQkRBOTA4M0U2MUYxQjRGQjQ5Q0U2QjFDRjNBRDVB&ntb=1"
              src="../../../src/assets/timer.png"
              alt="imagem do projeto focus timer"
              title="Focus timer"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/n%C3%ADvel-5/focus-timer-darkMode"
            />

            <CardProject
              deploy="https://page-of-login.netlify.app/"
              src="../../../src/assets/login.png"
              alt="imagem do projeto login"
              title="Login"
              github="https://github.com/Mauriciosouza8989/projetos-youtube/tree/main/formulario-animado"
            />
           
           <CardProject
              deploy="https://space-cream-responsive.netlify.app/"
              src="../../../src/assets/spaceCream.png"
              alt="imagem do projeto spacecream"
              title="Space Cream"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/responsividade/space-cream-desktop"
            />
           
           <CardProject
              deploy="https://jogo-da-velha-completo.netlify.app/"
              src="../../../src/assets/jogo-da-velha.png"
              alt="imagem do projeto Jogo da velha"
              title="Jogo da velha"
              github="https://github.com/Mauriciosouza8989/jogo-da-velha"
            />
           
           <CardProject
              deploy="https://github-favorites-projeto.netlify.app/"
              src="../../../src/assets/favorites.png"
              alt="imagem do projeto github favorites"
              title="Favoritos Github"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/nivel-6/desafio-favorites"
            />
           
           <CardProject
              deploy="https://calculator-of-imc.netlify.app/"
              src="../../../src/assets/imc.png"
              alt="imagem do projeto IMC"
              title="IMC"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/n%C3%ADvel-5/calculo-IMC"
            />
            
            <CardProject
              deploy="https://componente-trabalhos.netlify.app/"
              src="../../../src/assets/recents-works.png"
              alt="imagem do projeto recents works"
              title="Trabalhos recentes"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/responsividade/projeto02"
            />
            
            <CardProject
              deploy="https://jogo-da-adivinhacao.netlify.app/"
              src="../../../src/assets/adivinhacao.png"
              alt="imagem do projeto adivinhação"
              title="Adivinhação"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/n%C3%ADvel-5/jogo-adivinhacao"
            />
            
            <CardProject
              deploy="https://biscoito-dasorte.netlify.app/"
              src="../../../src/assets/biscoito.png"
              alt="imagem do projeto biscoito da sorte"
              title="Biscoito da sorte"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/n%C3%ADvel-5/biscoito-da-sorte"
            />
            
           
        </div>
        <a href="https://github.com/Mauriciosouza8989" className="projetos-github" >Veja os projetos no github</a>
    </div>
    )
}

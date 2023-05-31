import  {CardProject}  from"../cardProjects"

export function Projects(){
    return(
        <div id="projetos" className="projetos">
        <h2>Meus Projetos</h2>

        <div className="cards">

            <CardProject
              deploy="https://focus-timer-dark-mode.netlify.app/"
              src="https://i.ibb.co/mHXC994/timer.png"
              alt="imagem do projeto focus timer"
              title="Focus timer"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/n%C3%ADvel-5/focus-timer-darkMode"
            />

            <CardProject
              deploy="https://page-of-login.netlify.app/"
              src="https://i.ibb.co/6sy8LK0/login.png"
              alt="imagem do projeto login"
              title="Login"
              github="https://github.com/Mauriciosouza8989/projetos-youtube/tree/main/formulario-animado"
            />
           
           <CardProject
              deploy="https://space-cream-responsive.netlify.app/"
              src="https://i.ibb.co/Nm6LGMK/space-Cream.png"
              alt="imagem do projeto spacecream"
              title="Space Cream"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/responsividade/space-cream-desktop"
            />
           
           <CardProject
              deploy="https://jogo-da-velha-completo.netlify.app/"
              src="https://i.ibb.co/kSNkS4D/jogo-da-velha.png"
              alt="imagem do projeto Jogo da velha"
              title="Jogo da velha"
              github="https://github.com/Mauriciosouza8989/jogo-da-velha"
            />
           
           <CardProject
              deploy="https://github-favorites-projeto.netlify.app/"
              src="https://i.ibb.co/XD8MbHn/favorites.png"
              alt="imagem do projeto github favorites"
              title="Favoritos Github"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/nivel-6/desafio-favorites"
            />
           
           <CardProject
              deploy="https://calculator-of-imc.netlify.app/"
              src="https://i.ibb.co/dgDr3r5/imc.png"
              alt="imagem do projeto IMC"
              title="IMC"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/n%C3%ADvel-5/calculo-IMC"
            />
            
            <CardProject
              deploy="https://componente-trabalhos.netlify.app/"
              src="https://i.ibb.co/VjrbY8L/recents-works-copy.png"
              alt="imagem do projeto recents works"
              title="Trabalhos recentes"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/responsividade/projeto02"
            />
            
            <CardProject
              deploy="https://jogo-da-adivinhacao.netlify.app/"
              src="https://i.ibb.co/FHd709g/adivinhacao.png"
              alt="imagem do projeto adivinhação"
              title="Adivinhação"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/n%C3%ADvel-5/jogo-adivinhacao"
            />
            
            <CardProject
              deploy="https://biscoito-dasorte.netlify.app/"
              src="https://i.ibb.co/925JyH0/biscoito.png"
              alt="imagem do projeto biscoito da sorte"
              title="Biscoito da sorte"
              github="https://github.com/Mauriciosouza8989/rocketseat/tree/main/n%C3%ADvel-5/biscoito-da-sorte"
            />
            
           
        </div>
        <a href="https://github.com/Mauriciosouza8989" className="projetos-github" >Veja os projetos no github</a>
    </div>
    )
}
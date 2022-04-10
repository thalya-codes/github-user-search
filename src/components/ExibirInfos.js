import  ExibiInfos  from "../assets/styles/conteudo-principal/ExibiInfos"

function ExibirInfos(props) {
    return (
        <ExibiInfos>
          <ul>
           <li><img src={props.dados.avatar_url} alt='Imagem dono do perfil' className="imagem-usuario"/></li>
            <li className='nome-usuario'>{props.dados.name}</li>
            <li className='descricao-usuario'>{props.dados.bio}</li>
          
            <div className='infos-conta-container'>
              <li className="info-conta-dados">
                <span>Seguidores</span>
                <span>{props.dados.followers}</span>
              </li>

              <li className="info-conta-dados">
                <span>Seguindo</span>
                <span>{props.dados.following}</span>
              </li>
              <li className="info-conta-dados">
               <span>Repositórios</span>
               <span>{props.dados.public_repos}</span>
              </li>
            </div>
          </ul>
        </ExibiInfos>
    )
}

export default ExibirInfos
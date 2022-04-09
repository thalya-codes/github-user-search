import React, { useState } from "react"
import  api  from "./services/api"
import imgErro from './assets/imgs/personagem.png'
import octocat from './assets/imgs/octocat.png'
import  GlobalStyle  from'./assets/styles/GlobalStyle'
import { 
  Main, Header, Logo ,ContainerInput,  
  ExibiInfos, ImagemErro
} from './assets/styles/Styles'


function App() {
  const [user, setUser] = useState('')
  const [dados, setDados] = useState([])
  const [exibirInfos, setExibirInfos] = useState(false)
  const [usuarioNaoEncontrado, setUsuarioNaoEncontrado] = useState(false)

 
  const handleOnClick = async () => {
    api.get(`users/${user}`)
      .then(resposta =>{
        setDados(resposta.data)
        setExibirInfos(true)
        setUsuarioNaoEncontrado(false)
      })
      .catch(() => {
        setExibirInfos(false)
        setUsuarioNaoEncontrado(true)
      })     
  }

  const showInfo = () => {
    return (
      
        <ExibiInfos>
          <ul>
            <li><img src={dados.avatar_url} alt='Imagem dono do perfil' className="imagem-usuario"/></li>
            <li className='nome-usuario'>{dados.name}</li>
            <li className='descricao-usuario'>{dados.bio}</li>
          
          <div className='infos-conta-container'>
            <div className="infos-conta-titulos">
              <li>Seguidores</li>
              <li>Seguindo</li>
              <li>Repositórios</li>
            </div>

            <div className="infos-conta-dados">
              <li>{dados.followers}</li>
              <li>{dados.following}</li>
              <li>{dados.public_repos}</li>
            </div>
          </div>      
          </ul>
        </ExibiInfos>
    )
  }

  const msgUserNaoEncontrado = () => {
    return (
      <>

        <ExibiInfos>
          <ImagemErro src={imgErro} />
          <h3 style={{marginTop: '20px'}}>Usuário não encontrado</h3>
        </ExibiInfos>
      </>
    )
  }


  

  return (
    <>
      <GlobalStyle />
      <Main>    
      <Header>
        <Logo>
             <img src={octocat} alt="Imagem do octocat com um lupa"/>
             <h1 className="titulo-logo">Github dev find</h1>             
        </Logo>
        <ContainerInput>
          <input type='text' value={user} onChange={e => setUser(e.target.value)}/>    
          <button type='submit' onClick={() => {
            handleOnClick()

          }}>Search</button>
        </ContainerInput>        
      </Header>  

      {exibirInfos ? showInfo() :''}
      {usuarioNaoEncontrado && msgUserNaoEncontrado()}
</Main>



    </>

  );
}

export default App;

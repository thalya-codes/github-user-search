import React, { useState } from "react";
import  api  from "./services/api";
import imgErro from './assets/personagem.png'

import {  GlobalStyle,  Main, ContainerInput,  ExibiInfos, ImagemErro } from './assets/styles'


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
        <li className='login-usuario'>{dados.login}</li>
        <li className='descricao-usuario'>{dados.bio}</li>
       
       <div className='infos-conta'>
          <li>Seguidores: {dados.followers}</li>
          <li>Seguindo: {dados.following}</li>
          <li>Repositórios: {dados.public_repos}</li>
       </div>
  
      </ul>
      </ExibiInfos>
    )
  }

  const msgUserNaoEncontrado = () => {
    return (
      <ExibiInfos>
        <ImagemErro src={imgErro} />
        <h3 style={{marginTop: '20px'}}>Usuário não encontrado</h3>
      </ExibiInfos>
    )
  }

  return (
    
    <Main>
      <GlobalStyle />

      <ContainerInput>
        <input type='text' value={user} onChange={e => setUser(e.target.value)}/>    
        <button type='submit' onClick={() => {
          handleOnClick()

        }}>Search</button>
      </ContainerInput>
      
      {exibirInfos ? showInfo() :''}
      {usuarioNaoEncontrado && msgUserNaoEncontrado()}


    </Main>
  );
}

export default App;

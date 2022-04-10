import React, { useState } from "react"
import  api  from "./services/api"
import octocat from './assets/imgs/octocat.png'
import  GlobalStyle  from'./assets/styles/GlobalStyle'
import Main from './assets/styles/conteudo-principal/Main'
import Header from './assets/styles/cabecalho/Header'
import Logo from './assets/styles/cabecalho/Logo'
import ContainerInput from './assets/styles/cabecalho/ContainerInput'
import ExibirInfos from "./components/ExibirInfos"
import MensagemDeErro from "./components/MensagemDeErro"

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

  return (
    <>
      <GlobalStyle />
      <Main>    

        <Header>
            <Logo>
                <img src={octocat} alt="Imagem do octocat com um lupa"/>
                <h1 className="titulo-logo">Github Dev Finder</h1>             
            </Logo>

            <ContainerInput>
              <input type='text' value={user} onChange={e => setUser(e.target.value)}/>    
              <button type='submit' onClick={() => {
                handleOnClick()
              }}>Search</button>
            </ContainerInput>        
        </Header>  

        {exibirInfos ? <ExibirInfos dados={dados} /> : ''}
        {usuarioNaoEncontrado && MensagemDeErro()}
      </Main>

    </>

  );
}

export default App;

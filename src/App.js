import React, { useState } from "react";
import  styled  from "styled-components";
import { createGlobalStyle } from "styled-components";
import  api  from "./services/api";
import imgErro from './assets/personagem.png'

const GlobalStyle = createGlobalStyle`
* {
  margin:  0;
  padding:  0;
  box-sizing:  border-box;
}
`
const Main = styled.main`
background-image: url('https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png');
background-repeat: no-repeat;
background-size: cover;  
display:  flex;
flex-direction : column;
align-items: center; 

height: 100vh; 
padding-top: 5%; 
`
const ContainerInput = styled.div`
display: flex; 
justify-content: space-around;
width: 40vw;
height: 15vh;
padding-top: 40px;

background: rgba( 255, 255, 255, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 9px );
-webkit-backdrop-filter: blur( 9px );
border-radius: 10px;


input {
  background-color: rgba(255, 255, 255, 0.205);
  border: none;
  border-radius: 8px;
  width: 330px;
  height: 25px;
  padding: 20px;
  outline: none;
  color:  #fff;
}
button {
  background-color: rgba(255, 255, 255, 0.205);
  border: none;
  border-radius: 8px;
  width: 120px;
  height: 42px;
  text-align: center;
  cursor: pointer;
  color:  #fff;

}

`
const ExibiInfos = styled.section`
  width: 40vw;
  height: 65vh;
  padding: 0px 35px;
  margin-top: 50px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 9px );
  -webkit-backdrop-filter: blur( 9px );
  border-radius: 10px;



  ul {
    list-style: none; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  .imagem-usuario {
    width: 30%;
    clip-path: circle();
    margin-left: 35%;

  }
  .nome-usuario {
    font-size: 2rem;
    color: rgb(51, 51, 51);
    margin-top: 20px;


  }
  .login-usuario {
    background-color: rgba( 255, 255, 255, 0.2 );
    padding: 8px;
    border-radius: 15px;
    margin-top: 15px;
    margin-bottom: 30px;

  }
  .descricao-usuario {
    border-radius: 15px;
    padding: 18px;
    background-color: rgba( 255, 255, 255, 0.2 );
    margin-bottom: 15px;
  }
  .infos-conta {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-bottom: 20px;

    li:hover {
      color: #000;
      cursor: pointer;
    }
  }

`
const ImagemErro = styled.img`
  width: 70%;

`
function App() {
  const [user, setUser] = useState('')
  const [dados, setDados] = useState([])
  const [exibirInfos, setExibirInfos] = useState(false)
  const [notFound, setNotFound] = useState(false)

 
  const handleOnClick = async () => {
    api.get(`users/${user}`)
      .then(resposta =>{
        setDados(resposta.data)
        setExibirInfos(true)
        setNotFound(false)
      })
      .catch(error => {
        setExibirInfos(false)
        setNotFound(true)
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

  const msgUserNotFound = () => {
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
      {notFound && msgUserNotFound()}


    </Main>
  );
}

export default App;

import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
  margin:  0;
  padding:  0;
  box-sizing:  border-box;
}
`
const Main = styled.main`
background-color: #605F5F;
display:  flex;
flex-direction : column;
align-items: center; 

height: 100vh; 
padding-top: 5%; 
`

const Header = styled.header`
    display: flex; 
    flex-direction: column;
    align-items: center; 

    width: 40vw;
    height: 28vh;
    box-sizing: border-box;
    padding: 30px 0;

    background: #7E65A6;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9px );
    -webkit-backdrop-filter: blur( 9px );
    border-radius: 10px;

`
const Logo =  styled.div`
  display: flex;
  align-items: flex-end;

    h1 {
      color: #fff;
      font-family: 'Quicksand', sans-serif;
      font-weight: light;
      letter-spacing: 3px;
    }

    img {
      width: 70px;
    }
`
const ContainerInput = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-top: 40px;

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
  height: 53vh;

  padding-top: 50px;
  padding-bottom: 50px ;

  margin-top: 50px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #7E65A6;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 9px );
  -webkit-backdrop-filter: blur( 9px );
  border-radius: 10px;


  ul {
    width: 90%;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    list-style: none; 
    color: #fff;

    padding-top: 20px;
  }

  .imagem-usuario {
    width: 100px;
    clip-path: circle();
  }

  .nome-usuario {
    font-size: 1.5rem;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    
    letter-spacing: 3px;
    color: #fff;
   
    margin-top: 20px;

    box-sizing: border-box;
  }

  .descricao-usuario {
    border-radius: 25px;

    margin-top: 25px;
    margin-bottom: 25px;
    
    line-height: 30px;
    text-align: center;
  }

  .infos-conta-container {
    display: flex;
    flex-direction: column; 

    margin-top: 25px;
    margin-bottom: 25px;

    width: 90%;
  }
  

  .infos-conta-titulos {
      display: flex;
      justify-content: space-around;
    }


   .infos-conta-dados {
      display: flex;
      justify-content: space-around;
    }

  }

`

const MsgErro = styled(ExibiInfos) `
  img {
    width: 33%;
  }

  .span-erro-404 {
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 10px;
    font-size: 4rem;
    font-weight: bold;
    color: #FF66C4;
    text-shadow: 5px 3px 2px #ffffff70;
  }

  .msg-erro-404 {
    color: #fff;
    font-family: 'Quicksand', sans-serif;
    font-weight: light;
    letter-spacing: 10px;
    
  }
`


export { GlobalStyle, Main , Header , Logo ,ContainerInput,  ExibiInfos, MsgErro }
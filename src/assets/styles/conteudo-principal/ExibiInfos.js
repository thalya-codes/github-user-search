import styled from "styled-components";

const ExibiInfos = styled.section`
  width: 40vw;
  height: 100%;

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
    width: 150px;
    clip-path: circle();
  }

  .nome-usuario {
    font-size: 1.8rem;
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

    margin-top: 25px;
    margin-bottom: 25px;

    width: 90%;
  }

  .info-conta-dados {
    width: 100%;
    
    display: flex;
    flex-direction: column; 
    align-items: center;
  }
  
  .info-conta-dados span:first-child {
      margin-bottom: 5px;
    }
  }

  @media(max-width: 945px) {
    width: 90vw;

    .infos-conta-container {
      flex-direction: column;
    }

    .info-conta-dados {
      height: 85px;

      background: #0820264f;
      box-sizing: border-box;
      border-radius: 8px;

      padding-top: 20px;
      padding-bottom: 20px;

      margin-top: 20px;
    }
  }

`

export default ExibiInfos
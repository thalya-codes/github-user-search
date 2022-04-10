import styled from "styled-components"

const ContainerInput = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-top: 40px;
    

    input {
      background-color: rgba(255, 255, 255, 0.205);
      border: none;
      border-radius: 8px;
      width: 58%;
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


    @media(max-width: 945px) {
      flex-direction: column;
      align-items: center;

      input , button {
        width: 90%;

      }
      button {
        margin-top: 20px;
      }
    }
`

export default ContainerInput
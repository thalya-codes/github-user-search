import styled from "styled-components";
import ExibiInfos from "./ExibiInfos";
const MsgErro = styled(ExibiInfos)`
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
    font-weight: light;
    letter-spacing: 6.6px;
    font-size: 1.3rem;
    margin-top: 20px;    
  }

  @media(max-width: 945px) {
    height: auto;
    padding-bottom: 40px;

    .msg-erro-404 {
      font-size: 1.1rem;
      letter-spacing: 0px;
    }
  }
`

export default MsgErro
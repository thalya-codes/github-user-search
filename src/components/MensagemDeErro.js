import MsgErro  from "../assets/styles/conteudo-principal/MsgErro"
import imgErro from '../assets/imgs/4 0 4-ursinho.gif'

function MensagemDeErro() {
    return(
        <MsgErro>
          <img src={imgErro} alt='Gif de um ursinho com gorro de papai noel chorando'/>
          <span className="span-erro-404">404</span>
          <h3  className='msg-erro-404'>Usuário não encontrado</h3>
        </MsgErro>
    )
}

export default MensagemDeErro
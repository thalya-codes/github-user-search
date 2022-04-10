import styled from "styled-components"

const Header = styled.header`
    display: flex; 
    flex-direction: column;
    align-items: center; 

    width: 40vw;
    box-sizing: border-box;
    padding: 30px 0;

    background: #7E65A6;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9px );
    -webkit-backdrop-filter: blur( 9px );
    border-radius: 10px;

    @media(max-width: 945px){
      width: 90vw;
    }

`

export default Header
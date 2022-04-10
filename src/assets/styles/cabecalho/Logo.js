import styled from "styled-components"

const Logo = styled.div`
  display: flex;
  align-items: flex-end;

    h1 {
      color: #fff;
        font-weight: light;
      letter-spacing: 3px;
    }

    img {
      width: 70px;
    }

    @media(max-width: 945px) {
        font-size: 1rem;
    }
`

export default Logo
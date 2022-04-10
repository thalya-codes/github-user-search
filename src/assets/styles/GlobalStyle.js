import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
* {
  margin:  0;
  padding: 0;
  box-sizing:  border-box;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
}

body {
  background-color: #605F5F;
}
`

export default GlobalStyle
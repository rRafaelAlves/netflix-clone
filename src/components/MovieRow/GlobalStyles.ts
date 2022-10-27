import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
  body {
    background-color: #111;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;
 
export default GlobalStyle;
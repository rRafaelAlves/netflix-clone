import { createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
}
  body {
    background-color: #111;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;

export const LoadingContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 99;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

img{
  width: 400px;
}
`
 
export default GlobalStyle;
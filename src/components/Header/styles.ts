import styled from "styled-components";

export const Container = styled.header<{black: boolean}>`
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 999;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;
background: ${props => props.black ? '#141414': 'transparent'};
transition: all ease 0.5s;

`

export const Logo = styled.a`
height: 35px;
img{
    height: 100%;
}
`

export const User = styled.a`
height: 35px;
img{
    height: 100%;
    border-radius: 3px;
}
`

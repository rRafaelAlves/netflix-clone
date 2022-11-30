import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 30px;

    h2{
        margin-left: 30px;
    }

`

export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;;

`

export const MovieRowList = styled.div`
    width: 9999999px;
`

export const MovieRowItem = styled.div`
    display: inline-block;
    cursor: pointer;
    width: 150px;

    img{
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }
    img:hover{
        transform: scale(1);
    }
`
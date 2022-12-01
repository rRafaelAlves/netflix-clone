import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 30px;

    h2{
        margin-left: 30px;
    }

    .movieRow__left, .movieRow__right{
        position: absolute;
        width: 40px;
        height: 225px;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.2s;
    }
    .movieRow__left{
        left: 0;
    }
    .movieRow__right{
        right: 0;
    }

    &:hover .movieRow__left, .movieRow__right{
        opacity: 1;
    }
    @media (max-width: 760px){
        .movieRow__left, .movieRow__right{
            opacity: 1;
        }
    }

`

export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;;

`

export const MovieRowList = styled.div`
transition: all ease 0.6s;
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
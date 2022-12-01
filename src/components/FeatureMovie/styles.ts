import styled from "styled-components";


export const Container = styled.div<{background: string}>`
 height: 100vh;
 width: 100%;
 background-size: cover;
 background-position: center;
 background-image: url(${props => props.background});

    .featured__vertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
    }
    .featured__horizontal{
        width: inherit;
        height: inherit;
        background: linear-gradient(to right, #111 30%, transparent 70%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-bottom: 150px;
        padding-top: 70px;
    }

    @media (max-width: 760px){
        &{
            height: 80vh;
        }
    }
`

export const MovieDescription = styled.div`
margin-top: 15px;
font-size: 20px;
color: #999;
max-width: 40%;
text-overflow: ellipsis;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;

@media (max-width: 760px){
        &{
            font-size: 14px;
            max-width: 90%;
            margin-right: 30px;
        }
    }

`

export const MovieName = styled.div`
font-size: 60px;
font-weight: bold;

@media (max-width: 760px){
        &{
            font-size: 40px;
        }
    }
`
export const InfoMovie = styled.div`
font-size: 18px;
font-weight: bold;
margin-top: 15px;

.featured__points{
    color: #46d369;
}
.featured__year, .featured__seasons, .featured__points{
    display: inline-block;
    margin-right: 15px;
}

@media (max-width: 760px){
        &{
            font-size: 16px;
        }
    }
`


export const Buttons = styled.div`
margin-top: 15px;
a{
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
}

.watchButton{
    background-color: #fff;
    color: #000;
}
.addButton{
background-color: #333;
color: #fff;
}
a:hover{
opacity: 0.7;
}

@media (max-width: 760px){
        .watchButton, .addButton{
            font-size: 16px;
        }
    }
`

export const MovieGenres = styled.div`
margin-top: 15px;
font-size: 18px;
color: #999;

@media (max-width: 760px){
        &{
            font-size: 14px;
        }
    }
`

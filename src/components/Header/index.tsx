import React from 'react';
import * as C from './styles';

type Props = {
black: boolean
}

const Header = ({black}: Props) =>{
    return(
        <C.Container black={black}>
            <C.Logo href="">
            <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Logo da Netflix" />
            </C.Logo>
            <C.User href=''>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
            </C.User>

           
        </C.Container>
    )
}

export default Header;
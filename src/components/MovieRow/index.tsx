import React from 'react';
import { items } from '../../types/AllList';
import * as C from './styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props ={
    title: string;
    items: items
}

const MovieRow = ({title, items}:Props) =>{
    const [scrollX, setScrolX] = React.useState<number>(0);

    const handleScrollLeft = () =>{
        let x = scrollX + Math.round(window.innerWidth /2);

        if(x > 0){
            x = 0;
        }
    
        setScrolX(x);
    }
    const handleScrollRight = () =>{
       let x = scrollX - Math.round(window.innerWidth /2);
       let listW = items.results.length * 150;
       if((window.innerWidth - listW) > x){
        x = (window.innerWidth - listW) -60;
       }
    
        setScrolX(x);
        
    }

    return(
        <C.Container>
            <h2>{title}</h2>
                
            <div className='movieRow__left' onClick={handleScrollLeft}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>

            <div className="movieRow__right" onClick={handleScrollRight}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <C.ListArea>
                <C.MovieRowList style={{marginLeft: scrollX, width: items.results.length * 150}}>
                {items.results.length > 0 && items.results.map((item, index)=>(
                    <C.MovieRowItem>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} key={index}/>
                    </C.MovieRowItem>
                    
                ))}
                </C.MovieRowList>
            </C.ListArea>
        </C.Container>
    )
}

export default MovieRow;
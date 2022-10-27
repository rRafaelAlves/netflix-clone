import { items } from '../../types/AllList';
import * as C from './styles'


type Props ={
    title: string;
    items: items
}
const MovieRow = ({title, items}:Props) =>{
    return(
        <C.Container>
            <h2>{title}</h2>
            <C.ListArea>
                {items.results.length > 0 && items.results.map((item, index)=>(

                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} key={index}/>
                ))}
            </C.ListArea>
        </C.Container>
    )
}

export default MovieRow;
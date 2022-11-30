import React from 'react';
import { FeatureMovieType } from '../../types/FeatureMovie';
import * as C from './styles';

type Props = {
    data: FeatureMovieType
}

const FeatureMovie = ({data}: Props)=>{

    let firstDate = new Date (data.first_air_date);
    let firstGenre = data.genres.map(genre => genre.name);
    return(
        <C.Container background={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}>
            <div className='featured__vertical'>
                <div className='featured__horizontal'>
                    <C.MovieName>{data.name}</C.MovieName>
                    <C.InfoMovie>
                        <div className='featured__points'>
                            {data.vote_average.toFixed(1)} pontos
                        </div>
                        <div className='featured__year'>
                            {firstDate.getFullYear()}
                        </div>
                        <div className='featured__seasons'>
                            {data.number_of_seasons} temporada{data.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                    </C.InfoMovie>
                    <C.MovieDescription>
                        {data.overview}
                    </C.MovieDescription>
                    <C.Buttons>
                        <a href={`/watch/${data.id}`} className="watchButton">▶ Assistir</a>
                        <a href={`/list/add/${data.id}`} className="addButton">+ Minha Lista</a>
                    </C.Buttons>
                    <C.MovieGenres>
                       <strong>Gêneros: </strong> {firstGenre.join(', ')}
                    </C.MovieGenres>

                </div>
            </div>
        </C.Container>
    )
}

export default FeatureMovie;
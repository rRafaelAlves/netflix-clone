import React from "react";
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";
import { CategoryMovies } from "./types/AllList";

const App = () => {

  const [movieList, setMovieList] = React.useState<Array<CategoryMovies>>([])
  const { getHomeList } = Tmdb

  React.useEffect(()=>{
    const loadAll = async () =>{
        let list = await getHomeList();
        setMovieList(list)
        console.log(list)
    }

    loadAll();
  },[])

  return (
    <div className="page">
        <section className="lists">
          {movieList.map((list, index)=> (
            
           <MovieRow key={index} title={list.title} items={list.items}/>

            ))}
        </section>
    </div>
  )
}

export default App;
import React from "react";
import MovieRow from "./components/MovieRow";
import FeatureMovie  from "./components/FeatureMovie";
import Tmdb from "./Tmdb";
import { CategoryMovies } from "./types/AllList";
import { FeatureMovieType } from "./types/FeatureMovie";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LoadingContainer } from "./GlobalStyles";


const App = () => {

  const [movieList, setMovieList] = React.useState<Array<CategoryMovies>>([]);
  const [featureData, setFeatureData] = React.useState<FeatureMovieType>();
  const [blackHeader, setBlackHeader] = React.useState(false);
  const { getHomeList } = Tmdb

  React.useEffect(()=>{
    const loadAll = async () =>{
        let list = await getHomeList();
        setMovieList(list)
        

        let originals = list.filter(i=> i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFeatureData(chosenInfo);
    }

    loadAll();
  },[])

  React.useEffect(()=>{
      const scrollListener = ()=>{
        if(window.scrollY > 10){
          setBlackHeader(true);
        }
        else{
          setBlackHeader(false);
        }
      }
      window.addEventListener('scroll', scrollListener)
      return () =>{
        window.removeEventListener('scroll', scrollListener)
      }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featureData && 
      <FeatureMovie data={featureData}/>}
        <section className="lists">
          {movieList.map((list, index)=> (
            
           <MovieRow key={index} title={list.title} items={list.items}/>

            ))}
        </section>
        <Footer />
        {
        movieList.length <= 0 &&         
        <LoadingContainer>
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Carregando" />
        </LoadingContainer>
        }
    </div>
  )
}

export default App;
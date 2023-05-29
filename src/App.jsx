import './App.css'
import TV from './api/tv';
import Details from './components/details/Details';
import RecoList from './components/recolist/RecoList';
import SearchBar from './components/searchbar/SearchBar';

import Logo from './components/logo/Logo';
import logo from './assets/logo.png';

import { useEffect, useState } from 'react';

function App() {
  const [current, setCurrent] = useState();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getPopulars();
  }, []);

  useEffect(() => {
    if (current){
      getRecommendations(current.id);
    }
  }, [current]);

  async function getPopulars(){
    const populars = await TV.Populars();
    if (populars.length > 0){
        setCurrent(populars[0]);
      }
    }

  async function getRecommendations(currentId){
    const recommendations = await TV.Reco(currentId);
      if (recommendations.length > 0){
        setRecommendations(recommendations.slice(0,10));
      }
    }

  async function searchSerie(name){
    const res = await TV.searchSerie(name);
    if (res.length > 0) {
      setCurrent(res[0]);
    }
  }

  const IMG_URL = import.meta.env.VITE_IMG_URL;

  return (
    <>
      <main style={{
        background: current &&
          `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${IMG_URL}${current.backdrop_path}") no-repeat center / cover`
      }}>
        <header>
          <div className='row'>
            <div className='col-7 col-sm-6 col-md-4'>
              <Logo image={logo} titre='StopRegarde' subtitle='Le top des séries à la Reunion!'/>
            </div>
            <div className='col-12 col-sm-6 col-md-4'>
              <SearchBar onSubmit={searchSerie} />
            </div>
          </div>
        </header>

        <article>
          {current && <Details details={current} />}
        </article>
        
        <section>
          { recommendations && (recommendations.length > 0) && (<RecoList onClickItem={setCurrent} list={recommendations}/>) }
        </section>
      </main>
    </>
  )
}

export default App

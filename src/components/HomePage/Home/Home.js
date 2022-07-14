import React, {useEffect, useState} from 'react'; 
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {

  const [movies,setMovies] = useState([]); 
  const limit = 30;

  useEffect(() =>{
    fetchMovies();
    console.log(limit)
  }, [limit]);

  const movieURL = 'https://api.tvmaze.com/shows';

  const fetchMovies = () =>{
    fetch(movieURL)
    .then((res) =>
        res.json()) 
    .then((response) => {
        
         setMovies(response);
        setTimeout(() => { 
        }, 1500);
    })
};


  return (
     <>
        <div className="container movie-cards-section no-mini-banners">
            <div className="row">
                <div className="col-md-12"> 
                  <h2 className='thin-text'>Latest Movies & TV</h2>
                </div>
            </div>
            <div className="main-box"> 
                {movies.slice(0,limit).map((movie,key) =>{
                  return( 
                    <div className="movie-details" key={key}> 
                      <div className="movie-box"> 
                        <Link to="/details">
                          <div className="image-container">
                          <img src={movie.image.medium} alt="" />
                          </div>
                        </Link>
                      </div>  
                    <p className='movie-text'>{movie.name}</p> 
                    </div>  
                  )
                })} 
            </div>
        </div>
     </>
  )
}

export default Home
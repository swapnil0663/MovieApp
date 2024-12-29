import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { BASE_URL } from '../utils/BaseUrl';


export default function Banner(){
    const [trendingMovie,serTrendingMovie] = useState(null);

   useEffect (() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=14915bb7694a0701b51a3b7146b944e2')
    .then(function(res){
        let randomMovies = res.data.results[Math.floor(Math.random()*20)];
        serTrendingMovie(randomMovies);
    })
   },[]);

    if(!trendingMovie) {
        return (<h1> .... Loading</h1>)
    }

    return (
        <div className="relative ">
            <img  className="h-[32rem] w-3/4 rounded-[2rem] flex items-self-center justify-self-center" alt="Image Not Found " src={BASE_URL + trendingMovie.backdrop_path} />
            <p className="bg-[#111827b3] w-full text-center absolute left-[50%] h-14 bottom-0 text-white text-5xl translate-x-[-50%]">{trendingMovie.title}</p>

        </div>
    )
}
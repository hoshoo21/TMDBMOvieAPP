import axios from 'axios';
import {instance} from '../../apihelper/MovieApi';

const BASE_URL = 'https://scabbardless-nell-fashionably.ngrok-free.dev';


export const searchCast = async(dispatch, getState, movie_id)=>{
    try {
        console.log("fetching movie cast ");
        console.log( `${BASE_URL}/api/movies/getMovieCredits?movie_id=${movie_id}`);
        const res = await axios.get(`${BASE_URL}/api/movies/getMovieCredits?movie_id=${movie_id}`);
        
        dispatch({type:'SET_MOVIE_CAST', 
                    payload:{
                       cast :res.data.cast,
                       movie_id:movie_id,
                       crew :res.data.crew,
                    }
                });


    }
    catch(error){
        console.log("fetching error");
        dispatch({type :'SET_ERROR', payload:error.message});
    }
}
import axios from 'axios';

const BASE_URL =  'https://scabbardless-nell-fashionably.ngrok-free.dev';

export const getMovieGenres = async (dispatch, getState)=>{

    try {
        console.log('fetching genres');
        const res = await axios.get(`${BASE_URL}/api/movies/getGenres`);
        dispatch({
            type :'SET_GENRE_RESULTS',
            payload :{
                data :res.data.genres
            }
        });
    }
    catch(error){
        console.log(error);
    }
}

export const getMoviesByGenre=async (dispatch, getState,genreId, page )=>{
    try {
        console.log('fethcing movies by genere'+genreId);
        const res = await axios.get(`${BASE_URL}/api/movies/getgenremovies?genreid=${genreId}&page=${page}`);
        console.log(res);
        dispatch({
            type :'SET_GENRE_MOVIES',
            payload :{
                page,
                results:res.data.results,
                total_pages:res.data.total_pages,
                total_results:res.data.total_results,
            }
        })
    }
    catch(error){
        console.log(error);
    }
}
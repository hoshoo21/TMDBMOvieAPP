import axios from 'axios';
import {instance} from '../../apihelper/MovieApi';

const BASE_URL = 'https://scabbardless-nell-fashionably.ngrok-free.dev';

export const resetSearch = async(dispatch) =>{
    dispatch({type:'RESET_SEARCH'});
}
export const searchAction = async(dispatch, getState, query, page)=>{
    const cachedPage = getState().search_results.data[page];
    try {
        console.log("fetching of search ");
        console.log( `${BASE_URL}/api/movies/search?query=${query}&page=${page}`);
        const res = await axios.get(`${BASE_URL}/api/movies/search?query=${query}&adult=true&page=${page}`);
        dispatch({type:'SET_LOADING'});
        dispatch({type:'SET_SEARCH_RESULTS', 
                    payload:{
                        page,
                        search_results:res.data.results, 
                        total_pages : res.data.total_pages,
                        total_results :res.data.total_results
                    }
                });


    }
    catch(error){
        console.log("fetching error");
        dispatch({type :'SET_ERROR', payload:error.message});
    }
}
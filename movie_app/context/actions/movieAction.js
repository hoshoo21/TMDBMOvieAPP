import {instance} from '../../apihelper/MovieApi.js';
export const fetchMovies = async (dispatch) =>{
        try {
            dispatch({type:'SET_LOADING'});
            console.log(`/api/movies/search?query=${query}&page=${page}`);
            const resp = await instance.get(`/api/movies/search?query=${query}&page=${page}`);

            console.log(resp.data.total_results)
            dispatch({type:'SET_MOVIES', 
                    payload:resp.data.results, 
                });
            }
            catch(error){
               dispatch({type:'SET_ERROR', payload:error.message});     
            }
        
        
};
import createDataContext from "./createDataContext";
import instance from "../apihelper/MovieApi";

const movieReducer =(state, action)=>{
    switch(action.type){
        case "List_Movies":
            return {
                ...state,
                movies: [...state.movies, ...action.payload], // append new results
                page: action.page,
                total_results:action.total_results // store current page
              };
        case "RESET_MOVIES":
            return { ...state, movies: [], page: 1, query: "" };
        default :
            return state;
    }
}

const listMovies=(dispatch)=>{
    return async (query, page)=>{
        
         try{
            
            console.log(`/api/movies/search?query=${query}&page=${page}`);
            const resp = await instance.get(`/api/movies/search?query=${query}&page=${page}`);

            dispatch({type:'List_Movies', 
                payload:resp.data.results, 
                page:page,
                total_results:resp.data.total_results});
        
            }
        
            catch(err){
                console.log(err);
            }
    }
}
const resetMovies =(dispatch)=>{
    return async ()=>{
        dispatch({type:'RESET_MOVIES'});
       
    }
}

export const {Provider, Context}=createDataContext(movieReducer,{listMovies,resetMovies}, {movies:[],page: 1, total_results: 0 });
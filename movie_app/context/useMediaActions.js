import { useContext } from "react";
import { MediaContext } from "./mediaContext";
import { searchAction , resetSearch} from "./actions/searchAction";
import {searchCast} from './actions/castAction';
import { searchActor } from "./actions/actorAction";
import {getMovieGenres,getMoviesByGenre} from './actions/genreAction';
import { searchSimilar } from "./actions/similarMovieAction";
export const useMediaActions =(query,page)=>{
    const {dispatch,state} = useContext(MediaContext);

    return {
        searchAction: (query,page=1)=> searchAction(dispatch,()=>state, query, page),
        resetSearch : () =>  resetSearch(dispatch),
        searchCast: (movie_id)=>searchCast(dispatch, ()=> state, movie_id ),
        searchActor : (name, id,page)=> searchActor (dispatch, ()=> state, name, id, page  ),
        getMovieGenres :() => getMovieGenres(dispatch, ()=>state),
        getMoviesByGenre: (genreId, page=1)=>getMoviesByGenre(dispatch,()=>state, genreId, page),
        searchSimilar : (id, page= 1) => searchSimilar(dispatch, ()=> state, id, page),
    }
}
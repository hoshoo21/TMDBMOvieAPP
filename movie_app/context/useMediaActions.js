import { useContext } from "react";
import { MediaContext } from "./mediaContext";
import { searchAction , resetSearch} from "./actions/searchAction";
import {searchCast} from './actions/castAction';
export const useMediaActions =(query,page)=>{
    const {dispatch,state} = useContext(MediaContext);

    return {
        searchAction: (query,page=1)=> searchAction(dispatch,()=>state, query, page),
        resetSearch : () =>  resetSearch(dispatch),
        searchCast: (movie_id)=>searchCast(dispatch, ()=> state, movie_id ),
    }
}
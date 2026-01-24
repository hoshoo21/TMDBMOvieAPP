import { useContext } from "react";
import { MediaContext } from "./mediaContext";
import { searchAction , resetSearch} from "./actions/searchAction";
export const useMediaActions =(query,page)=>{
    const {dispatch,state} = useContext(MediaContext);

    return {
        searchAction: (query,page=1)=> searchAction(dispatch,()=>state, query, page),
        resetSearch : () =>  resetSearch(dispatch),
    }
}
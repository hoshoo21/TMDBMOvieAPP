import { createContext,useReducer } from "react";

import { mediaReducer } from "./mediaReducer";


const initialState = {
   search_results:{
    data: {},        // { pageNumber: [movies] }
    total_pages: 0,
    total_results:0,
      
    loading: false,
    error: null,
    },
    movie_details: {}
};

export const MediaContext =createContext(initialState);

export const MediaProvider = ({children})=>{
    const [state, dispatch] = useReducer(mediaReducer,initialState);
    return (
        <MediaContext.Provider value = {{state, dispatch}}>
            {children}
        </MediaContext.Provider>

    )
}

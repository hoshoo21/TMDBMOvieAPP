import axios from "axios";

const BASE_URL = 'https://scabbardless-nell-fashionably.ngrok-free.dev';

export const searchSimilar = async (dispatch, getState, id, page)=>{

    try {
        console.log(`${BASE_URL}/api/movies/getsimilarmovies?page=${page}&id=${id}`);

        const res = await axios.get(`${BASE_URL}/api/movies/getsimilarmovies?page=${page}&id=${id}`);
        console.log(res.data);
        dispatch({type:'SET_SIMILAR_MOVIES', 
                    payload:{
                        page,
                        results :res.data.results,
                       id:id,

                    }
                });


    }
    catch(error){
        console.log("fetching error");
        dispatch({type :'SET_ERROR', payload:error.message});
    }

    //SET_ACTOR_DETAILS
    // ...state,
    // actor_detail: {
    //     ...state.actor_detail,
    //     [action.payload.id]: {
    //         ...state.movie_details[action.payload.id], 
    //         cast: action.payload.movies,
    //         details :action.payload.details?action.payload.details:state.movie_details[action.payload.id].details,
    //         movies_loading: true
    //     }
    // }

}
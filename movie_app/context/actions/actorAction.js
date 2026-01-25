import axios from "axios";

const BASE_URL = 'https://scabbardless-nell-fashionably.ngrok-free.dev';

export const searchActor = async (dispatch, getState, name, id, page)=>{

    try {
        console.log("fetching actor details");
        const res = await axios.get(`${BASE_URL}/api/movies/getmoivesbyActor?name=${name}&page=${page}&id=${id}`);
        dispatch({type:'SET_ACTOR_DETAILS', 
                    payload:{
                        movies :res.data.movies,
                       id:id,
                       details :res.data.details,
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
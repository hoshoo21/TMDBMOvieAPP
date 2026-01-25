
export const mediaReducer = (state, action) => {
  switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          search_results: {
            ...state.search_results,
            loading: true,
          },
        };
  
      case "SET_ERROR":
        return {
          ...state,
          search_results: {
            ...state.search_results,
            loading: false,
            error: action.payload,
          },
        };
  
      case "RESET_SEARCH":
        return {
          ...state,
          search_results: {
            ...state.search_results,
            data: {}, // clear cached pages
            loading: false,
            error: null,
            total_pages: 0,
            total_results: 0,
          },
        };

      case "SET_MOVIE_CAST":
       
        return{
            ...state,
            movie_details: {
                ...state.movie_details,
                [action.payload.movie_id]: {
                    ...state.movie_details[action.payload.movie_id], 
                    cast: action.payload.cast,
                    crew :action.payload.crew,
                    cast_loaded: true
                }
            }
        

        } 
       
        case "SET_ACTOR_DETAILS":
       
        return{
            ...state,
            actor_detail: {
                ...state.actor_detail,
                [action.payload.id]: {
                    movies: action.payload.movies,
                    details :action.payload.details,
                    movies_loading: false
                }
            }
        

        } 
         
      case "SET_SEARCH_RESULTS":
        return {
          ...state,
          search_results: {
            ...state.search_results,
            loading: false,
            data: {
              ...state.search_results.data,
              [action.payload.page]: action.payload.search_results,
            },
            total_pages: action.payload.total_pages,
            total_results: action.payload.total_results,
          },
        };
  
      default:
        return state;
    }
  };
  
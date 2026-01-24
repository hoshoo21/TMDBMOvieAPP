
export const mediaReducer = (state, action) => {
    console.log(action);
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
  
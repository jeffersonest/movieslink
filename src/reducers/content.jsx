const initialState = {
    content_name : '',
    isPending: false,
    error: false,
    data: {
      total_pages : null,
      total_results: null,
      results: [],
      page: 1,
      next_page: null,
      prev_page: null
    }
};

const contentReducer = (state = initialState, action) => {     
  switch (action.type) {
    case "CONTENT_REQUEST_PENDING":
      return (state = {...state, isPending: true, error: false});
    case "CONTENT_REQUEST_SUCCESS":
      return (state = {...state, isPending: false, error: false});
    case "CONTENT_REQUEST_ERROR":
    return (state = {...state, error: true});
    case "CONTENT_REQUEST_DATA":
      return (state = { ...state, data: action.payload });
    case "CONTENT_SEARCH_TEXT":
      return (state = { ...state, content_name: action.payload });
    default:
      return (state);
  }
};

export default contentReducer;

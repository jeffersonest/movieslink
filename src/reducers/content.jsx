const initialState = {
  content: {
    content_name : '',
    isPending: false,
    data: {
      results: []
    }
  }
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONTENT_REQUEST_PENDING":
      return (state.content.isPending = true);
    case "CONTENT_REQUEST_SUCCESS":
      return (state.content.isPending = false);
    case "CONTENT_REQUEST_DATA":
      return (state.content = { ...state, data: action.payload });
    case "CONTENT_SEARCH_TEXT":
      return (state.content = { ...state, content_name: action.payload });
    default:
      return (state.content = initialState.content);
  }
};

export default contentReducer;

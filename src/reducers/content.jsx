const initialState = {
    content: {
        isPending: false,
        data: {}
    }
};

const contentReducer = (state = initialState, action) => {
    switch (action) {
        case 'CONTENT_REQUEST_PENDING':
            return state.content.isPending = true
        case 'CONTENT_REQUEST_SUCCESS':
            return state.content.isPending = false
        case 'CONTENT_REQUEST_DATA':
            return state.content.data = action.payload
        default:
            return state.content = initialState.content
    }
}

export default contentReducer
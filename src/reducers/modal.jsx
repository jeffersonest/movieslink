const initialState = {
        genre_text : '',
        isOpen : false,
        contentInfo : {
            genre_ids : []
        }
};

const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_GENRES' :
            return (state = {...state, genre_text: action.payload})
        case 'OPEN_MODAL':
            return (state = {...state, isOpen: true, genre_text: '', contentInfo: action.payload})
        case 'CLOSE_MODAL':
            return (state = {...state, genre_text: '', isOpen: false})
        default:
            return (state)         
    }
}

export default modalReducer
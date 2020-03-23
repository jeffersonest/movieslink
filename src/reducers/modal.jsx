const initialState = {
    modal : {
        isOpen : false,
        contentInfo : {}
    }
};

const contentReducer = (state = initialState, action) => {
    switch(action.type){
        case 'OPEN_MODAL':
            return state.modal = {...state, isOpen: true}
        case 'CLOSE_MODAL':
            return state.modal = {...state, isOpen: false}
        case 'MODAL_DATA':
            return state.contentInfo = {...state, contentInfo: action.payload}
        default:
            return state = initialState.modal          
    }
}

export default contentReducer
export const openModal = (payload) => {
    return {
        type: 'OPEN_MODAL',
        payload
    }
}

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
    }
}

export const fetchGenres = (payload) => {
    return {
        type: 'FETCH_GENRES',
        payload
    }
}
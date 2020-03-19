export const openModal = (data) => {
    return {
        type: 'OPEN_MODAL',
        payload: data
    }
}

export const closeModal = (data) => {
    return {
        type: 'CLOSE_MODAL',
        payload: data
    }
}

export const modalData = (data) => {
    return {
        type: 'MODAL_DATA',
        payload: data
    }
}
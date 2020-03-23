export const openModal = () => {
    return {
        type: 'OPEN_MODAL',
    }
}

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
    }
}

export const modalData = (data) => {
    return {
        type: 'MODAL_DATA',
        payload: data
    }
}
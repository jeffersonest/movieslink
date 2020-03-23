export const contentRequestPending = () => {
    return {
        type: 'CONTENT_REQUEST_PENDING'
    }
}

export const contentRequestSuccess = () => {
    return {
        type: 'CONTENT_REQUEST_SUCCESS'
    }
}

export const contentRequestData = (data) => {
    return {
        type: 'CONTENT_REQUEST_DATA',
        payload: data
    }
}
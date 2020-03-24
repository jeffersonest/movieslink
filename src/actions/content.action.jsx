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

export const contentRequestData = (payload) => {
    return {
        type: 'CONTENT_REQUEST_DATA',
        payload
    }
}

export const contentSearchText = (payload) => {
    return {
        type: 'CONTENT_SEARCH_TEXT',
        payload
    }
}

export const contentRequestError = () => {
    return {
        type: 'CONTENT_REQUEST_ERROR'
    }
}
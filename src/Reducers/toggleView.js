const toggleViewReducer = (state = "preview", action) => {
    switch (action.type) {
        case 'TOGGLEVIEW':
            console.log('in reducer', action.payload)
            return action.payload
        default: 
            return state
    }
}

export default toggleViewReducer
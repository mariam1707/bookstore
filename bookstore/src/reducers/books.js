const initState = {
    books: '',
    message: ''
}
export default function (state = initState, action) {
    switch (action.type) {
        case "FETCH":
            return {
                ...state,
                books: action.payload
            }
        default: return state;
    }
}
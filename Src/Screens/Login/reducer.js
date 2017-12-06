const defaultState = {
isLoggedIn: false,
data: 'searchData',
}

export default function loginreducer(state = defaultState,action) {
    switch(action.type) {
        case 'LoginSuccess':
        return {
            isLoggedIn: true,
            data: action.data,
        };
        case 'LoginFaliure': 
        return {
                isLoggedIn: fasle,
                error: action.error
        };
        default: return state
    }
}


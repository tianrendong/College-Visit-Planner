const initialState = {
    loginForm: {},
    loggingIn: false,
    loggedIn: false,
    signingUp: false,
    signedUp: false,
    error: '',
    user: null,
    dataConsent: false,
    
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "LOGIN_FORM_CHANGE":
        //     console.log(action.payload.item);
        //     return {
        //         ...state,
        //         loginForm: {action.payload.item: action.payload.value],
        //         error: ''
        //     };
        case "LOGIN_REQUEST":
            return {
                loggingIn: true,
                error: ''
            };
        case "LOGIN_SUCCESS":
            console.log(action.payload);
            return {
                loggingIn: false,
                loggedIn: true,
                user: action.payload.user,
                error: ''
            };
        case "LOGIN_FAILURE":
            console.log(action.payload);
            return {
                loggingIn: false,
                loggedIn: false,
                error: action.payload.error,
                user: null
            };
        case "LOGOUT":
            return {
                loggedIn: false,
                signedUp: false,
                user: null,
            };
        case "SIGNUP_REQUEST":
            return { 
                signingUp: true,
                error: ''
             };
        case "SIGNUP_SUCCESS":
            return { 
                signingUp: false, 
                signedUp: true,
                error: ''
            };
        case "SIGNUP_FAILURE":
            return { 
                signingUp: false,
                error: action.payload.error,
            };
        default:
            return state
    }
}

export default userReducer;
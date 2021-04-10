const initialState = {
    loggedIn: false,
    updatingRoute: false,
    signingUp: false,
    signedUp: false,
    error: '',
    user: null,
    clusterUpdated: false,
    routesUpdated: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_FORM_CHANGE":
            console.log(action.payload.item);
            return {
                ...state,
                loginForm: { [action.payload.item]: action.payload.value },
                error: ''
            };
        case "LOGIN_SUCCESS":
            return {
                loggingIn: false,
                loggedIn: true,
                user: action.payload.user,
                error: '',
                clusterUpdated: action.payload.user.hasOwnProperty("route"),
                routesUpdated: action.payload.user.hasOwnProperty("route") ? Array(action.payload.user.route.length).fill().map((x,i)=>i) : [],
            };
        case "LOGIN_FAILURE":
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
                error: '',
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
        case "NAVIGATE_SIDEBAR":
            return {
                ...state,
                error: ''
            };
        case "NAVIGATE_INFOBAR":
            return {
                ...state,
                error: ''
            };
        case "UPDATE_ROUTE":
            return {
                ...state,
                error: '',
                user: {
                    ...state.user,
                    route: action.payload.route,
                },
                updatingRoute: false,
            };
        case "REQUEST_ADD_COLLEGE":
            return {
                ...state,
                error: '',
            }
        case "ADD_COLLEGE":
            console.log(action);
            if (state.user.hasOwnProperty("colleges")) {
                console.log("b")
                return {
                    ...state,
                    clusterUpdated: false,
                    routesUpdated: [],
                    user: {
                        ...state.user,
                        colleges: [...state.user.colleges, action.payload.newCollege],
                    }
                };
            } else {
                console.log("c")
                return {
                    ...state,
                    user: {
                        ...state.user,
                        colleges: [action.payload.newCollege],
                    }
                };
            }
        case "DELETE_COLLEGE":
            console.log(action);
            return {
                ...state,
                clusterUpdated: false,
                routesUpdated: [],
                user: {
                    ...state.user,
                    colleges: [...state.user.colleges.filter(c => c.id !== action.payload.deletedCollegeID)],
                }
            };
        case "ERROR":
            return {
                ...state,
                error: action.payload.error,
            };
        case "REQUEST_UPDATE_ROUTE": {
            return {
                ...state,
                updatingRoute: true,
            }
        }
        case "DELETE_DATA":
            return {
                ...state,
                user: {
                    ...state.user,
                    route: [],
                    colleges: [],
                }

            }
        case "UPDATE_CLUSTERS":
            return {
                ...state,
                clusterUpdated: true,
                routesUpdated: action.payload ? [] : state.routesUpdated,
                user: {
                    ...state.user,
                    route: action.payload ? action.payload.clusters : state.user.route
                }
            }
        default:
            return state
    }
}

export default userReducer;
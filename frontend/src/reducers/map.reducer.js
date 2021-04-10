const initialState = {
    mapRef: null,
    mapsRef: null,
    defaultColleges: '',
    viewport: 'default',
    selectedCluster: '',
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ON_LOADED":
            return {
                ...state,
                mapRef: action.payload.map,
                mapsRef: action.payload.maps
            };
        case "RENDER_DEFAULT_COLLEGES":
            console.log(action);
            return {
                ...state,
                defaultColleges: action.payload.defaultColleges
            };
        case "UPDATE_ROUTE":
            return {
                ...state,
                selectedCluster: '',
                viewport: 'clusters',
            };
        case "EXPAND_CLUSTER":
            console.log(action.payload.clusterIndex)
            return {
                ...state,
                selectedCluster: action.payload.clusterIndex,
                viewport: 'zoomedIn',
            };
        case "LOGOUT":
            return {
                ...state,
                selectedCluster: '',
                viewport: 'default',
            };
        case "NAVIGATE_BACK":
            return {
                    ...state,
                    selectedCluster: '',
                    viewport: action.payload.viewport,
                };
        default:
            return state
    }
}

export default mapReducer;
const initialState = {
    loading: true,
    error: '',
    issues: [],
    comments: [],
};

const issueReducer = (state, action) => {
    console.log(action.type, 'action comment');
    switch (action?.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                issues: action.payload,
                comments: [],
                error: '',
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                error: 'Oops! Something went wrong',
                issues: [],
                loading: false,
            };
        default:
            return state;
    }
};

export { initialState, issueReducer };

const issueDetails = {
    loading: true,
    error: '',
    details: [],
    comments: [],
};

const issueDetailsReducer = (state, action) => {
    console.log(action, 'act comment');
    switch (action?.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                details: action?.payload,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                error: 'Ooops! Something went wrong',
                loading: false,
                details: [],
                comments: [],
            };
        case 'FETCH_COMMENT_SUCCESS': {
            return {
                ...state,
                comments: action.payload,
                loading: false,
                error: '',
            };
        }
        default:
            return state;
    }
};

export { issueDetails, issueDetailsReducer };

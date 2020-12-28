import * as UIType from '../constants/ui';

const initialState = {
    showLoading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UIType.SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            }
        case UIType.HIDE_LOADING:
            return {
                ...state,
                showLoading: false
            }
        default: 
            return state
    }
}

export default reducer;

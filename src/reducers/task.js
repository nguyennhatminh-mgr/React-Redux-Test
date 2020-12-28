import * as TaskConstant from '../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
    listTask: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TaskConstant.FETCH_TASK:
            return {
                ...state,
                listTask: []
            }
        case TaskConstant.FETCH_TASK_SUCCESS:
            const {data} = action.payload;
            return {
                ...state,
                listTask: data
            }
        case TaskConstant.FETCH_TASK_FAILED:
            const {error} = action.payload;
            toastError(error);
            return {
                ...state,
                listTask: []
            }
        case TaskConstant.FILTER_TASK_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state,
                listTask: data
            }
        }
        default:
            return state;
    }
}

export default reducer;
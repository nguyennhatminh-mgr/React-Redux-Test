import * as TaskAPI from '../apis/task';
import * as TaskConstants from "../constants/task";

export const fetchListTask = () => {
    return {
        type: TaskConstants.FETCH_TASK
    }
}

export const fetchListTaskSuccess = (data) => {
    return {
        type: TaskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListTaskFailed = (error) => {
    return {
        type: TaskConstants.FETCH_TASK_FAILED,
        payload: {
            error
        }
    }
}

// For redux thunk

// export const fetchListTaskRequest = () => {
//     return dispatch => {
//         dispatch(fetchListTask());
//         TaskAPI.getList()
//         .then(resp => {
//             const {data} = resp;
//             dispatch(fetchListTaskSuccess(data));
//         })
//         .catch(err => {
//             dispatch(fetchListTaskFailed(err));
//         })
//     }
// }

export const filterTask = keyword => ({
    type: TaskConstants.FILTER_TASK,
    payload: {
        keyword
    }
});

export const filterTaskSuccess = data => ({
    type: TaskConstants.FILTER_TASK_SUCCESS,
    payload: {
        data
    }
});
import {fork, take, call, put, delay, takeLatest, select} from 'redux-saga/effects';
import * as TaskType from '../constants/task';
import {STATUS_CODE} from '../constants/index';

import {getList} from '../apis/task';

import {fetchListTaskSuccess, fetchListTaskFailed, filterTaskSuccess} from '../actions/task';
import {showLoading, hideLoading} from '../actions/ui';

// Blocking: take, call, delay
// Non blocking: fork, put

function * watchFetchListTaskAction() {
    while(true) {
        yield take(TaskType.FETCH_TASK);
        yield put(showLoading());
        const resp = yield call(getList);
        const {status, data} = resp;
        if(status === STATUS_CODE.SUCCESS){
            // dispatch action fetch list task success
            yield put(fetchListTaskSuccess(data));
        }
        else{
            // dispatch action fetch list task failed
            yield put(fetchListTaskFailed(data));
        }
        yield delay(1000);
        yield put(hideLoading());
    }
}

function * watchCreateTaskAction() {
    yield 0;
    console.log("Watch create task action");
}

function * filterTaskSaga({payload}) {
    yield delay(500);
    const {keyword} = payload;
    const list = yield select(state => state.task.listTask);
    const filteredTask = list.filter(task => 
        task.title
        .trim()
        .toLowerCase()
        .includes(keyword.trim().toLowerCase()));
    yield put(filterTaskSuccess(filteredTask));
}

function * rootSaga(){
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
    yield takeLatest(TaskType.FILTER_TASK, filterTaskSaga);
}

// takeLatest: cancel progress of the old action when the new action is started 
// takeEvery: run immediately if is activated; whenever it is called, it will run; regardless previous action is done or not.
// select: get data from store

export default rootSaga;
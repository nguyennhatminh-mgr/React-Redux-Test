import AxiosService from '../commons/axiosService';

import {API_ENDPOINT} from '../constants/index';

const url = "/tasks";

export const getList = () => {
    return AxiosService.get(`${API_ENDPOINT}${url}`);
}
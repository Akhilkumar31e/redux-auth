import axios from 'axios';
import config from '../../config/default'
import { apiCallRequested } from '../authAPI';
const api = ({dispatch, getState}) => next => async action => {
    if(action.type !== apiCallRequested.type){
        next(action);
        return;
    }
    next(action);

    const {url, method, data, onSuccess, onError} = action.payload;
    try{
        const response = await axios.request({
            baseURL: config.auth.baseURL,
            url,
            method,
            data
        })
        dispatch({type: onSuccess, payload: {userName: 'tarun'}});
    } catch(e){
        dispatch({type: onError, payload: e.message});
    }
};

export default api;
import axios from 'axios';
import config from '../../config/default'
const api = ({dispatch, getState}) => next => async action => {
    if(action.type !== 'makeAPICall'){
        next(action);
        return;
    }
    next(action);

    const {url, method, data, onSuccess, onError} = action.payLoad;
    try{
        const response = await axios.request({
            baseURL: config.auth.baseURL,
            url,
            method,
            data
        })
        dispatch({type: onSuccess, payload: {userName: 'tarun'}});
    } catch(e){
        dispatch({type: onError, payload: e});
    }
};

export default api;
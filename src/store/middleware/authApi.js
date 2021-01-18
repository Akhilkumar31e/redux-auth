import axios from axios;

const api = ({dispatch, getState}) => next => action => {
    if(action !== 'makeAPICall'){
        next(action);
    }
    next(action);

    const {url, method, data, onSuccess, onError} = action.payLoad;
    try{
        const response = await axios.request({
            baseURL: '',
            url,
            method,
            data
        })
        dispatch({type: onSuccess, payLoad: response.data});
    } catch(e){
        dispatch({type: onError, payLoad: e});
    }
};

export default api;
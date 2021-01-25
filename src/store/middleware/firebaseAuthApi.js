import { firebaseAuth } from '../firebaseAuthAPI';
import firebase from 'firebase/app';
import "firebase/auth";

const firebaseApi = ({dispatch, getState}) => next => async action => {
    if(action.type !== firebaseAuth.type){
        next(action);
        return;
    }
    next(action);

    const {url, method, data, onSuccess, onError} = action.payload;
    switch(url){
        case '/login': {
            firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((userCredential) => {
                const user = userCredential.user;
                dispatch({type: onSuccess, payload: {
                    userName: user.email
                }});
            }).catch((error) => {
                dispatch({type: onError, payload: {
                    userName: error.message
                }});
            });
            break;
        }
        case '/signup': {
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((userCredential) => {
                const user = userCredential.user;
                dispatch({type: onSuccess, payload: {
                    userName: user.email
                }});
            }).catch((error) => {
                dispatch({type: onError, payload: {
                    userName: error.message
                }});
            });
            break;
        }
        case '/logout': {
            firebase.auth().signOut().then(() => {
                dispatch({type: onSuccess});
            }).catch((error) => {
                dispatch({type: onError, payload: {
                    userName: error.message
                }});
            });
            break;
        }
        default: 
            console.log('Authentication method not supported');
            break;
    }
};

export default firebaseApi;
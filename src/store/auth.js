import {createSlice} from '@reduxjs/toolkit';
import { apiCallRequested } from './authAPI';

const slice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        userLoggedIn: (user, action) => {
            return {...user, userName: action.payload.userName};
        },
        userLoggedOut: (user, action) => {
            return user;
        },
        userAuthError: (user, action) => {
            return user;
        },
        userSignUp: (user, action) => {
            return {...user, userName: action.payload.userName};
        }
    }
});

export const {userLoggedIn, userLoggedOut, userSignUp, userAuthError} = slice.actions;

export default slice.reducer;

export const logInUserWithEmail= (email, password) => {
    return apiCallRequested({
        url: '/login',
        method: 'POST',
        data: {
            email: email,
            password: password
        },
        onSuccess: slice.actions.userLoggedIn.type,
        onError: slice.actions.userLoggedOut.type
    });
}
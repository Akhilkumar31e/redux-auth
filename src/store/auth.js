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
        userSignUp: (user, action) => {
            
        }
    }
});

export const {userLoggedIn, userLoggedOut, userSignUp} = slice.actions;

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
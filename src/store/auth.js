import {createSlice} from '@reduxjs/toolkit';


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

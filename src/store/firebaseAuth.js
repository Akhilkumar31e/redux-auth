import { firebaseAuth } from "./firebaseAuthAPI";
import { userLoggedIn, userLoggedOut, userAuthError, userSignUp } from "./auth";

export const logInUserWithEmail= (email, password) => {
    return firebaseAuth({
        url: '/login',
        data: {
            email: email,
            password: password
        },
        onSuccess: userLoggedIn.type,
        onError: userAuthError.type
    });
}

export const signupUserWithEmail = (email, password) => {
    return firebaseAuth({
        url: '/signup',
        data: {
            email: email,
            password: password
        },
        onSuccess: userSignUp.type,
        onError: userAuthError.type
    });
}

export const logoutUser = (email, password) => {
    return firebaseAuth({
        url: '/logout',
        onSuccess: userLoggedOut.type,
        onError: userAuthError.type
    });
}


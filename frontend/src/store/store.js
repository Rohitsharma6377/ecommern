import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';

const store = configureStore({
    reducer: { // Corrected typo here
        auth: authReducer,
    },
});

export default store;

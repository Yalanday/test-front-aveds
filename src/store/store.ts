import {configureStore} from "@reduxjs/toolkit";
import isAuthenticateReducer from "./is-authenticated-slice";
import usersReducer from "./users-slice";

const store = configureStore({
    reducer: {
        isAuthenticated: isAuthenticateReducer,
        users: usersReducer,
  },
})

export default store;

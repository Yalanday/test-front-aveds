import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TypeisAuthenticate = {
    isAuthenticated: boolean
};

const setValueAuth = (): boolean => {
    if (localStorage.getItem('authStatus') === 'true') {
        return true
    }
    return false
};

const initialState: TypeisAuthenticate = {
    isAuthenticated: setValueAuth()
};

const isAuthenticateSlice = createSlice({
    name: 'isAuthenticated',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload
        }
    }
});

const isAuthenticateReducer = isAuthenticateSlice.reducer;
export const {setIsAuthenticated} = isAuthenticateSlice.actions;
export default isAuthenticateReducer;

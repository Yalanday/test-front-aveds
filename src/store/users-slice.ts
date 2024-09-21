import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import '../mocks/users.json'
import {UsersType, UserType} from "../types/types";

const usersData = require('../mocks/users.json')

if (localStorage.getItem('users') === null && localStorage.getItem('currentUser') === null) {
    localStorage.setItem('users', JSON.stringify(usersData.users))
    localStorage.setItem('currentUser', JSON.stringify(usersData.current_user))
}

const userLocalStorage: string | null = localStorage.getItem('users');
const currentUserLocalStorage: string | null = localStorage.getItem('currentUser');

const setValueUsers = (json: string | null) => {
    if (json !== null) {
        return JSON.parse(json);
    }
    console.log(usersData.users)

    return usersData.users;
};

const initialState: UsersType = {
    users: setValueUsers(userLocalStorage),
    currentUser: setValueUsers(currentUserLocalStorage),
};

console.log(initialState)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserType[]>) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action: PayloadAction<UserType>) => {
            state.currentUser = action.payload
        }
    }
});

const usersReducer = usersSlice.reducer;
export const {setUsers, setCurrentUser} = usersSlice.actions;
export default usersReducer;

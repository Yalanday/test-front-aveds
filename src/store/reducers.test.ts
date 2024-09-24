import {setUsers, setCurrentUser} from "./users-slice";
import {setIsAuthenticated} from "./is-authenticated-slice";
import {UserType} from "../types/types";


describe('setUsers', () => {

    it('should return an action', () => {
        const action: ReturnType<typeof setUsers> = setUsers([{
            id: 1,
            username: 'John',
            login: 'john',
            password: 'password'
        }]);
        expect(action.type).toBe('users/setUsers');
        expect(action.payload).toEqual([{id: 1, username: 'John', login: 'john', password: 'password'}
        ]);
    })

    it('should return an action CurrentUser', () => {
        const user: UserType = {id: 6, username: 'Johna', login: 'johna', password: 'passworda'};
        const action: ReturnType<typeof setCurrentUser> = setCurrentUser({...user});
        expect(action.type).toBe('users/setCurrentUser');
        expect(action.payload).toEqual({id: 6, username: 'Johna', login: 'johna', password: 'passworda'});
    })

    it('should return an action IsAuthenticated', () => {
        const action: ReturnType<typeof setIsAuthenticated> = setIsAuthenticated(true);
        expect(action.type).toBe('isAuthenticated/setIsAuthenticated');
        expect(action.payload).toBe(true);
    })

    it('should return an action IsAuthenticated-2', () => {
        const action: ReturnType<typeof setIsAuthenticated> = setIsAuthenticated(false);
        expect(action.type).toBe('isAuthenticated/setIsAuthenticated');
        expect(action.payload).toBe(false);
    })
})

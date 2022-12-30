import userReducer, {INITIAL_USER_STATE} from "../userReducer"


describe('user reducer', () =>{

    it('shoi=uld return new state for login user action', () =>{
        const newState = userReducer(INITIAL_USER_STATE, {
            type: 'USER_LOGIN',
            payload:{
                token: 'jwt token'
            }
        });

        expect(newState).toEqual({
            ...INITIAL_USER_STATE,
            token:'jwt token'
        });
    })
})
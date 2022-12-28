import userReducer, {USER_IMITIAL_STATE} from "../userReducer"


describe('user reducer', () =>{

    it('shoi=uld return new state for login user action', () =>{
        const newState = userReducer(USER_IMITIAL_STATE, {
            type: 'USER_LOGIN',
            payload:{
                token: 'jwt token'
            }
        });

        expect(newState).toEqual({
            ...USER_IMITIAL_STATE,
            token:'jwt token'
        });
    })
})
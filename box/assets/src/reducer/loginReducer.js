import {fromJS} from 'immutable';

const initialState = {
    isLogging: false,
    loginResult: {
        msg:'',
        loginCode:true,
        signupCode:true
    }
};

function loginReducer(state = initialState, action) {

    switch (action.type) {

        case 'LOGIN_FETCH_START':
            return fromJS(state).set('isLogging', true).toJS();

        case 'LOGIN_FETCH_SUCCESS':
            let successMsg =action.payload;
            // console.log(successMsg)

            return fromJS(state).set('loginResult', successMsg)
                .set('isLogging', false)
                .toJS();

        case 'LOGIN_FETCH_FAILURE':
            let errorMsg = action.payload;
            return fromJS(state).set('isLogging', false).set('loginResult', errorMsg).toJS();

        default:
            return state;
    }

};


export default loginReducer

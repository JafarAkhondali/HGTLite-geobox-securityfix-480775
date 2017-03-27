import {fromJS} from 'immutable';

const initialState = {
    isLogining: false,
    loginResult: {
        msg:''
    }
};

function loginReducer(state = initialState, action) {

    switch (action.type) {

        case 'LOGIN_FETCH_START':
            return fromJS(state).set('isLogining', true).toJS();

        case 'LOGIN_FETCH_SUCCESS':
            let successMsg =action.payload;

            return fromJS(state).update('loginResult', successMsg)
                .set('isLogining', false)
                .toJS();

        case 'LOGIN_FETCH_FAILURE':
            let errorMsg = '登录失败';
            return fromJS(state).set('isLogining', false).toJS();

        default:
            return state;
    }

};



export default loginReducer

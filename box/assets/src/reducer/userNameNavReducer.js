import {fromJS} from 'immutable';

const initialState = {
    logged: false,
    userName:'请登陆'
};

function userNameNavReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_FETCH_SUCCESS':
            console.log(action.payload)
            let uName = action.payload.userName
            return fromJS(state).set('logged', true).set('userName',uName).toJS();
        case 'LOG_OUT':
            return fromJS(state).set('logged', false).set('userName','请登陆').toJS();
        default:
            return state;
    }
}

export default userNameNavReducer;

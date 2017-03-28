import {fromJS} from 'immutable';

const initialState = {
    isRegistering: false,
    registerResult: {
        msg:'',
        registerCode:true
    }
};

function registerReducer(state = initialState, action) {

    switch (action.type) {

        case 'REGISTER_FETCH_START':
            return fromJS(state).set('isRegistering', true).toJS();

        case 'REGISTER_FETCH_SUCCESS':
            let successMsg =action.payload;
            // console.log(successMsg)

            return fromJS(state).set('registerResult', successMsg)
                .set('isRegistering', false)
                .toJS();

        case 'REGISTER_FETCH_FAILURE':
            let errorMsg = action.payload;
            return fromJS(state).set('isRegistering', false).set('registerResult', errorMsg).toJS();

        default:
            return state;
    }

};


export default registerReducer

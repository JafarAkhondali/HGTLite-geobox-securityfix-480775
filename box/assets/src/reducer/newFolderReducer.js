import {fromJS} from 'immutable';

const initialState = {
    newFolderDisplay: 'none',
};

function newFolderReducer(state = initialState, action) {

    switch (action.type) {

        case 'NEW_FOLDER_FIRST':
            return fromJS(state).set('newFolderDisplay', 'block').toJS();

        case 'CANCEL_NEW_FOLDER':
            // let successMsg =action.payload;

            return fromJS(state).set('newFolderDisplay', 'none').toJS();

        // case 'LOGIN_FETCH_FAILURE':
        //     let errorMsg = action.payload;
        //     return fromJS(state).set('isLogging', false).set('loginResult', errorMsg).toJS();

        default:
            return state;
    }

};


export default newFolderReducer;

import {fromJS} from 'immutable';

const initialState = {
    uploadLoc: '',
};

function uploadLocPickerReducer(state = initialState, action) {

    switch (action.type) {

        case 'SET_INPUT_UPLOAD_LOC':
            let newLoc = action.payload;
            return fromJS(state).set('uploadLoc',newLoc).toJS();

        default:
            return state;
    }

};


export default uploadLocPickerReducer;

import {fromJS} from 'immutable';

const initialState = {
    fTag:"file_general"}

function fileTagReducer(state = initialState, action) {

        switch (action.type) {

            case 'INPUT_FILE_TAG':
                let newTag = action.payload
                return fromJS(state).set('fTag', newTag).toJS();

            default:
                return state;
        }

    };

    export default fileTagReducer

import {fromJS} from 'immutable';

const initialState = {
    isLoadingShp: false,
    shpBufferData: {},
    isShpAdded: false
};

function shpViewReducer(state = initialState, action) {

    switch (action.type) {

        case 'SET_SHP_BUFFER_MAP':
            let oldData = state.shpBufferData;
            let successMsg =action.payload;
            oldData = successMsg;

            console.log('=====SET_SHP_BUFFER_MAP',successMsg);

            return fromJS(state).set('shpBufferData', successMsg).toJS();

        case 'SHP_FETCH_SUCCESS':
            return fromJS(state).set('isLoadingShp', false).toJS();

        case 'SHP_FETCH_FAILURE':
            return fromJS(state).set('isLoadingShp', false).toJS();

        case 'SHP_FETCH_START':
            return fromJS(state).set('isLoadingShp', true).toJS();

        case 'ADD_SHP':
            return fromJS(state).set('isShpAdded', true).toJS();

        case 'REMOVE_SHP':
            return fromJS(state).set('isShpAdded', false).toJS();

        default:
            return state;
    }

};


export default shpViewReducer;

import {fromJS} from 'immutable';
// import {  deepCopy2dArray, deepCopy2dArrayLen} from '../script/DeepCopy'

// dirList: [['影像','dirid1'], ['武汉数据', 'dirid2']]

const initialState = {
    showFloatActionModal: false

};

function floatActionModalReducer(state = initialState, action) {

    switch (action.type) {

        case 'HIDE_FAB_MODAL':
            return fromJS(state).set('showFloatActionModal', false).toJS();

        case 'SHOW_FAB_MODAL':
            return fromJS(state).set('showFloatActionModal', true).toJS();

        default:
            return state;
    }
}

export default floatActionModalReducer;

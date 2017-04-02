import {fromJS} from 'immutable';
// import {  deepCopy2dArray, deepCopy2dArrayLen} from '../script/DeepCopy'

// dirList: [['影像','dirid1'], ['武汉数据', 'dirid2']]

const initialState = {
    showFloatActionModal: false,
    showModalInputBorder: true,
    showModalCancelBtn:true,
    fabModalTitle:'Modal 标题',
    fabModalInputValue:'',
    fabModalInputSpan:'请输入',
    fabModalType:'',
    fabModalOKParams:{
        param:''
    }
};

function floatActionModalReducer(state = initialState, action) {

    switch (action.type) {

        case 'HIDE_FAB_MODAL':
            return fromJS(state).set('showFloatActionModal', false).toJS();

        case 'SHOW_FAB_MODAL':
            return fromJS(state).set('showFloatActionModal', true).toJS();

        case 'HIDE_FAB_MODAL_INPUT_BORDER':
            return fromJS(state).set('showModalInputBorder', false).toJS();

        case 'SHOW_FAB_MODAL_INPUT_BORDER':
            return fromJS(state).set('showModalInputBorder', true).toJS();

        case 'HIDE_FAB_MODAL_CANCEL_BTN':
            return fromJS(state).set('showModalCancelBtn', false).toJS();

        case 'SHOW_FAB_MODAL_CANCEL_BTN':
            return fromJS(state).set('showModalCancelBtn', true).toJS();

        case 'SET_FAB_MODAL_TITLE':
            return fromJS(state).set('fabModalTitle', action.payload).toJS();

        case 'SET_FAB_MODAL_INPUT_VALUE':
            return fromJS(state).set('fabModalInputValue', action.payload).toJS();

        case 'SET_FAB_MODAL_INPUT_SPAN':
            return fromJS(state).set('fabModalInputSpan', action.payload).toJS();

        case 'SET_FAB_MODAL_TYPE':
            return fromJS(state).set('fabModalType', action.payload).toJS();

        case 'SET_FAB_MODAL_OK_PARAMS':
            return fromJS(state).set('fabModalOKParams', action.payload).toJS();

        default:
            return state;
    }
}

export default floatActionModalReducer;

import {fromJS} from 'immutable';
import {  deepCopy2dArray, deepCopy2dArrayLen} from '../script/DeepCopy'

// dirList: [['影像','dirid1'], ['武汉数据', 'dirid2']]

const initialState = {
    dirList:  JSON.parse(sessionStorage.getItem('gbCurDir')) || [ ]
};

function currentDirReducer(state = initialState, action) {

    switch (action.type) {

        case 'ADD_DIR_BREADCRUMB':
            // console.log('面包屑添加', action.payload);

            let selectedDir = action.payload;
            let oldDirs = state.dirList;

            oldDirs.push(selectedDir);
            // console.log(oldDirs)
            let newDirs = deepCopy2dArray(oldDirs);
            // let newState =fromJS(state).set('dirList',oldDirs.concat(newDir)).toJS();
            sessionStorage.setItem("gbCurDir",JSON.stringify(newDirs));
            let newState = fromJS(state).set('dirList', newDirs).toJS();
            // console.log(newState);
            return newState;

        case 'REMOVE_TAIL_DIR':
            // console.log('面包屑移除',action.payload)

            let dueOrder = parseInt(action.payload) + 1;
            console.log(dueOrder);

            let oldDirs2 = state.dirList;
            console.log(oldDirs2);

            let newDirs2=deepCopy2dArrayLen(oldDirs2,dueOrder);
            // console.log(newDirs2)
            sessionStorage.setItem("gbCurDir",JSON.stringify(newDirs2));
            let newState2 = fromJS(state).set('dirList', newDirs2).toJS();
            // console.log(newState2);
            return newState2;

        case 'SET_CURRENT_ROOT':
            sessionStorage.setItem("gbCurDir",JSON.stringify([]));
            return fromJS(state).set('dirList', []).toJS();

        default:
            return state;
    }
}

export default currentDirReducer;

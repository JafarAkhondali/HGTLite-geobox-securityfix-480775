import {push} from 'react-router-redux';

let toggleMapActions = {

    toggleMapList: function() {
        return function(dispatch, getState) {
            const state = getState();

            console.log('显示地图状态',state.toggleMap.showingMap);

            if(state.toggleMap.showingMap == 'true'){
                dispatch(toggleMapActions.showFileList());
                dispatch(push('/disk'));
            }else{
                dispatch(push('/filemap'));
                dispatch(toggleMapActions.showFileMap());
            }
        }
    },

    showFileList: ( ) => ({
        type: 'SHOW_FILE_LIST',
        // payload: uid
    }),
    showFileMap: () => ({
        type: 'SHOW_FILE_MAP',
        // payload: uid
    })
}

export default toggleMapActions;

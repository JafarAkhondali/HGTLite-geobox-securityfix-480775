import BASE_URL from '../script/BaseUrl';
import VERSION from '../script/Version';
import fileListActions from './fileListAction';
import {fromJS} from 'immutable';

let currentDirActions = {

    // TODO: 添加面包屑时要过滤待添加的目录id和dirList的末位元素相同的情况

    fetchSelectedDir: function(dirId) {

        return function(dispatch, getState) {
            // console.log(dirId);

            const state = getState();

            // console.log('显示地图状态', state.toggleMap.showingMap);

            // 根据dirId获取指定目录下文件
            var selectedDirURL = BASE_URL.localServer + '/' + VERSION.api + '/files/' + state.userNameNav.userName + '/'+dirId+'/all';

            fetch(selectedDirURL, {
                mode: 'cors'
            }).then(function(response) {
                // console.log('response2');
                // console.log('===res statusText',res.statusText)
                return response.json();
            }).then(function(json) {
                // console.log('json2')

                let newDirList = json;
                // console.log('获取指定目录', newDirList);

                sessionStorage.setItem('gbUserFiles', JSON.stringify(newDirList));

                dispatch(fileListActions.fileFetchSuccess(newDirList));

            }).catch(e => {
                console.log('根据dirId获取指定目录下文件失败')

                // console.log(e)
                console.log(e.message)

            });
        }

    },

    refreshParent: function(type,id) {

        return function(dispatch, getState) {
            // console.log(dirId);

            const state = getState();

            // console.log('显示地图状态', state.toggleMap.showingMap);

            // 根据当前fileId或dirId刷新父目录
            var refreshURL = BASE_URL.localServer + '/' + VERSION.api + '/files/refresh/' + state.userNameNav.userName + '/'+id+'/'+type+'/all';

            fetch(refreshURL, {
                mode: 'cors'
            }).then(function(response) {
                // console.log('response');
                // console.log('===res statusText',res.statusText)
                return response.json();
            }).then(function(json) {
                // console.log('json2')

                let newDirList = json;
                // console.log('获取指定目录', newDirList);

                sessionStorage.setItem('gbUserFiles', JSON.stringify(newDirList));

                dispatch(fileListActions.fileFetchSuccess(newDirList));


            }).catch(e => {
                console.log('根据当前fileId或dirId刷新父目录失败')

                // console.log(e)
                console.log(e.message)

            });
        }

    },

    addDirBreadcrumb: (dName, dId) => ({
        type: "ADD_DIR_BREADCRUMB",
        payload: [dName, dId]
    }),
    removeTailDir: (order) => ({
        type: "REMOVE_TAIL_DIR",
        payload: order
    }),
    setCurrentRoot:() => ({
        type: "SET_CURRENT_ROOT"
    }),
}

export default currentDirActions;

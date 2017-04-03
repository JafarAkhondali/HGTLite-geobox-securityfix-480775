import BASE_URL from '../script/BaseUrl';
import VERSION from '../script/Version';
import {push} from 'react-router-redux';

// import fileListActions from './fileListAction';

let shpViewActions = {

    fetchShpFileArrayBuffer: function(shpUrl) {

        return function(dispatch, getState) {

            const state = getState();

            // console.log('显示地图状态', state.toggleMap.showingMap);

            // var shpFileURL = BASE_URL.localServer + '/' + VERSION.api + '/files/' + state.userNameNav.userName + '/'+dirId+'/all';
            var shpFileURL = shpUrl;

            // 获取shp文件
            fetch(shpFileURL, {
                mode: 'cors'
            }).then(function(response) {
                dispatch(shpViewActions.shpFetchStart());
                // console.log('response2');
                // console.log('===res statusText',res.statusText)
                return response.arrayBuffer();
            }).then(function(buffer) {
                // console.log('json2')

                let shpBuffer = buffer;
                console.log('文件是',shpBuffer);
                console.log(typeof shpBuffer);

                // console.log('获取shp文件成功', newDirList);

                dispatch(shpViewActions.setShpBufferMap(shpBuffer));
                dispatch(shpViewActions.addShp());
                dispatch(shpViewActions.shpFetchSuccess());

                // sessionStorage.setItem('gbUserFiles', JSON.stringify(newDirList));

                // dispatch(fileListActions.fileFetchSuccess(newDirList));
                dispatch(push('/shp'))

        }).catch(e => {
            console.log('获取shp文件失败');
            dispatch(shpViewActions.shpFetchFailure());
            console.log( e)
            console.log(e.message)

        });
    }

},
setShpBufferMap:(buffer1)=>({
    type:'SET_SHP_BUFFER_MAP',
    payload:buffer1
}),

shpFetchStart: () => ({
    type: 'SHP_FETCH_START'
}),

shpFetchSuccess: () => ({
    type: 'SHP_FETCH_SUCCESS'
}),

addShp: () => ({
    type: 'ADD_SHP'
}),
removeShp: () => ({
    type: 'REMOVE_SHP'
}),

}

export default shpViewActions;

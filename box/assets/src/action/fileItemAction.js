import BASE_URL from '../script/BaseUrl';
import VERSION from '../script/Version';
import fileListActions from './fileListAction';

let fileItemActions = {

    fetchSelectedDir: function(dirId) {

        return function(dispatch, getState) {

            const state = getState();

            // console.log('显示地图状态', state.toggleMap.showingMap);

            // 获取用户根目录
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
                // console.log('获取用户根目录', newDirList);

                sessionStorage.setItem('gbUserFiles', JSON.stringify(newDirList));

                dispatch(fileListActions.fileFetchSuccess(newDirList));

        }).catch(e => {
            console.log('获取指定目录文件失败')

            console.log( e)
            console.log(e.message)

        });
    }

}
}

export default fileItemActions;

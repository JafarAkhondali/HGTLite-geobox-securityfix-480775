import BASE_URL from '../script/BaseUrl';
import VERSION from '../script/Version';
import currentDirAction from './currentDirAction';

let newFolderActions = {
    fetchNewFolder:function(folderName){
        // 默认在当前目录添加新文件夹
             return function(dispatch, getState) {

                const state = getState();
                // console.log(state);
                let userId =state.userNameNav.userName;
                let curDirList = state.currentDir.dirList;
                console.log('=====新建文件夹检查当前目录',curDirList)
                console.log(typeof curDirList)
                let parentDirId='';

                if(curDirList==[]||curDirList==undefined||curDirList==null){
                    parentDirId ='0';
                }else{
                    console.log(curDirList)
                    let curLen = curDirList.length;
                     parentDirId=curDirList[(curLen-1)][1];
                }
                console.log('最终目录id',parentDirId)

                let dirName=folderName;

                console.log('=====新建文件夹的参数',userId,parentDirId,folderName);

                var newDirURL=BASE_URL.localServer+'/dir/add/'+userId+'/'+parentDirId+'/'+dirName;

                fetch(newDirURL,{
                    mode:'cors'
                }).then(function(response){
                    return response.json()
                }).then(function(json){
                    let newFolderResult = json;

                    console.log('=====新建文件夹结果',newFolderResult);

                    dispatch(currentDirAction.fetchSelectedDir(parentDirId));

                    dispatch(newFolderActions.cancelNewFolder());


                })



            }
    },

    newFolderFirst: () => ({
        type: "NEW_FOLDER_FIRST"
    }),
    cancelNewFolder: () => ({
        type: "CANCEL_NEW_FOLDER"
    })
}

export default newFolderActions;

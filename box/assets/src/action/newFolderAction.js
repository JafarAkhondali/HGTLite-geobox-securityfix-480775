let newFolderActions = {
    fetchNewFolder:function(folderName){
        // TODO: 添加文件夹后台
             return function(dispatch, getState) {

                const state = getState();
                // console.log(state);

                console.log(folderName);

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

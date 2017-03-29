// import userNameNavActions from './userNameNavAction'

let fileListActions = {

    fetchFile: function () {

        return function (dispatch, getState) {

            const state =getState();
            console.log(state);

            if (state.fileList.isPicking) {
                console.log("正在请求文件");
                return;
            }

            dispatch(fileListActions.fileFetchStart());
            var listFileURL = 'https://api.github.com/users/uptonking';
            fetch(listFileURL, {
                mode: 'cors'
            })
                .then(res => {

                    if (res.status != 200) {
                        dispatch(fileListActions.fileFetchFailure(res.statusText));
                    }

                    // console.log(res.json())

                    /** 备注这里的url只是测试用的，这个是之前hacker news的api, 这里只是确保接口是通的，至于数据还是自己mock */
                    let weight = Math.floor(200 + Math.random() * 50);

                    let newFile = [{

                        fileId: "file00"+weight,
                        style:'fa-folder-o',
                        name: '武汉市地图' + weight,
                        size: '456.7 MB',
                        typeId: '文件夹',
                        tags: '老河口',
                        modified: '2017-02-28',
                        clickHref:'www.baidu.com'
                    }]

                    dispatch(fileListActions.fileFetchSuccess(newFile));



                }).catch(e => {
                dispatch(fileListActions.fileFetchFailure(e.statusText));
            });

        }
    },

    fileFetchStart: () => ({
        type: 'FILE_FETCH_START'
    }),

    fileFetchSuccess: newFile => ({
        type: 'FILE_FETCH_SUCCESS',
        payload: newFile
    }),

    fileFetchFailure: errMsg => ({
        type: 'FILE_FETCH_FAILURE',
        payload: new Error(errMsg),
        error: true
    }),


};

export default fileListActions;

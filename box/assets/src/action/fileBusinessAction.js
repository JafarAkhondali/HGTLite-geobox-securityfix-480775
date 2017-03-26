
let fileBusinessActions = {

    fetchFile: function () {

        return function (dispatch, getState) {
            if (getState().fileList.isPicking) {
                console.log("正在请求文件");
                return;
            }

            dispatch(fileBusinessActions.fileFetchStart());
            var listFileURL = 'https://api.github.com/users/uptonking';
            fetch(listFileURL, {
                mode: 'cors'
            })
                .then(res => {
                    if (res.status != 200) {
                        dispatch(fileBusinessActions.fileFetchFailure(res.statusText));
                    }

                    console.log(res.json())

                    /** 备注这里的url只是测试用的，这个是之前hacker news的api, 这里只是确保接口是通的，至于数据还是自己mock */
                    let weight = Math.floor(200 + Math.random() * 50);

                    let newFile = {
                        id: "file000" + weight,
                        name: '武汉市地图' + weight,
                        size: '6.7 MB',
                        type: '文件夹',
                        modified: '2017-02-27'
                    }

                    dispatch(fileBusinessActions.fileFetchSuccess(newFile));

                }).catch(e => {
                dispatch(fileBusinessActions.fileFetchFailure(e.statusText));
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

export default fileBusinessActions;

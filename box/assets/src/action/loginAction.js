
import BASE_URL from '../script/BaseUrl';
import VERSION from '../script/Version';

let loginActions = {

    fetchLogin: function () {

        return function (dispatch, getState) {

            if (getState().login.islogining) {
                console.log("正在发送登录请求");
                return;
            }

            dispatch(loginActions.loginFetchStart());

            var loginURL = BASE_URL.localServer +'/'+VERSION.api+ '/user/login';
            fetch(loginURL, {
                mode: 'cors'
            })
                .then(res => {
                    if (res.status != 200) {
                        dispatch(loginActions.loginFetchFailure(res.statusText));
                    }

                    console.log(res.json())

                    /** 备注这里的url只是测试用的，这个是之前hacker news的api, 这里只是确保接口是通的，至于数据还是自己mock */
                    let weight = Math.floor(200 + Math.random() * 50);

                    let loginJson = {
                        msg:'登录成功'
                    }

                    dispatch(loginActions.loginFetchSuccess(loginJson));

                }).catch(e => {
                dispatch(loginActions.loginFetchFailure(e.statusText));
            });

        }
    },

    loginFetchStart: () => ({
        type: 'LOGIN_FETCH_START'
    }),

    loginFetchSuccess: loginResult => ({
        type: 'LOGIN_FETCH_SUCCESS',
        payload: loginResult
    }),

    loginFetchFailure: errMsg => ({
        type: 'LOGIN_FETCH_FAILURE',
        payload: new Error(errMsg),
        error: true
    }),


};

export default loginActions;

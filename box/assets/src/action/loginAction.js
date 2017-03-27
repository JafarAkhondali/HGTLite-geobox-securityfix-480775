import BASE_URL from '../script/BaseUrl';
import VERSION from '../script/Version';

let loginActions = {

    fetchLogin: function(formData) {



        return function(dispatch, getState) {

            const state = getState();
            // console.log(state);

            if (state.login.islogining) {
                console.log("正在发送登录请求");
                return;
            }


            dispatch(loginActions.loginFetchStart());

            var loginURL = BASE_URL.localServer + '/' + VERSION.api + '/user/login';
            fetch(loginURL, {
                    mode: 'cors',
                    method: 'POST',
                    body: formData
                }).then(function(response) {
                    return response.json();
                })
                .then(function(json) {

                    // console.log('登录成功')

                    // if (res.status != 200) {
                    //     dispatch(loginActions.loginFetchFailure(res.statusText));
                    // }

                    let loginResponseJson = json;

                    // console.log('=====login',loginResponseJson)
                    let loginResult = {};
                    loginResult.userName = loginResponseJson.user_name;
                    loginResult.msg = loginResponseJson.validate_result;
                    console.log(loginResult)

                    dispatch(loginActions.loginFetchSuccess(loginResult));


                }).catch(e => {
                    // console.log('登录失败')

                    // console.log( e)
                    let loginResult = {};
                    loginResult.msg = '登录失败：' + e.message;

                    dispatch(loginActions.loginFetchFailure(loginResult));
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

    loginFetchFailure: loginResult => ({
        type: 'LOGIN_FETCH_FAILURE',
        payload: loginResult,
        error: true
    }),


};

export default loginActions;

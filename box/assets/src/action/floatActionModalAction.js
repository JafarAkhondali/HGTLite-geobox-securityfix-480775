import BASE_URL from '../script/BaseUrl';
import VERSION from '../script/Version';
import currentDirActions from './currentDirAction';
import {fromJS} from 'immutable';
import {toastr} from 'react-redux-toastr';

let floatActionModalActions = {

    renameFileOrDir:function(params){

             return function(dispatch, getState) {

                const state = getState();
                // console.log(state);

                // console.log('=====renameFileOrDir',params);

                // 重命名文件或文件夹
                var renameURL = BASE_URL.localServer + '/' + VERSION.api + '/file/rename/' + params.id + '/'+params.newName+'/'+params.type;

                fetch(renameURL, {
                    mode: 'cors'
                }).then(function(response) {
                    // console.log('response2');
                    // console.log('===res statusText',res.statusText)
                    return response.json();
                }).then(function(json) {
                    // console.log('json2')

                    let renameResult = json;

                    // console.log('重命名文件或文件夹结果', renameResult);
                    // console.log(typeof renameResult.result);
                    if(renameResult.result){
                        dispatch(currentDirActions.refreshParent(params.type,params.id));
                        toastr.success('重命名成功');
                    }else{
                        toastr.error("重命名失败")
                    }

                    // sessionStorage.setItem('gbUserFiles', JSON.stringify(newDirList));


                }).catch(e => {
                    console.log('重命名文件或文件夹失败')

                    // console.log(e)
                    console.log(e.message)

                    toastr.error("重命名失败")

                });



            }
    },

    setFABModalTitle:(mTitle)=>({
        type:"SET_FAB_MODAL_TITLE",
        payload:mTitle

    }),
    setFABModalInputValue:(v)=>({
        type:"SET_FAB_MODAL_INPUT_VALUE",
        payload:v

    }),
    setFABModalInputSpan:(s)=>({
        type:"SET_FAB_MODAL_INPUT_SPAN",
        payload:s

    }),
    setFABModalType:(type)=>({
        type:"SET_FAB_MODAL_TYPE",
        payload:type

    }),
    setFABModalOKParams:(p)=>({
        type:"SET_FAB_MODAL_OK_PARAMS",
        payload:p

    }),
    showFABModal: () => ({
        type: "SHOW_FAB_MODAL"
    }),
    hideFABModal: () => ({
        type: "HIDE_FAB_MODAL"
    }),
    showFABModalInputBorder: () => ({
        type: "SHOW_FAB_MODAL_INPUT_BORDER"
    }),
    hideFABModalInputBorder: () => ({
        type: "HIDE_FAB_MODAL_INPUT_BORDER"
    }),
    showFABModalCancleBtn: () => ({
        type: "SHOW_FAB_MODAL_CANCEL_BTN"
    }),
    hideFABModalCancelBtn: () => ({
        type: "HIDE_FAB_MODAL_CANCEL_BTN"
    }),
}

export default floatActionModalActions;

import {
    fromJS
}
from 'immutable';

// {
//     fileId: "file001",
//     style:'fa-folder-o',
//     name: '武汉市地图',
//     size: '456.7 MB',
//     typeId: '文件夹',
//     tags: '老河口',
//     modified: '2017-02-28',
//     clickHref:'www.baidu.com'
// }

const initialState = {
    isPicking: false,
    files: JSON.parse(sessionStorage.getItem('gbUserFiles')) || [ ]
};

// function getInitialState() {
//     console.log(localStorage.getItem('gbUserFiles'));
//     var files1 = JSON.parse(localStorage.getItem('gbUserFiles')) || [];
//
//     return {
//         isPicking: false,
//         files: files1
//     };
// }

function fileListReducer(state = initialState, action) {

    switch (action.type) {

        case 'FILE_FETCH_START':
            return fromJS(state).set('isPicking', true).toJS();

        case 'FILE_FETCH_SUCCESS':
            // let newFile = {
            //     fileId: action.payload.fileId,
            //     style: action.payload.style,
            //     name: action.payload.name,
            //     size: action.payload.size,
            //     typeId: action.payload.typeId,
            //     tags: action.payload.tags,
            //     modified: action.payload.modified,
            //     clickHref:action.payload.clickHref
            // };
            let newFiles = action.payload;
            // console.log(newFiles)

            console.log('=======fileListReducer, newFiles')

            return fromJS(state).set('files', newFiles)
                .set('isPicking', false)
                .toJS();

        case 'FILE_FETCH_FAILURE':
            return fromJS(state).set('isPicking', false).toJS();

        default:
            return state;
    }

};

export default fileListReducer

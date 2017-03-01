import {fromJS} from 'immutable';

const initialState = {
    isPicking: false,
    newFileId: "file000099",
    files: [
        {
            id: "file000001",
            name: '武汉市地图',
            size: '456.7 MB',
            type: '文件夹',
            modified: '2017-02-28'
        },
        {
            id: "file000002",
            name: '武汉市地图2',
            size: '456.7 MB',
            type: '文件夹',
            modified: '2017-02-28'
        },
        {
            id: "file000003",
            name: '老河口地理国情数据',
            size: '8.6 GB',
            type: '文件夹',
            modified: '2017-02-28'
        }
    ]
};

function fileListReducer(state = initialState, action) {

    switch (action.type) {

        case 'FILE_FETCH_START':
            return fromJS(state).set('isPicking', true).toJS();

        case 'FILE_FETCH_SUCCESS':
            let newFile = {
                id: action.payload.id,
                name: action.payload.name,
                size: action.payload.size,
                type: action.payload.type,
                modified: action.payload.modified
            };
            return fromJS(state).update('files', list => list.push(newFile))
                .set('isPicking', false)
                .toJS();

        case 'FILE_FETCH_FAILURE':
            return fromJS(state).set('isPicking', false).toJS();

        default:
            return state;
    }

};

export default fileListReducer
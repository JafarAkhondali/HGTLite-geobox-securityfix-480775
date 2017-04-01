
import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import currentDirReducer from './currentDirReducer';
import fileListReducer from './fileListReducer';
import fileFABReducer from './fileFABReducer';
import fileTagReducer from './fileTagReducer';
import loginReducer from './loginReducer';
import newFolderReducer from './newFolderReducer';
import registerReducer from './registerReducer';
import toggleMapReducer from './toggleMapReducer';
import userNameNavReducer from './userNameNavReducer';
import uploadLocPickerReducer from './uploadLocPickerReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    currentDir:currentDirReducer,
    fileList: fileListReducer,
    fileFAB: fileFABReducer,
    fileTag:fileTagReducer,
    login:loginReducer,
    newFolder:newFolderReducer,
    register:registerReducer,
    userNameNav:userNameNavReducer,
    uploadLocPicker:uploadLocPickerReducer,
    toggleMap:toggleMapReducer,
    routing: routerReducer
});

export default rootReducer;

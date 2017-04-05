import {fromJS} from 'immutable';

const initialState = {
    searchInputValue: ''
};

function searchIndexReducer(state = initialState, action) {

    switch (action.type) {
        // case 'LOGIN_FETCH_SUCCESS':
        //     // console.log(action.payload)
        //     // let uName = action.payload.userName
        //     sessionStorage.setItem('visibleStyle','visible-true');
        //     return fromJS(state).set('visibleStyle', 'visible-true').toJS();
        // case 'LOG_OUT':
        //     // sessionStorage.removeItem('gbUser');
        //     sessionStorage.setItem('showingMap','false');
        //     sessionStorage.setItem('visibleStyle','visible-false');
        //     return fromJS(state).set('visibleStyle', 'visible-false').toJS();
        // case 'SHOW_FILE_MAP':
        //     // console.log('执行')
        //     sessionStorage.setItem('toggleStyle','fa-bars');
        //     sessionStorage.setItem('showingMap','true');
        //     return fromJS(state).set('toggleStyle', 'fa-bars').set('showingMap','true').toJS();
        case 'SET_SEARCH_INDEX_INPUT':
            return fromJS(state).set('searchInputValue', action.payload).toJS();
        default:
            return state;
    }

}

export default searchIndexReducer;

import {fromJS} from 'immutable';

const initialState = {
    showingMap: sessionStorage.getItem('showingMap')||'false',
    visibleStyle: sessionStorage.getItem('visibleStyle')||'visible-false',
    toggleStyle: sessionStorage.getItem('toggleStyle')||'fa-map-o'
};

function toggleMapReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOGIN_FETCH_SUCCESS':
            // console.log(action.payload)
            // let uName = action.payload.userName
            sessionStorage.setItem('visibleStyle','visible-true');
            return fromJS(state).set('visibleStyle', 'visible-true').toJS();
        case 'LOG_OUT':
            // sessionStorage.removeItem('gbUser');
            sessionStorage.setItem('showingMap','false');
            sessionStorage.setItem('visibleStyle','visible-false');
            return fromJS(state).set('visibleStyle', 'visible-false').toJS();
        case 'SHOW_FILE_MAP':
            // console.log('执行')
            sessionStorage.setItem('toggleStyle','fa-bars');
            sessionStorage.setItem('showingMap','true');
            return fromJS(state).set('toggleStyle', 'fa-bars').set('showingMap','true').toJS();
        case 'SHOW_FILE_LIST':
            sessionStorage.setItem('toggleStyle','fa-map-o');
            sessionStorage.setItem('showingMap','false');
            return fromJS(state).set('toggleStyle', 'fa-map-o').set('showingMap','false').toJS();
        default:
            return state;
    }

}

export default toggleMapReducer;

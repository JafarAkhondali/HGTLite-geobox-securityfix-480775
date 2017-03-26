import {fromJS} from 'immutable';

function userNameNavReducer(state = {showingUserName: false}, action) {
    switch (action.type) {
        case 'SHOW_USER_NAME':
            // console.log(action.paylod)
            return {showingFAB: true};
        case 'HIDE_FAB':
            return {showingFAB: false};
        default:
            return state;
    }
}

export default userNameNavReducer;

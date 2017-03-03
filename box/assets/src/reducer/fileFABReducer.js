import {fromJS} from 'immutable';



function fileFABReducer(state = {showingFAB: false}, action) {
    switch (action.type) {
        case 'SHOW_FAB':
            // console.log(action.paylod)
            return {showingFAB: true};
        case 'HIDE_FAB':
            return {showingFAB: false};
        default:
            return state;
    }
}

export default fileFABReducer;
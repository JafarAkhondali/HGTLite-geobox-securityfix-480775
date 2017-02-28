import { fromJS } from 'immutable';

const initialState = {
    isPicking: false,
    newAppleId: 3,
    files: [
        {
            name: '武汉市地图',
            size: '456.7 MB',
            type: '文件夹',
            modified:'2017-02-28'
        },
        {
            name: '武汉市地图2',
            size: '456.7 MB',
            type: '文件夹',
            modified:'2017-02-28'
        },
        {
            name: '老河口地理国情数据',
            size: '8.6 GB',
            type: '文件夹',
            modified:'2017-02-28'
        }
    ]
};


export default (state = initialState, action) => {

    let newState ;

    switch (action.type) {

        case 'apple/BEGIN_PICK_APPLE':

            /** 将isPicking设置true */
            return fromJS(state).set('isPicking', true).toJS();

        case 'apple/DONE_PICK_APPLE':

            let newApple =  {
                id: state.newAppleId,
                weight: action.payload,
                isEaten: false
            };

            /** 在apples中新增一个newApple， 将newAppleId增加1， 将isPicking设为false*/
            return fromJS(state).update('apples', list => list.push(newApple))
                .set('newAppleId', state.newAppleId + 1)
                .set('isPicking', false)
                .toJS();

        case 'apple/FAIL_PICK_APPLE':

            /** 将isPicking设置false */
            return fromJS(state).set('isPicking', false).toJS();

        case 'apple/EAT_APPLE':

            /** 将id对应索引值的数组的isEaten设为true,表示已吃*/
            return fromJS(state).setIn(['apples', action.payload, 'isEaten'], true).toJS();

        default:
            return state;
    }

};

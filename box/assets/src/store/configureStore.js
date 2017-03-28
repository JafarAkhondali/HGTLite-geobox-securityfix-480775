import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import reducer from '../reducer';


const middleware = applyMiddleware(
  routerMiddleware(hashHistory),
  thunk
);

export default function configureStore() {

    const store = createStore(reducer, middleware);

    return store
}

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const inititialState = {};
export const middleware = [thunk];
const store = createStore(
    rootReducer,
     inititialState,
     composeWithDevTools(
          applyMiddleware(...middleware),
         )
    );
export default store;
import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga'  
import IntialReducer from '../src/components/Authentication/signIn/reducer';
import IntialSaga from '../src/components/Authentication/signIn/saga'
const sagaMiddleware = createSagaMiddleware()

export const store=createStore(IntialReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(IntialSaga)
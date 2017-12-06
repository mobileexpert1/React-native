import { createStore,applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import loginreducer from '../../Screens/Login/reducer.js'
import thunk from 'redux-thunk'
let store =  createStore(loginreducer,applyMiddleware(thunk));
export default store;

// export default function ConfigureStore() {
//     let store = createStore(rootReducer)
//     return store
// }  